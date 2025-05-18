export type FactType = 'statement' | 'question' | 'hypothesis' | 'artifact' | 'dataset' | 'media';

export interface Fact {
  id: number;
  type: FactType;
  title: string;
  content?: string;
  description?: string;
  category: string;
  sourceType: string;
  sourceUrl?: string;
  isPrimarySource: boolean;
  date: string;
}

export interface Relation {
  causeId: number;
  effectId: number;
  strength: number;
}
