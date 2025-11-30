import { OrderWithItems } from '@/types/types';
import { format } from 'date-fns';

interface PrintBillProps {
  order: OrderWithItems;
}

export default function PrintBill({ order }: PrintBillProps) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="print-bill">
      <style>{`
        @media print {
          body * {
            visibility: hidden;
          }
          .print-bill, .print-bill * {
            visibility: visible;
          }
          .print-bill {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
          }
          .no-print {
            display: none !important;
          }
        }
      `}</style>

      <div className="max-w-2xl mx-auto p-8 bg-white text-black">
        {/* Header */}
        <div className="text-center mb-8 border-b-2 border-black pb-4">
          <h1 className="text-3xl font-bold mb-2">{order.restaurant?.name || 'Restaurant'}</h1>
          {order.restaurant?.location && (
            <p className="text-sm">{order.restaurant.location}</p>
          )}
          {order.restaurant?.contact_details && (
            <p className="text-sm">{order.restaurant.contact_details}</p>
          )}
        </div>

        {/* Bill Title */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold">E-BILL</h2>
          <p className="text-sm mt-2">Order #{order.id.slice(0, 8).toUpperCase()}</p>
        </div>

        {/* Order Details */}
        <div className="mb-6 grid grid-cols-2 gap-4 text-sm">
          <div>
            <p><strong>Date:</strong> {format(new Date(order.created_at), 'MMM dd, yyyy')}</p>
            <p><strong>Time:</strong> {format(new Date(order.created_at), 'HH:mm')}</p>
          </div>
          <div>
            {order.table && <p><strong>Table:</strong> {order.table.table_number}</p>}
            {order.customer && (
              <p><strong>Customer:</strong> {order.customer.full_name || order.customer.username}</p>
            )}
          </div>
        </div>

        {/* Items Table */}
        <table className="w-full mb-6">
          <thead>
            <tr className="border-b-2 border-black">
              <th className="text-left py-2">Item</th>
              <th className="text-center py-2">Qty</th>
              <th className="text-right py-2">Price</th>
              <th className="text-right py-2">Total</th>
            </tr>
          </thead>
          <tbody>
            {order.order_items?.map((item, index) => (
              <tr key={item.id} className="border-b border-gray-300">
                <td className="py-3">
                  <div>
                    <p className="font-medium">{item.menu_item_name}</p>
                    {item.notes && (
                      <p className="text-xs text-gray-600 italic">Note: {item.notes}</p>
                    )}
                  </div>
                </td>
                <td className="text-center py-3">{item.quantity}</td>
                <td className="text-right py-3">${item.price.toFixed(2)}</td>
                <td className="text-right py-3 font-medium">
                  ${(item.price * item.quantity).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Total */}
        <div className="border-t-2 border-black pt-4 mb-6">
          <div className="flex justify-between items-center text-xl font-bold">
            <span>TOTAL</span>
            <span>${order.total_amount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center text-sm mt-2">
            <span>Payment Method</span>
            <span className="capitalize">
              {order.payment_method === 'coc' ? 'Cash on Collection' : order.payment_method}
            </span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span>Payment Status</span>
            <span className="capitalize">{order.payment_status}</span>
          </div>
        </div>

        {/* Special Instructions */}
        {order.special_instructions && (
          <div className="mb-6 p-3 bg-gray-100 rounded">
            <p className="text-sm"><strong>Special Instructions:</strong></p>
            <p className="text-sm mt-1">{order.special_instructions}</p>
          </div>
        )}

        {/* Footer */}
        <div className="text-center text-sm border-t border-gray-300 pt-4">
          <p className="font-semibold mb-2">Thank you for dining with us!</p>
          <p className="text-xs text-gray-600">
            This is a computer-generated bill. No signature required.
          </p>
          <p className="text-xs text-gray-600 mt-1">
            Generated on {format(new Date(), 'MMM dd, yyyy HH:mm')}
          </p>
        </div>

        {/* Print Button (hidden when printing) */}
        <div className="no-print mt-8 text-center">
          <button
            onClick={handlePrint}
            className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            Print Bill
          </button>
        </div>
      </div>
    </div>
  );
}
