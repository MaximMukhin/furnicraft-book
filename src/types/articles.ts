export type ArticleModel = {
  _id: string;
  title: string;
  description?: string;
  content: string;
  position: number;
  type: "product" | "global";
  createdAt: string;
  updatedAt: string;
};
