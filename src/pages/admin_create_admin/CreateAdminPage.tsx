import { Container } from "@mui/material";
import { translate } from "@i18n";
import AdminMenu from "@components/adminMenu/AdminMenu";
import "./CreateAdminPage.scss";

const CreateAdminPage = () => {
  const { t } = translate("translate", { keyPrefix: "adminCreateAdminPage" });
  return (
    <Container>
      <AdminMenu />
    </Container>
  );
};

export default CreateAdminPage;
