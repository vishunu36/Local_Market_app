import { useApp, useTranslation } from '../AppContext';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { 
  ChevronLeft, 
  Minus, 
  Plus, 
  Trash2,
  IndianRupee,
  ShoppingBag
} from 'lucide-react';

export function CartScreen() {
  const { setCurrentScreen, cartItems, removeFromCart } = useApp();
  const t = useTranslation();

  const total = cartItems.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);

  const handleCheckout = () => {
    // Simulate checkout process
    setCurrentScreen('orders');
  };

  if (cartItems.length === 0) {
    return (
      <div className="h-full bg-gradient-to-br from-green-50 to-blue-50 flex flex-col">
        {/* Header */}
        <div className="bg-white shadow-sm p-6">
          <div className="flex items-center">
            <Button variant="ghost" size="icon" onClick={() => setCurrentScreen('home')} className="mr-4">
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <h1 className="text-2xl text-green-800">{t('cartTitle')}</h1>
          </div>
        </div>

        {/* Empty State */}
        <div className="flex-1 flex items-center justify-center p-6">
          <div className="text-center">
            <ShoppingBag className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl text-gray-600 mb-2">Your cart is empty</h3>
            <p className="text-gray-500 mb-6">Add some products to get started</p>
            <Button 
              onClick={() => setCurrentScreen('products')}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3"
            >
              Browse Products
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full bg-gradient-to-br from-green-50 to-blue-50 flex flex-col">
      {/* Header */}
      <div className="bg-white shadow-sm p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Button variant="ghost" size="icon" onClick={() => setCurrentScreen('home')} className="mr-4">
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <h1 className="text-2xl text-green-800">{t('cartTitle')}</h1>
          </div>
          <span className="text-sm text-gray-600">{cartItems.length} items</span>
        </div>
      </div>

      {/* Cart Items */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {cartItems.map((item) => (
          <Card key={item.id} className="bg-white border-0 shadow-lg">
            <CardContent className="p-4">
              <div className="flex gap-4">
                <div className="w-20 h-20 rounded-lg bg-green-100 flex items-center justify-center">
                  <span className="text-2xl">{item.emoji || '🛒'}</span>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg text-gray-800">{item.name}</h4>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 hover:bg-red-50"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-3">{item.seller}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <IndianRupee className="w-5 h-5 text-green-600" />
                      <span className="text-xl text-green-600">{item.price}</span>
                      <span className="text-gray-600 ml-1">/{item.unit}</span>
                    </div>
                    
                    <div className="flex items-center border rounded-lg">
                      <Button variant="ghost" size="icon" className="w-8 h-8">
                        <Minus className="w-4 h-4" />
                      </Button>
                      <span className="px-3 py-1 text-center min-w-12">
                        {item.quantity || 1}
                      </span>
                      <Button variant="ghost" size="icon" className="w-8 h-8">
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Checkout Section */}
      <div className="bg-white border-t p-6 space-y-4">
        {/* Order Summary */}
        <div className="space-y-2">
          <div className="flex justify-between text-gray-600">
            <span>Subtotal</span>
            <div className="flex items-center">
              <IndianRupee className="w-4 h-4" />
              <span>{total}</span>
            </div>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>Delivery Fee</span>
            <div className="flex items-center">
              <IndianRupee className="w-4 h-4" />
              <span>20</span>
            </div>
          </div>
          <div className="border-t pt-2 flex justify-between text-lg">
            <span>{t('total')}</span>
            <div className="flex items-center text-green-600">
              <IndianRupee className="w-5 h-5" />
              <span>{total + 20}</span>
            </div>
          </div>
        </div>

        {/* Checkout Button */}
        <Button 
          onClick={handleCheckout}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-4 text-lg h-auto"
        >
          {t('checkout')}
        </Button>
      </div>
    </div>
  );
}