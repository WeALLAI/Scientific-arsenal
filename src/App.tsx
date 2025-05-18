import React, { useState, useEffect } from 'react';
import HomePage from './pages/HomePage';
import Header from './components/Header';

export default function App() {
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    window.addEventListener('hashchange', () => setHash(window.location.hash));
    return () => window.removeEventListener('hashchange', () => setHash(window.location.hash));
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
      <Header />
      <main className="py-8">
        {hash === "#add" ? <HomePage /> : <HomePage />}
      </main>
      <footer className="bg-gray-800 text-white py-6 px-4 mt-12">
        <div className="max-w-6xl mx-auto text-center text-sm">
          © 2025 Научный Арсенал. Все права защищены.
        </div>
      </footer>
    </div>
  );
}
