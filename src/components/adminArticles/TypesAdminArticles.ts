import { TArticle } from "@pages/admin_articles/AdminArticlesPage";

export interface IControlsPhotoActiveArticleProps {
  photo: string;
}

export interface IAdminArticleActiveProps {
  cbHandleEditArticle: (data: TArticle) => void;
}

export interface IAdminArticleChangeProps {
  article?: TArticle;
}
