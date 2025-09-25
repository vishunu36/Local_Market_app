import { useState } from 'react';
import { useApp, useTranslation } from '../AppContext';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { ChevronLeft, Phone, MessageSquare } from 'lucide-react';

export function LoginScreen() {
  const { setCurrentScreen } = useApp();
  const t = useTranslation();
  const [step, setStep] = useState<'phone' | 'otp'>('phone');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');

  const handleSendOTP = () => {
    if (phoneNumber.length >= 10) {
      setStep('otp');
    }
  };

  const handleVerifyOTP = () => {
    if (otp.length === 6) {
      setCurrentScreen('home');
    }
  };

  const handleBack = () => {
    if (step === 'otp') {
      setStep('phone');
    } else {
      setCurrentScreen('onboarding');
    }
  };

  return (
    <div className="h-full bg-gradient-to-br from-green-50 to-blue-50 flex flex-col">
      {/* Header */}
      <div className="flex items-center p-6">
        <Button variant="ghost" size="icon" onClick={handleBack} className="mr-4">
          <ChevronLeft className="w-6 h-6" />
        </Button>
        <h1 className="text-xl text-gray-800">{t('loginTitle')}</h1>
      </div>

      {/* Content */}
      <div className="flex-1 flex items-center justify-center p-6">
        <Card className="w-full max-w-sm shadow-lg border-0 bg-white">
          <CardHeader className="text-center space-y-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              {step === 'phone' ? (
                <Phone className="w-8 h-8 text-green-600" />
              ) : (
                <MessageSquare className="w-8 h-8 text-green-600" />
              )}
            </div>
            <CardTitle className="text-xl text-gray-800">
              {step === 'phone' ? t('loginTitle') : t('enterOTP')}
            </CardTitle>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {step === 'phone' ? (
              <>
                <div className="space-y-2">
                  <label className="text-sm text-gray-600">{t('phoneNumber')}</label>
                  <Input
                    type="tel"
                    placeholder="+91 9876543210"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="h-12 text-lg border-2 border-gray-200 focus:border-green-500"
                  />
                </div>
                
                <Button 
                  onClick={handleSendOTP}
                  disabled={phoneNumber.length < 10}
                  className="w-full bg-green-600 hover:bg-green-700 text-white h-12 text-lg"
                >
                  {t('sendOTP')}
                </Button>
              </>
            ) : (
              <>
                <div className="space-y-2">
                  <label className="text-sm text-gray-600">
                    {t('enterOTP')} ({phoneNumber})
                  </label>
                  <Input
                    type="number"
                    placeholder="000000"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="h-12 text-lg text-center tracking-widest border-2 border-gray-200 focus:border-green-500"
                    maxLength={6}
                  />
                </div>
                
                <Button 
                  onClick={handleVerifyOTP}
                  disabled={otp.length !== 6}
                  className="w-full bg-green-600 hover:bg-green-700 text-white h-12 text-lg"
                >
                  {t('verify')}
                </Button>
                
                <Button 
                  variant="ghost"
                  onClick={() => setStep('phone')}
                  className="w-full text-gray-600"
                >
                  {t('back')}
                </Button>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}