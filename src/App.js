// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dashlogin from "./Pages/Dashlogin";
import Dashhome from "./Pages/Dashhome";            // Layout
import HomeDashboard from "./Pages/HomeDashboard";  // Cards content (Home)
import DashContactus from "./Pages/DashContactus";
import DashMarketplace from "./Pages/DashMarketplace";
import DashRegistration from "./Pages/DashRegistration";
import MyListingsPage from "./Pages/Listingpage";
import DashAbout from "./Pages/DashAbout";

function App() {
  return (
    <Router>
      <Routes>
        {/* Login page (no sidebar) */}
        <Route path="/login" element={<Dashlogin />} />

        {/* Layout with sidebar + header */}
        <Route path="/" element={<Dashhome />}>
          {/* Index = Home cards */}
          <Route index element={<HomeDashboard />} />

          {/* Other pages (no cards) */}
          <Route path="contact" element={<DashContactus />} />
          <Route path="listingsPage" element={<MyListingsPage />} />
          <Route path="dashr" element={<DashRegistration />} />
          <Route path="/about" element={<DashAbout />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
