import { Container, Box } from "@mui/material";
import AdminMenu from "@components/adminMenu/AdminMenu";
import AdminPublicationsMenu from "@components/adminPublicationsMenu/AdminPublicationsMenu";
import AdminArticlesMenu from "./AdminArticlesMenu";
import AdminArticleActive from "@components/adminArticles/AdminArticleActive";
import AdminArticlesArchive from "@components/adminArticles/AdminArticlesArchive";
import { translate } from "@i18n";
import { useParams } from "react-router-dom";
import "./AdminArticlesPage.scss";

const AdminArticlesPage = () => {
  const { t } = translate("translate", { keyPrefix: "adminArticlesPage" });

  const { part } = useParams();

  return (
    <Container className="adminArticlesPageContainer">
      <AdminMenu />
      <Box className="adminArticlesContent">
        <p className="titleArticles">{t("publications")}</p>
        <Box className="adminArticlesBox">
          <AdminPublicationsMenu />
          {part !== "new" ? (
            <AdminArticlesMenu />
          ) : (
            <p className="newArticleTitle">{t("newArticle")}</p>
          )}
          {part === "active" && <AdminArticleActive />}
          {part?.includes("archive") && <AdminArticlesArchive />}
        </Box>
      </Box>
    </Container>
  );
};

export default AdminArticlesPage;
