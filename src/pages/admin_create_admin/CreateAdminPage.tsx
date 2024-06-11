import { Container, Box, Button } from "@mui/material";
import { translate } from "@i18n";
import { useNavigate } from "react-router-dom";
import AdminMenu from "@components/adminMenu/AdminMenu";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import CreateAdminForm from "./CreateAdminForm";
import "./CreateAdminPage.scss";

const CreateAdminPage = () => {
  const { t } = translate("translate", { keyPrefix: "adminCreateAdminPage" });

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/admin/users");
  };
  return (
    <Container className="adminCreateContainer">
      <AdminMenu />
      <Box className="adminCreateContent">
        <p className="titleCreateAdmin">{t("users")}</p>
        <Button
          type="button"
          onClick={handleNavigate}
          className="navigateCreateAdmin"
        >
          <ArrowBackIosNewIcon /> {t("createAdmin")}
        </Button>
        <CreateAdminForm />
      </Box>
    </Container>
  );
};

export default CreateAdminPage;
