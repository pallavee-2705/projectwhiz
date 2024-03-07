import React from 'react';
import { Home, Dashboard, Blog, Contact, Privacypolicy, About, Login } from './pages';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Footer, Header } from './components';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
        <Route path="/blog" element={<Layout><Blog /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/privacypolicy" element={<Layout><Privacypolicy /></Layout>} />
        <Route path="/login" element={<Login />} />
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
