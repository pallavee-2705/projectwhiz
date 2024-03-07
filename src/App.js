import React from 'react';
import { Home, Dashboard, Blog, Contact, Privacypolicy, About } from './pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Footer, Header } from './components';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacypolicy" element={<Privacypolicy />} />
        </Routes>
      </Layout>
    </Router>
  );
}

function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default App;
