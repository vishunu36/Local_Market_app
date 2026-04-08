import { useApp, useTranslation } from '../AppContext';
import { Button } from '../ui/button';
import { useMemo, useCallback } from 'react';
import { 
  ChevronLeft, 
  Newspaper,
  CloudSun,
  Users,
  Stethoscope,
  UserPlus,
  Scissors,
  PawPrint,
  Wrench,
  Truck,
  Calculator,
  Settings,
  DollarSign,
  Ruler,
  Bell,
  Search
} from 'lucide-react';

export function FarmerDashboardScreen() {
  const { setCurrentScreen } = useApp();
  const t = useTranslation();

  const services = [
    { id: 'news', title: 'News', icon: Newspaper, color: 'text-blue-600' },
    { id: 'weather', title: 'Weather', icon: CloudSun, color: 'text-orange-600' },
    { id: 'technicians', title: 'Technicians', icon: Users, color: 'text-green-600' },
    { id: 'veterinary', title: 'Veterinary', icon: Stethoscope, color: 'text-red-600' },
    { id: 'workers', title: 'Farm Workers', icon: UserPlus, color: 'text-purple-600' },
    { id: 'harvest', title: 'Harvest', icon: Scissors, color: 'text-amber-600' },
    { id: 'livestock', title: 'Livestock', icon: PawPrint, color: 'text-teal-600' },
    { id: 'transportation', title: 'Transportation', icon: Truck, color: 'text-indigo-600' }
  ];

  const tools = [
    { id: 'tools', title: 'Farm Tools', icon: Wrench, color: 'text-gray-600' },
    { id: 'calculator', title: 'Calculator', icon: Calculator, color: 'text-emerald-600' },
    { id: 'management', title: 'Farm Management', icon: Settings, color: 'text-violet-600' },
    { id: 'wages', title: 'Farm Wages', icon: DollarSign, color: 'text-green-600' },
    { id: 'measurement', title: 'Measurement', icon: Ruler, color: 'text-blue-600' }
  ];

  const handleServiceClick = useCallback((serviceId: string) => {
    // For now, we'll just show an alert. In a real app, this would navigate to specific screens
    console.log(`Opening ${serviceId} service`);
    // You can add navigation logic here for each service
  }, []);

  const handleHomeClick = useCallback(() => {
    setCurrentScreen('home');
  }, [setCurrentScreen]);

  const renderIconGrid = (items: typeof services, title: string) => (
    <div className="mb-8">
      <h2 className="text-lg text-gray-700 mb-4 px-2">{title}</h2>
      <div className="grid grid-cols-4 gap-4">
        {items.map((item) => {
          const IconComponent = item.icon;
          return (
            <div 
              key={item.id}
              className="flex flex-col items-center cursor-pointer group"
              onClick={() => handleServiceClick(item.id)}
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-200 mb-2">
                <IconComponent className={`w-8 h-8 ${item.color}`} />
              </div>
              <span className="text-xs text-gray-700 text-center leading-tight">{item.title}</span>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="h-full bg-gradient-to-br from-green-50 to-blue-50 overflow-y-auto">
      {/* Header */}
      <div className="bg-white shadow-sm p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Button variant="ghost" size="icon" onClick={handleHomeClick} className="mr-4">
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <div>
              <h1 className="text-2xl text-green-800">Farmer Services</h1>
              <p className="text-sm text-gray-600">Complete agricultural support hub</p>
            </div>
          </div>
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="w-6 h-6" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
          </Button>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search services..."
            className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none"
          />
        </div>
      </div>

      {/* Services and Tools Grid */}
      <div className="p-6">
        {renderIconGrid(services, 'Services')}
        {renderIconGrid(tools, 'Tools')}
      </div>

      {/* Bottom Navigation (simplified) */}
      <div className="p-6 bg-white border-t">
        <div className="flex justify-center">
          <Button 
            variant="default" 
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full"
            onClick={handleHomeClick}
          >
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
}