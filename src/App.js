import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Cards from './pages/Cards.js';
import Analytics from './pages/Analytics.jsx';
import Community from './pages/Community.jsx';
import ContactUs from './pages/ContactUs.jsx';
import Calendar from './pages/Calendar.jsx';
// import Blog from './pages/pages/Blog/index.jsx';  
// import Home1 from './pages/pages/Home/index.jsx';
import Desktop1 from './pages/Desktop1.js';
// import Desktop2 from './pages/Desktop2.js';
import Landingpage from './pages/Landingpage.jsx';

const App = () => {
  return (
    <BrowserRouter>
    <div className="App">

      <Sidebar/>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/desktop-1" element={<Desktop1 />} />
          {/* <Route path="/desktop-2" element={<Desktop2 />} /> */}
          <Route path="/community" element={<Community />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/contactus" element={<ContactUs />} />
          {/* <Route path='/blog' element ={< Home1 />} />
          <Route path='/blog/:id' element ={< Blog />} /> */}
        </Routes>
        </div>
    </BrowserRouter>
  );
};

export default App;