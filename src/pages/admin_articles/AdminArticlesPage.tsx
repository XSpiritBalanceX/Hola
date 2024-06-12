import { useState } from "react";
import { Container, Box } from "@mui/material";
import AdminMenu from "@components/adminMenu/AdminMenu";
import AdminPublicationsMenu from "@components/adminPublicationsMenu/AdminPublicationsMenu";
import AdminArticlesMenu from "./AdminArticlesMenu";
import AdminArticleActive from "@components/adminArticles/AdminArticleActive";
import AdminArticlesArchive from "@components/adminArticles/AdminArticlesArchive";
import AdminArticleChange from "@components/adminArticles/AdminArticleChange";
import { translate } from "@i18n";
import { useParams } from "react-router-dom";
import "./AdminArticlesPage.scss";

export type TArticle = {
  id: number;
  photo: string;
  title: string;
  text: string;
};

const AdminArticlesPage = () => {
  const { t } = translate("translate", { keyPrefix: "adminArticlesPage" });

  const [editArticle, setEditArticle] = useState<null | TArticle>(null);

  const { part } = useParams();

  const handleEditArticle = (data: TArticle) => {
    setEditArticle(data);
  };

  return (
    <Container className="adminArticlesPageContainer">
      <AdminMenu />
      <Box className="adminArticlesContent">
        <p className="titleArticles">{t("publications")}</p>
        <Box className="adminArticlesBox">
          <AdminPublicationsMenu />
          {part === "new" ? (
            <p className="newArticleTitle">{t("newArticle")}</p>
          ) : part === "edit" ? (
            <p className="newArticleTitle">{t("editArticle")}</p>
          ) : (
            <AdminArticlesMenu />
          )}
          {part === "active" && (
            <AdminArticleActive cbHandleEditArticle={handleEditArticle} />
          )}
          {part?.includes("archive") && <AdminArticlesArchive />}
          {part === "edit" && editArticle && (
            <AdminArticleChange article={editArticle} />
          )}
          {part === "new" && <AdminArticleChange />}
        </Box>
      </Box>
    </Container>
  );
};

export default AdminArticlesPage;
