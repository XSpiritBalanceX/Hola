import { Container, Box } from "@mui/material";
import AdminMenu from "@components/adminMenu/AdminMenu";
import { translate } from "@i18n";
import { useParams } from "react-router-dom";
import AdminPublicationsMenu from "@components/adminPublicationsMenu/AdminPublicationsMenu";
import "./AdminEventsPage.scss";

const AdminEventsPage = () => {
  const { t } = translate("translate", { keyPrefix: "adminEventsPage" });

  const { part } = useParams();

  return (
    <Container className="adminEventsContainer">
      <AdminMenu />
      <Box className="adminEventsContent">
        <p className="titleEvents">{t("publications")}</p>
        <Box className="adminEventsBox">
          <AdminPublicationsMenu />
        </Box>
      </Box>
    </Container>
  );
};

export default AdminEventsPage;
