import { createRequest } from "@/api/request";
import { ArticleModel, ReqWithPagination, ResWithPagination } from "@/types";
import { BasePath } from "@/api/basePath";
import { Methods } from "@/api/methods";

export const getArticles = createRequest<
  {},
  ResWithPagination<"articles", ArticleModel[]>
>({
  method: Methods.Get,
  url: `${BasePath.Articles}`,
});

interface ArticleReq extends ReqWithPagination {
  _id: string;
}

export const getArticle = (options: ArticleReq) => {
  const { _id, params } = options;

  return createRequest<ArticleReq, ResWithPagination<"article", ArticleModel>>({
    method: Methods.Get,
    url: `${BasePath.Articles}/${_id}`,
    params,
  });
};
