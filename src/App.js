import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Components/Navigation/Navigation';
import Aiapp1 from './Components/Aiapp1/Aiapp1';
import Aiapp2 from './Components/Aiapp2/Aiapp2';
import Aiapp3 from './Components/Aiapp3/Aiapp3';
import Settings from './Components/Settings/Settings';

// HomePage component
const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] p-4">
      <h1 className="text-4xl font-bold mb-4 text-blue-600">دستیار هوش مصنوعی</h1>
      <p className="text-lg text-gray-600 mb-6">به سیستم دستیار هوش مصنوعی خوش آمدید!</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        <div className="bg-green-100 p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold text-green-700 mb-2">دستیار هوش مصنوعی ۱</h2>
          <p className="text-gray-700">دستیار هوش مصنوعی برای پاسخ به سوالات عمومی</p>
        </div>
        <div className="bg-purple-100 p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold text-purple-700 mb-2">دستیار هوش مصنوعی ۲</h2>
          <p className="text-gray-700">دستیار هوش مصنوعی برای تحلیل داده‌ها</p>
        </div>
        <div className="bg-pink-100 p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold text-pink-700 mb-2">دستیار هوش مصنوعی ۳</h2>
          <p className="text-gray-700">دستیار هوش مصنوعی برای تولید محتوا</p>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="container mx-auto px-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/ai-app-1" element={<Aiapp1 />} />
            <Route path="/ai-app-2" element={<Aiapp2 />} />
            <Route path="/ai-app-3" element={<Aiapp3 />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
