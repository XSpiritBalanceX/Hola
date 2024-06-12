export interface IControlsPhotoActiveArticleProps {
  photo: string;
}

export interface IAdminArticleActiveProps {
  cbHandleEditArticle: (data: {
    photo: string;
    title: string;
    text: string;
  }) => void;
}
