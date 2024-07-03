import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomLayout from './layout';
import { InvestingPage, SettingsPage, TrackingPage, NotFoundPage } from './pages';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CustomLayout />}>
          <Route index element={<TrackingPage />} />
          <Route path="investing" element={<InvestingPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;
