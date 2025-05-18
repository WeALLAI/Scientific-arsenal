import { Fact } from '../types';

export const facts: Fact[] = [
  {
    id: 1,
    type: 'statement',
    title: 'Мозг использует 20% энергии тела',
    content: 'Несмотря на то, что мозг составляет всего 2% массы тела, он потребляет около 20% всей энергии организма.',
    category: 'Биология',
    sourceType: 'scientific_paper',
    sourceUrl: 'https://example.com/research-brain-energy ',
    isPrimarySource: false,
    date: '2022-05-15'
  },
  {
    id: 2,
    type: 'question',
    title: 'Чёрные дыры действительно вращаются?',
    content: 'Существуют ли наблюдения, подтверждающие вращение чёрных дыр?',
    category: 'Астрономия',
    sourceType: 'open_question',
    isPrimarySource: false,
    date: '2023-07-01'
  }
];
