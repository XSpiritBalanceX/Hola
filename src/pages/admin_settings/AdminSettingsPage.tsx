import { Container, Box } from "@mui/material";
import AdminMenu from "@components/adminMenu/AdminMenu";
import SettingsLinks from "./SettingsLinks";
import { useParams } from "react-router-dom";
import AdminGeneralSettings from "@components/adminGeneralSettings/AdminGeneralSettings";
import AdminRecoveryPassword from "@components/adminRecoveryPassword/AdminRecoveryPassword";
import AdminPrivacy from "@components/adminPrivacy/AdminPrivacy";
import "./AdminSettingsPage.scss";

type TPartsOfSettings = {
  general: JSX.Element;
  change_password_email: JSX.Element;
  recovery_password_email: JSX.Element;
  change_password: JSX.Element;
  recovery_password: JSX.Element;
  privacy: JSX.Element;
};

const AdminSettingsPage = () => {
  const { part } = useParams();

  const partsOsSettings: TPartsOfSettings = {
    general: <AdminGeneralSettings />,
    change_password_email: <AdminRecoveryPassword />,
    recovery_password_email: <AdminRecoveryPassword />,
    change_password: <AdminRecoveryPassword />,
    recovery_password: <AdminRecoveryPassword />,
    privacy: <AdminPrivacy />,
  };

  return (
    <Container className="adminSettingsContainer">
      <AdminMenu />
      <Box className="adminSettingsContent">
        <SettingsLinks />
        {partsOsSettings[part as keyof TPartsOfSettings]}
      </Box>
    </Container>
  );
};

export default AdminSettingsPage;
