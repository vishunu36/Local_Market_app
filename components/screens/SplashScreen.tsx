import { useApp, useTranslation } from '../AppContext';
import { Button } from '../ui/button';

export function SplashScreen() {
  const { setCurrentScreen, language, setLanguage } = useApp();
  const t = useTranslation();

  const handleGetStarted = () => {
    setCurrentScreen('create-account');
  };

  return (
    <div className="h-full relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 via-green-400 to-teal-400">
        <div className="absolute inset-0 bg-gradient-to-t from-green-900/30 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between text-white">
        {/* Language Selector */}
        <div className="flex justify-center pt-8 px-6">
          <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 flex gap-2">
            <button
              onClick={() => setLanguage('en')}
              className={`px-4 py-2 rounded-full transition-all ${
                language === 'en' 
                  ? 'bg-white text-black' 
                  : 'text-white hover:bg-white/20'
              }`}
            >
              {t('english')}
            </button>
            <button
              onClick={() => setLanguage('te')}
              className={`px-4 py-2 rounded-full transition-all ${
                language === 'te' 
                  ? 'bg-white text-black' 
                  : 'text-white hover:bg-white/20'
              }`}
            >
              {t('telugu')}
            </button>
          </div>
        </div>

        {/* App Branding */}
        <div className="text-center space-y-6 px-6">
          <div className="space-y-2">
            <h1 className="text-5xl font-bold text-white tracking-wide leading-tight">
              <span className="bg-gradient-to-r from-white via-green-100 to-emerald-200 bg-clip-text text-transparent drop-shadow-2xl">
                Local
              </span>
              <br />
              <span className="bg-gradient-to-r from-emerald-200 via-white to-green-100 bg-clip-text text-transparent drop-shadow-2xl">
                Market
              </span>
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-white/70 to-green-200/70 mx-auto rounded-full"></div>
          </div>
          <p className="text-xl text-green-50/90 tracking-wide">Your Agricultural Marketplace</p>
        </div>

        {/* Get Started Button */}
        <div className="px-6">
          <Button 
            onClick={handleGetStarted}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-4 text-lg h-auto"
            size="lg"
          >
            {t('getStarted')}
          </Button>
        </div>
      </div>
    </div>
  );
}