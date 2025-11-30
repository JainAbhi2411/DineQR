import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MessageCircle, X, Send } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m your DineQR assistant. How can I help you today?',
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const quickResponses: Record<string, string> = {
    'how to order': 'To place an order: 1) Scan the QR code on your table, 2) Browse the menu, 3) Add items to cart, 4) Proceed to checkout and payment.',
    'payment methods': 'We accept all major credit cards through our secure Stripe payment gateway.',
    'track order': 'You can track your order status in real-time from the Order History page in your dashboard.',
    'cancel order': 'To cancel an order, please contact the restaurant staff directly. Orders can only be cancelled before preparation begins.',
    'menu': 'You can view the restaurant menu by scanning the QR code on your table or from the restaurant\'s page.',
    'help': 'I can help you with: ordering food, payment methods, tracking orders, menu information, and general questions about DineQR.',
    'contact': 'For support, you can contact the restaurant directly using the contact details shown on the menu page.',
  };

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    for (const [key, response] of Object.entries(quickResponses)) {
      if (lowerMessage.includes(key)) {
        return response;
      }
    }
    
    if (lowerMessage.includes('qr') || lowerMessage.includes('scan')) {
      return 'To scan a QR code, go to the "Scan QR" option in your dashboard and point your camera at the QR code on your restaurant table.';
    }
    
    if (lowerMessage.includes('restaurant') || lowerMessage.includes('owner')) {
      return 'Restaurant owners can manage their menus, tables, and orders from the Owner Dashboard. You can add menu items, generate QR codes, and track orders in real-time.';
    }
    
    if (lowerMessage.includes('price') || lowerMessage.includes('cost')) {
      return 'Prices are displayed for each menu item. The total cost including tax will be shown at checkout.';
    }
    
    return 'I\'m here to help! You can ask me about ordering food, payment methods, tracking orders, or general questions about using DineQR.';
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage]);
    setInputMessage('');

    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputMessage),
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 h-12 w-12 rounded-full shadow-lg z-50 xl:bottom-6 xl:right-6 xl:h-14 xl:w-14"
          size="icon"
        >
          <MessageCircle className="w-5 h-5 xl:w-6 xl:h-6" />
        </Button>
      )}

      {isOpen && (
        <Card className="fixed bottom-0 right-0 left-0 h-[calc(100vh-80px)] shadow-2xl z-50 flex flex-col xl:bottom-6 xl:right-6 xl:left-auto xl:w-96 xl:h-[500px]">
          <CardHeader className="border-b py-3 xl:py-6">
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="flex items-center gap-2 text-base xl:text-lg">
                  <MessageCircle className="w-4 h-4 text-primary xl:w-5 xl:h-5" />
                  DineQR Assistant
                </CardTitle>
                <CardDescription className="text-xs xl:text-sm">Ask me anything!</CardDescription>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 xl:h-10 xl:w-10"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>

          <CardContent className="flex-1 overflow-y-auto p-3 space-y-3 xl:p-4 xl:space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-lg p-2.5 xl:max-w-[80%] xl:p-3 ${
                    message.sender === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted'
                  }`}
                >
                  <p className="text-xs xl:text-sm">{message.text}</p>
                  <p className="text-[10px] opacity-70 mt-1 xl:text-xs">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
          </CardContent>

          <div className="border-t p-3 xl:p-4">
            <div className="flex gap-2">
              <Input
                placeholder="Type your message..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                className="text-sm xl:text-base"
              />
              <Button onClick={handleSendMessage} size="icon" className="h-9 w-9 xl:h-10 xl:w-10">
                <Send className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex flex-wrap gap-1.5 mt-2 xl:gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setInputMessage('How to order?');
                  setTimeout(handleSendMessage, 100);
                }}
                className="text-xs h-7 px-2 xl:text-sm xl:h-8 xl:px-3"
              >
                How to order?
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setInputMessage('Track my order');
                  setTimeout(handleSendMessage, 100);
                }}
                className="text-xs h-7 px-2 xl:text-sm xl:h-8 xl:px-3"
              >
                Track order
              </Button>
            </div>
          </div>
        </Card>
      )}
    </>
  );
}
