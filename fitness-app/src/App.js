import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import EquipmentMarketplace from './EquipmentMarketplace';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/equipment-marketplace" element={<EquipmentMarketplace />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
