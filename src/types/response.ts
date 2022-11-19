import { PaginationModel } from "@/types/pagination";

export type Res<RootKey extends string, Model> = {
  [key in RootKey]: Model;
};

export type ResWithPagination<RootKey extends string, Model> = {
  [key in RootKey]: Model;
} & PaginationModel;
