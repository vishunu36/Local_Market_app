import { useState, useCallback, useMemo } from 'react';
import { useApp, useTranslation } from '../AppContext';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Textarea } from '../ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { ArrowLeft, User, Phone, MessageCircle, Mail, MapPin, Briefcase } from 'lucide-react';

export function CreateAccountScreen() {
  const { setCurrentScreen } = useApp();
  const t = useTranslation();
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    whatsappNumber: '',
    email: '',
    address: '',
    profession: ''
  });

  const handleInputChange = useCallback((field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  }, []);

  const handleCreateAccount = () => {
    // Here you would typically validate the form and create the account
    console.log('Creating account with:', formData);
    // Navigate to home screen after account creation
    setCurrentScreen('home');
  };

  const goToLogin = () => {
    setCurrentScreen('login');
  };

  const goBack = () => {
    setCurrentScreen('splash');
  };

  const isFormValid = useMemo(() => {
    return formData.fullName && formData.phoneNumber && formData.email && formData.profession;
  }, [formData.fullName, formData.phoneNumber, formData.email, formData.profession]);

  return (
    <div className="h-full bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 overflow-auto">
      {/* Header */}
      <div className="bg-white shadow-sm p-4 flex items-center gap-4">
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={goBack}
          className="p-2"
        >
          <ArrowLeft className="w-5 h-5 text-green-600" />
        </Button>
        <h1 className="text-xl text-green-800">{t('createAccount')}</h1>
      </div>

      {/* Form Content */}
      <div className="p-6 pb-8">
        <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-2xl text-green-800 mb-2">{t('createAccount')}</CardTitle>
            <p className="text-gray-600">Join the Local Market community</p>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {/* Full Name */}
            <div className="space-y-2">
              <Label htmlFor="fullName" className="flex items-center gap-2 text-green-700">
                <User className="w-4 h-4" />
                {t('fullName')} *
              </Label>
              <Input
                id="fullName"
                type="text"
                placeholder={t('enterFullName')}
                value={formData.fullName}
                onChange={(e) => handleInputChange('fullName', e.target.value)}
                className="bg-white border-green-200 focus:border-green-500 h-12"
              />
            </div>

            {/* Phone Number */}
            <div className="space-y-2">
              <Label htmlFor="phoneNumber" className="flex items-center gap-2 text-green-700">
                <Phone className="w-4 h-4" />
                {t('phoneNumber')} *
              </Label>
              <Input
                id="phoneNumber"
                type="tel"
                placeholder={t('enterPhoneNumber')}
                value={formData.phoneNumber}
                onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                className="bg-white border-green-200 focus:border-green-500 h-12"
              />
            </div>

            {/* WhatsApp Number */}
            <div className="space-y-2">
              <Label htmlFor="whatsappNumber" className="flex items-center gap-2 text-green-700">
                <MessageCircle className="w-4 h-4" />
                {t('whatsappNumber')}
              </Label>
              <Input
                id="whatsappNumber"
                type="tel"
                placeholder={t('enterWhatsappNumber')}
                value={formData.whatsappNumber}
                onChange={(e) => handleInputChange('whatsappNumber', e.target.value)}
                className="bg-white border-green-200 focus:border-green-500 h-12"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-2 text-green-700">
                <Mail className="w-4 h-4" />
                {t('email')} *
              </Label>
              <Input
                id="email"
                type="email"
                placeholder={t('enterEmail')}
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="bg-white border-green-200 focus:border-green-500 h-12"
              />
            </div>

            {/* Address */}
            <div className="space-y-2">
              <Label htmlFor="address" className="flex items-center gap-2 text-green-700">
                <MapPin className="w-4 h-4" />
                {t('address')}
              </Label>
              <Textarea
                id="address"
                placeholder={t('enterAddress')}
                value={formData.address}
                onChange={(e) => handleInputChange('address', e.target.value)}
                className="bg-white border-green-200 focus:border-green-500 min-h-[80px] resize-none"
              />
            </div>

            {/* Profession */}
            <div className="space-y-2">
              <Label htmlFor="profession" className="flex items-center gap-2 text-green-700">
                <Briefcase className="w-4 h-4" />
                {t('profession')} *
              </Label>
              <Select 
                value={formData.profession} 
                onValueChange={(value) => handleInputChange('profession', value)}
              >
                <SelectTrigger className="bg-white border-green-200 focus:border-green-500 h-12">
                  <SelectValue placeholder={t('selectProfession')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="farmer">{t('farmer')}</SelectItem>
                  <SelectItem value="buyer">{t('buyer')}</SelectItem>
                  <SelectItem value="retailer">{t('retailer')}</SelectItem>
                  <SelectItem value="wholesaler">{t('wholesaler')}</SelectItem>
                  <SelectItem value="supplier">{t('supplier')}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Create Account Button */}
            <Button 
              onClick={handleCreateAccount}
              disabled={!isFormValid}
              className="w-full bg-green-600 hover:bg-green-700 text-white h-12 text-lg mt-8"
              size="lg"
            >
              {t('createMyAccount')}
            </Button>

            {/* Already have account */}
            <div className="text-center pt-4">
              <p className="text-gray-600 mb-2">{t('alreadyHaveAccount')}</p>
              <Button 
                variant="outline" 
                onClick={goToLogin}
                className="border-green-600 text-green-600 hover:bg-green-50"
              >
                {t('signIn')}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}