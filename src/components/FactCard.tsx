import React from 'react';
import { Fact } from '../types';

function getFactTypeLabel(type: string): string {
  switch (type) {
    case 'statement': return 'Утверждение';
    case 'question': return 'Вопрос';
    case 'hypothesis': return 'Гипотеза';
    case 'artifact': return 'Первоисточник';
    case 'dataset': return 'Данные';
    case 'media': return 'Медиа';
    default: return 'Неизвестный тип';
  }
}

interface FactCardProps {
  fact: Fact;
}

const FactCard: React.FC<FactCardProps> = ({ fact }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow">
      <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm mb-2">
        {getFactTypeLabel(fact.type)}
      </span>
      <h3 className="text-xl font-semibold mb-2">{fact.title}</h3>
      <p className="text-gray-600 line-clamp-3 mb-4">
        {fact.content || fact.description}
      </p>
      <a href={`#fact/${fact.id}`} className="text-blue-600 underline hover:text-blue-800">
        Подробнее →
      </a>
    </div>
  );
};

export default FactCard;
