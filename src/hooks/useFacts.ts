import { useState } from 'react';
import { facts as mockFacts } from '../data/facts';

export function useFacts() {
  const [facts, setFacts] = useState(mockFacts);

  const addFact = (newFact) => {
    const nextId = Math.max(...facts.map(f => f.id)) + 1;
    setFacts([...facts, { ...newFact, id: nextId }]);
  };

  return { facts, addFact };
}
