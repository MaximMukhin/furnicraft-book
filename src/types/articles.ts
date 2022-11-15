export type Article = {
  _id: string;
  title: string;
  description?: string;
  content: string;
  position: number;
  type: 'product' | 'global'
};

