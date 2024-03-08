import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Home, Dashboard, Blog, Contact, Privacypolicy, About, Login } from './pages';
import { Footer, Header } from './components';

function App() {
  const [isSignUp, setIsSignUp] = useState(true);

  // Event handler for Get Started button in the header
  const handleGetStarted = () => {
    setIsSignUp(true); // Set isSignUp to true to display the sign-up form
  };

  // Event handler for Login button in the header
  const handleLogin = () => {
    setIsSignUp(false); // Set isSignUp to false to display the login form
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
        <Route path="/blog" element={<Layout><Blog /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/privacypolicy" element={<Layout><Privacypolicy /></Layout>} />
        <Route path="/login" element={<Layout><Login handleGetStarted={handleGetStarted} handleLogin={handleLogin} /></Layout>} />
      </Routes>
    </Router>
  );
}

function Layout({ children }) {
  const location = useLocation();

  // Check if the current route is the login page
  const isLoginPage = location.pathname === '/login';

  return (
    <div>
      {!isLoginPage && <Header />}
      {children}
      {!isLoginPage && <Footer />}
    </div>
  );
}

export default App;
