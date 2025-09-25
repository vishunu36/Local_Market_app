import { useApp, useTranslation } from '../AppContext';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { 
  ShoppingCart, 
  Store, 
  Users, 
  TrendingUp, 
  MapPin, 
  Bell,
  Search,
  Star,
  IndianRupee
} from 'lucide-react';

export function HomeScreen() {
  const { setCurrentScreen, cartItems } = useApp();
  const t = useTranslation();

  const featuredProducts = [
    {
      id: '1',
      name: 'Fresh Tomatoes',
      price: 45,
      unit: 'kg',
      seller: 'Ravi Kumar',
      location: 'Guntur, AP',
      rating: 4.8,
      emoji: '🍅'
    },
    {
      id: '2',
      name: 'Organic Rice',
      price: 80,
      unit: 'kg',
      seller: 'Lakshmi Devi',
      location: 'Vijayawada, AP',
      rating: 4.9,
      emoji: '🌾'
    },
    {
      id: '3',
      name: 'Fresh Bananas',
      price: 40,
      unit: 'dozen',
      seller: 'Venkat Rao',
      location: 'East Godavari, AP',
      rating: 4.6,
      emoji: '🍌'
    }
  ];

  return (
    <div className="h-full bg-gradient-to-br from-green-50 to-blue-50 overflow-y-auto">
      {/* Header */}
      <div className="bg-white shadow-sm p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl text-green-800">{t('homeTitle')}</h1>
            <div className="flex items-center text-sm text-gray-600 mt-1">
              <MapPin className="w-4 h-4 mr-1" />
              <span>Vijayawada, Andhra Pradesh</span>
            </div>
          </div>
          <div className="flex gap-3">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-6 h-6" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative"
              onClick={() => setCurrentScreen('cart')}
            >
              <ShoppingCart className="w-6 h-6" />
              {cartItems.length > 0 && (
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-xs text-white">{cartItems.length}</span>
                </div>
              )}
            </Button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder={t('searchProducts')}
            className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none"
          />
        </div>
      </div>

      {/* Main Actions */}
      <div className="p-6 grid grid-cols-1 gap-4">
        <Card 
          className="bg-gradient-to-r from-green-500 to-green-600 text-white border-0 shadow-lg cursor-pointer transform transition-transform hover:scale-105"
          onClick={() => setCurrentScreen('products')}
        >
          <CardContent className="p-6 flex items-center">
            <ShoppingCart className="w-12 h-12 mr-4" />
            <div>
              <h3 className="text-xl mb-1">{t('buy')}</h3>
              <p className="text-green-100 text-sm">Browse fresh produce from local farmers</p>
            </div>
          </CardContent>
        </Card>

        <Card 
          className="bg-gradient-to-r from-blue-500 to-blue-600 text-white border-0 shadow-lg cursor-pointer transform transition-transform hover:scale-105"
          onClick={() => setCurrentScreen('farmer-dashboard')}
        >
          <CardContent className="p-6 flex items-center">
            <Store className="w-12 h-12 mr-4" />
            <div>
              <h3 className="text-xl mb-1">{t('sell')}</h3>
              <p className="text-blue-100 text-sm">List your products and reach more buyers</p>
            </div>
          </CardContent>
        </Card>

        <Card 
          className="bg-gradient-to-r from-orange-500 to-orange-600 text-white border-0 shadow-lg cursor-pointer transform-transform hover:scale-105"
          onClick={() => setCurrentScreen('support')}
        >
          <CardContent className="p-6 flex items-center">
            <Users className="w-12 h-12 mr-4" />
            <div>
              <h3 className="text-xl mb-1">{t('farmerSupport')}</h3>
              <p className="text-orange-100 text-sm">Get expert advice and support</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Price Trends */}
      <div className="px-6 mb-6">
        <Card className="bg-white border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg text-gray-800">Today's Price Trends</h3>
              <TrendingUp className="w-5 h-5 text-green-600" />
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Tomatoes</span>
                <div className="flex items-center">
                  <IndianRupee className="w-4 h-4 text-green-600" />
                  <span className="text-green-600">45/kg</span>
                  <TrendingUp className="w-4 h-4 text-green-600 ml-2" />
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Rice</span>
                <div className="flex items-center">
                  <IndianRupee className="w-4 h-4 text-red-600" />
                  <span className="text-red-600">80/kg</span>
                  <TrendingUp className="w-4 h-4 text-red-600 ml-2 rotate-180" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Featured Products */}
      <div className="px-6 pb-6">
        <h3 className="text-lg text-gray-800 mb-4">{t('featuredProducts')}</h3>
        <div className="space-y-4">
          {featuredProducts.map((product) => (
            <Card 
              key={product.id}
              className="bg-white border-0 shadow-lg cursor-pointer"
              onClick={() => {
                setCurrentScreen('product-detail');
              }}
            >
              <CardContent className="p-4">
                <div className="flex gap-4">
                  <div className="w-20 h-20 rounded-lg bg-green-100 flex items-center justify-center">
                    <span className="text-2xl">{product.emoji}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg text-gray-800 mb-1">{product.name}</h4>
                    <div className="flex items-center mb-2">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{product.seller}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <IndianRupee className="w-4 h-4 text-green-600" />
                        <span className="text-green-600">{product.price}/{product.unit}</span>
                      </div>
                      <div className="flex items-center text-xs text-gray-500">
                        <MapPin className="w-3 h-3 mr-1" />
                        {product.location}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}