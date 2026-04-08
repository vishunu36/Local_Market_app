import { useState } from 'react';
import { useApp, useTranslation } from '../AppContext';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { 
  ChevronLeft, 
  Search, 
  Star,
  MapPin,
  IndianRupee,
  ShoppingCart
} from 'lucide-react';

export function ProductsScreen() {
  const { setCurrentScreen, addToCart } = useApp();
  const t = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'vegetables', name: 'Vegetables' },
    { id: 'fruits', name: 'Fruits' },
    { id: 'grains', name: 'Grains' }
  ];

  const products = [
    { id: '1', name: 'Fresh Tomatoes', price: 45, unit: 'kg', seller: 'Ravi Kumar', rating: 4.8, category: 'vegetables', emoji: '🍅', inStock: true },
    { id: '2', name: 'Organic Rice', price: 80, unit: 'kg', seller: 'Lakshmi Devi', rating: 4.9, category: 'grains', emoji: '🌾', inStock: true },
    { id: '3', name: 'Fresh Carrots', price: 35, unit: 'kg', seller: 'Suresh Reddy', rating: 4.6, category: 'vegetables', emoji: '🥕', inStock: true },
    { id: '4', name: 'Fresh Bananas', price: 40, unit: 'dozen', seller: 'Venkat Rao', rating: 4.6, category: 'fruits', emoji: '🍌', inStock: true }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="h-full bg-gradient-to-br from-green-50 to-blue-50 overflow-y-auto">
      {/* Header */}
      <div className="bg-white shadow-sm p-6 space-y-4">
        <div className="flex items-center">
          <Button variant="ghost" size="icon" onClick={() => setCurrentScreen('home')} className="mr-4">
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <h1 className="text-2xl text-green-800">{t('productsTitle')}</h1>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder={t('searchProducts')}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none"
          />
        </div>

        {/* Category Filter */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category.id)}
              className={`whitespace-nowrap ${
                selectedCategory === category.id 
                  ? 'bg-green-600 hover:bg-green-700' 
                  : 'border-green-600 text-green-600 hover:bg-green-50'
              }`}
            >
              {category.name}
            </Button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="p-6 space-y-4">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found</p>
          </div>
        ) : (
          filteredProducts.map((product) => (
            <Card 
              key={product.id}
              className="bg-white border-0 shadow-lg"
            >
              <CardContent className="p-4">
                <div className="flex gap-4">
                  <div className="w-24 h-24 rounded-lg bg-green-100 flex items-center justify-center">
                    <span className="text-3xl">{product.emoji}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg text-gray-800">{product.name}</h4>
                      {!product.inStock && (
                        <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded">
                          Out of Stock
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center mb-2">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                      <span className="text-sm text-gray-400 ml-2">• {product.seller}</span>
                    </div>
                    
                    <div className="flex items-center text-xs text-gray-500 mb-3">
                      <MapPin className="w-3 h-3 mr-1" />
                      Local Farm
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <IndianRupee className="w-5 h-5 text-green-600" />
                        <span className="text-xl text-green-600">{product.price}</span>
                        <span className="text-gray-600 ml-1">/{product.unit}</span>
                      </div>
                      
                      <Button
                        onClick={() => addToCart(product)}
                        disabled={!product.inStock}
                        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 h-auto flex items-center gap-2"
                      >
                        <ShoppingCart className="w-4 h-4" />
                        {t('addToCart')}
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}