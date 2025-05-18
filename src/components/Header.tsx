import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-blue-700 to-purple-800 text-white p-6 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">Научный Арсенал</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#" className="hover:underline">Главная</a></li>
            <li><a href="#add" className="hover:underline">Добавить факт</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
