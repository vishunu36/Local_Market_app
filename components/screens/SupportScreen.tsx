import { useApp, useTranslation } from '../AppContext';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { useMemo, useCallback } from 'react';
import { 
  ChevronLeft,
  Phone,
  MessageCircle,
  Mail,
  HelpCircle,
  BookOpen,
  Users,
  AlertCircle,
  FileText,
  Video
} from 'lucide-react';

export function SupportScreen() {
  const { setCurrentScreen } = useApp();
  const t = useTranslation();

  const supportOptions = [
    { id: 'call', title: 'Call Support', icon: Phone, color: 'from-green-500 to-emerald-600' },
    { id: 'chat', title: 'Live Chat', icon: MessageCircle, color: 'from-blue-500 to-blue-600' },
    { id: 'email', title: 'Email Support', icon: Mail, color: 'from-purple-500 to-indigo-600' },
    { id: 'faq', title: 'FAQ', icon: HelpCircle, color: 'from-orange-500 to-red-600' },
    { id: 'guides', title: 'User Guides', icon: BookOpen, color: 'from-teal-500 to-cyan-600' },
    { id: 'community', title: 'Community', icon: Users, color: 'from-violet-500 to-purple-600' }
  ];

  const quickActions = [
    { id: 'emergency', title: 'Emergency Support', icon: AlertCircle, color: 'bg-red-100 text-red-600' },
    { id: 'feedback', title: 'Send Feedback', icon: FileText, color: 'bg-blue-100 text-blue-600' },
    { id: 'tutorial', title: 'Video Tutorials', icon: Video, color: 'bg-green-100 text-green-600' }
  ];

  const handleHomeClick = useCallback(() => {
    setCurrentScreen('home');
  }, [setCurrentScreen]);

  return (
    <div className="h-full bg-gradient-to-br from-green-50 to-blue-50 overflow-y-auto">
      {/* Header */}
      <div className="bg-white shadow-sm p-6">
        <div className="flex items-center">
          <Button variant="ghost" size="icon" onClick={handleHomeClick} className="mr-4">
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <div>
            <h1 className="text-2xl text-green-800">Farmer Support</h1>
            <p className="text-sm text-gray-600">We're here to help you succeed</p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="p-6">
        <h2 className="text-lg text-gray-800 mb-4">Quick Actions</h2>
        <div className="space-y-3 mb-6">
          {quickActions.map((action) => {
            const IconComponent = action.icon;
            return (
              <Card key={action.id} className="bg-white border-0 shadow-lg cursor-pointer hover:shadow-xl transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center">
                    <div className={`w-12 h-12 rounded-full ${action.color} flex items-center justify-center mr-4`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base text-gray-800">{action.title}</h3>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Support Options */}
        <h2 className="text-lg text-gray-800 mb-4">Contact Support</h2>
        <div className="grid grid-cols-2 gap-4">
          {supportOptions.map((option) => {
            const IconComponent = option.icon;
            return (
              <Card 
                key={option.id}
                className="bg-white border-0 shadow-lg cursor-pointer transform transition-all duration-200 hover:scale-105"
                onClick={() => console.log(`Opening ${option.id}`)}
              >
                <CardContent className="p-4 text-center">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${option.color} flex items-center justify-center mx-auto mb-3 shadow-lg`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-sm text-gray-800">{option.title}</h3>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Contact Information */}
      <div className="p-6 bg-white border-t">
        <h3 className="text-lg text-gray-800 mb-4">Contact Information</h3>
        <div className="space-y-3">
          <div className="flex items-center">
            <Phone className="w-5 h-5 text-green-600 mr-3" />
            <div>
              <p className="text-sm text-gray-800">Support Helpline</p>
              <p className="text-sm text-green-600">+91-1800-XXX-FARM</p>
            </div>
          </div>
          <div className="flex items-center">
            <Mail className="w-5 h-5 text-blue-600 mr-3" />
            <div>
              <p className="text-sm text-gray-800">Email Support</p>
              <p className="text-sm text-blue-600">support@localmarket.app</p>
            </div>
          </div>
          <div className="flex items-center">
            <MessageCircle className="w-5 h-5 text-purple-600 mr-3" />
            <div>
              <p className="text-sm text-gray-800">WhatsApp Support</p>
              <p className="text-sm text-purple-600">+91-XXXXX-XXXXX</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}