import React, { useState } from 'react';
import FactCard from '../components/FactCard';
import { useFacts } from '../hooks/useFacts';

const HomePage: React.FC = () => {
  const { facts, addFact } = useFacts();
  const [showForm, setShowForm] = useState(false);
  const [newFact, setNewFact] = useState<Omit<Fact, 'id'>>({
    type: 'statement',
    title: '',
    content: '',
    category: 'Биология',
    sourceType: 'scientific_paper',
    sourceUrl: '',
    isPrimarySource: false,
    date: new Date().toISOString().split("T")[0]
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addFact(newFact);
    setShowForm(false);
    setNewFact({ ...newFact, title: '', content: '' });
  };

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Научные факты</h2>

      {!showForm && (
        <button
          onClick={() => setShowForm(true)}
          className="mb-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Добавить новый факт
        </button>
      )}

      {showForm && (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md mb-6">
          <label className="block mb-2"><strong>Тип</strong></label>
          <select
            value={newFact.type}
            onChange={(e) => setNewFact({ ...newFact, type: e.target.value as any })}
            className="w-full p-2 border rounded mb-4"
          >
            <option value="statement">Утверждение</option>
            <option value="question">Вопрос</option>
            <option value="hypothesis">Гипотеза</option>
            <option value="artifact">Первоисточник</option>
            <option value="dataset">Данные</option>
            <option value="media">Медиафакт</option>
          </select>

          <label className="block mb-2"><strong>Заголовок</strong></label>
          <input
            value={newFact.title}
            onChange={(e) => setNewFact({ ...newFact, title: e.target.value })}
            className="w-full p-2 border rounded mb-4"
            required
          />

          <label className="block mb-2"><strong>Описание</strong></label>
          <textarea
            value={newFact.content || ''}
            onChange={(e) => setNewFact({ ...newFact, content: e.target.value })}
            className="w-full p-2 border rounded mb-4"
            rows={3}
          ></textarea>

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              Отмена
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Добавить
            </button>
          </div>
        </form>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {facts.map(fact => (
          <FactCard key={fact.id} fact={fact} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
