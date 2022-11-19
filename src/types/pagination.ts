export type PaginationModel = {
  // Всего элементов
  count: number;
  // Стартовый элемент
  skip: number;
  // Порция
  limit: number;
};

export type ReqWithPagination<T = {}> = T & {
  params?: Omit<PaginationModel, "count">;
};
