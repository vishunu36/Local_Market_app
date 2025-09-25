import { useState } from 'react';
import { useApp, useTranslation } from '../AppContext';
import { Button } from '../ui/button';
import { ChevronRight, Users, ShoppingCart, TrendingUp } from 'lucide-react';

export function OnboardingScreen() {
  const { setCurrentScreen } = useApp();
  const t = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      icon: <Users className="w-16 h-16 text-green-600" />,
      title: t('onboarding1Title'),
      description: t('onboarding1Desc'),
    },
    {
      icon: <ShoppingCart className="w-16 h-16 text-blue-600" />,
      title: t('onboarding2Title'),
      description: t('onboarding2Desc'),
    },
    {
      icon: <TrendingUp className="w-16 h-16 text-orange-600" />,
      title: t('onboarding3Title'),
      description: t('onboarding3Desc'),
    },
  ];

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setCurrentScreen('login');
    }
  };

  const handleSkip = () => {
    setCurrentScreen('login');
  };

  return (
    <div className="h-full bg-gradient-to-br from-green-50 to-blue-50 flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center p-6">
        <h1 className="text-2xl text-green-800">{t('welcome')}</h1>
        <Button variant="ghost" onClick={handleSkip} className="text-gray-600">
          {t('skip')}
        </Button>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-center items-center p-8 text-center">
        <div className="mb-8">
          {slides[currentSlide].icon}
        </div>
        
        <h2 className="text-2xl text-gray-800 mb-4">
          {slides[currentSlide].title}
        </h2>
        
        <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-sm">
          {slides[currentSlide].description}
        </p>

        {/* Dots Indicator */}
        <div className="flex space-x-2 mb-8">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-green-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="p-6">
        <Button 
          onClick={handleNext}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-4 text-lg h-auto flex items-center justify-center gap-2"
        >
          {currentSlide < slides.length - 1 ? t('next') : t('getStarted')}
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}