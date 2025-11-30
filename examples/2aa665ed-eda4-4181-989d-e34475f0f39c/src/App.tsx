import React, { useState, useCallback, useEffect } from 'react';
import QRCode from 'qrcode';
import { QrCode, Download, RefreshCw, History, Trash2, Settings, X, Check, Copy, Share2 } from 'lucide-react';

type QRHistory = {
  id: string;
  text: string;
  timestamp: number;
  url: string;
};

type QRSettings = {
  width: number;
  margin: number;
  dark: string;
  light: string;
  errorCorrectionLevel: 'L' | 'M' | 'Q' | 'H';
};

function App() {
  const [text, setText] = useState('');
  const [qrUrl, setQrUrl] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [history, setHistory] = useState<QRHistory[]>(() => {
    const saved = localStorage.getItem('qr-history');
    return saved ? JSON.parse(saved) : [];
  });
  const [showHistory, setShowHistory] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [settings, setSettings] = useState<QRSettings>({
    width: 400,
    margin: 2,
    dark: '#000000',
    light: '#ffffff',
    errorCorrectionLevel: 'M'
  });
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    localStorage.setItem('qr-history', JSON.stringify(history));
  }, [history]);

  const generateQR = useCallback(async () => {
    if (!text) return;
    
    try {
      setIsGenerating(true);
      const url = await QRCode.toDataURL(text, {
        width: settings.width,
        margin: settings.margin,
        color: {
          dark: settings.dark,
          light: settings.light,
        },
        errorCorrectionLevel: settings.errorCorrectionLevel,
      });
      setQrUrl(url);
      
      // Add to history
      const newEntry: QRHistory = {
        id: Date.now().toString(),
        text,
        timestamp: Date.now(),
        url,
      };
      setHistory(prev => [newEntry, ...prev.slice(0, 9)]);
    } catch (err) {
      console.error(err);
    } finally {
      setIsGenerating(false);
    }
  }, [text, settings]);

  const handleDownload = useCallback(() => {
    if (!qrUrl) return;
    
    const link = document.createElement('a');
    link.download = `qrcode-${Date.now()}.png`;
    link.href = qrUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, [qrUrl]);

  const handleShare = useCallback(async () => {
    if (!qrUrl) return;
    
    try {
      const blob = await (await fetch(qrUrl)).blob();
      const file = new File([blob], 'qrcode.png', { type: 'image/png' });
      
      if (navigator.share) {
        await navigator.share({
          files: [file],
          title: 'QR Code',
          text: '分享QR码',
        });
      }
    } catch (error) {
      console.error('分享失败:', error);
    }
  }, [qrUrl]);

  const handleCopyImage = useCallback(async () => {
    if (!qrUrl) return;
    
    try {
      const blob = await (await fetch(qrUrl)).blob();
      await navigator.clipboard.write([
        new ClipboardItem({
          [blob.type]: blob
        })
      ]);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('复制失败:', err);
    }
  }, [qrUrl]);

  const clearHistory = useCallback(() => {
    setHistory([]);
  }, []);

  const loadFromHistory = useCallback((item: QRHistory) => {
    setText(item.text);
    setQrUrl(item.url);
    setShowHistory(false);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <QrCode className="w-6 h-6 text-indigo-600" />
            <h1 className="text-2xl font-bold text-gray-800">QR码生成器</h1>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setShowHistory(prev => !prev)}
              className="p-2 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
              title="历史记录"
            >
              <History className="w-5 h-5" />
            </button>
            <button
              onClick={() => setShowSettings(prev => !prev)}
              className="p-2 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
              title="设置"
            >
              <Settings className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <label htmlFor="text" className="block text-sm font-medium text-gray-700 mb-2">
              输入文本或URL
            </label>
            <input
              type="text"
              id="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="https://example.com"
            />
          </div>

          {showSettings && (
            <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900">QR码设置</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-700">尺寸</label>
                  <input
                    type="number"
                    value={settings.width}
                    onChange={(e) => setSettings(prev => ({ ...prev, width: Number(e.target.value) }))}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700">边距</label>
                  <input
                    type="number"
                    value={settings.margin}
                    onChange={(e) => setSettings(prev => ({ ...prev, margin: Number(e.target.value) }))}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700">前景色</label>
                  <input
                    type="color"
                    value={settings.dark}
                    onChange={(e) => setSettings(prev => ({ ...prev, dark: e.target.value }))}
                    className="mt-1 block w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700">背景色</label>
                  <input
                    type="color"
                    value={settings.light}
                    onChange={(e) => setSettings(prev => ({ ...prev, light: e.target.value }))}
                    className="mt-1 block w-full"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-sm text-gray-700">纠错级别</label>
                  <select
                    value={settings.errorCorrectionLevel}
                    onChange={(e) => setSettings(prev => ({ ...prev, errorCorrectionLevel: e.target.value as 'L' | 'M' | 'Q' | 'H' }))}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  >
                    <option value="L">低 (7%)</option>
                    <option value="M">中 (15%)</option>
                    <option value="Q">较高 (25%)</option>
                    <option value="H">高 (30%)</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          <button
            onClick={generateQR}
            disabled={!text || isGenerating}
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isGenerating ? (
              <>
                <RefreshCw className="w-5 h-5 animate-spin" />
                生成中...
              </>
            ) : (
              <>
                <QrCode className="w-5 h-5" />
                生成QR码
              </>
            )}
          </button>

          {qrUrl && (
            <div className="space-y-4">
              <div className="border-2 border-dashed border-gray-200 rounded-lg p-4 flex items-center justify-center bg-white">
                <img src={qrUrl} alt="QR Code" className="max-w-full h-auto" />
              </div>
              
              <div className="grid grid-cols-3 gap-3">
                <button
                  onClick={handleDownload}
                  className="bg-white text-indigo-600 border-2 border-indigo-600 py-2 px-4 rounded-lg hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 flex items-center justify-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  下载
                </button>
                <button
                  onClick={handleCopyImage}
                  className="bg-white text-indigo-600 border-2 border-indigo-600 py-2 px-4 rounded-lg hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 flex items-center justify-center gap-2"
                >
                  {copied ? (
                    <>
                      <Check className="w-5 h-5" />
                      已复制
                    </>
                  ) : (
                    <>
                      <Copy className="w-5 h-5" />
                      复制
                    </>
                  )}
                </button>
                <button
                  onClick={handleShare}
                  className="bg-white text-indigo-600 border-2 border-indigo-600 py-2 px-4 rounded-lg hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 flex items-center justify-center gap-2"
                >
                  <Share2 className="w-5 h-5" />
                  分享
                </button>
              </div>
            </div>
          )}

          {showHistory && (
            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-gray-900">历史记录</h3>
                <button
                  onClick={clearHistory}
                  className="text-red-600 hover:text-red-700 text-sm flex items-center gap-1"
                >
                  <Trash2 className="w-4 h-4" />
                  清空
                </button>
              </div>
              <div className="space-y-2 max-h-60 overflow-y-auto">
                {history.length === 0 ? (
                  <p className="text-gray-500 text-center py-4">暂无历史记录</p>
                ) : (
                  history.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer"
                      onClick={() => loadFromHistory(item)}
                    >
                      <div className="flex items-center gap-3">
                        <img src={item.url} alt="QR Code" className="w-12 h-12" />
                        <div>
                          <p className="text-sm font-medium text-gray-900 truncate max-w-xs">{item.text}</p>
                          <p className="text-xs text-gray-500">
                            {new Date(item.timestamp).toLocaleString()}
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setHistory(prev => prev.filter(h => h.id !== item.id));
                        }}
                        className="text-gray-400 hover:text-red-600 p-1"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;