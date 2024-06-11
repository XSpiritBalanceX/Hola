import { Container, Box } from "@mui/material";
import AdminMenu from "@components/adminMenu/AdminMenu";
import AdminPublicationsMenu from "@components/adminPublicationsMenu/AdminPublicationsMenu";
import { translate } from "@i18n";
import "./AdminArticlesPage.scss";

const AdminArticlesPage = () => {
  const { t } = translate("translate", { keyPrefix: "adminArticlesPage" });

  return (
    <Container className="adminArticlesPageContainer">
      <AdminMenu />
      <Box className="adminArticlesContent">
        <Box className="adminArticlesBox">
          <AdminPublicationsMenu />
        </Box>
      </Box>
    </Container>
  );
};

export default AdminArticlesPage;
