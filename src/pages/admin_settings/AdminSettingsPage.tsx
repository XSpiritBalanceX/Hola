import { Container, Box } from "@mui/material";
import AdminMenu from "@components/adminMenu/AdminMenu";
import SettingsLinks from "./SettingsLinks";
import "./AdminSettingsPage.scss";

const AdminSettingsPage = () => {
  return (
    <Container className="adminSettingsContainer">
      <AdminMenu />
      <Box className="adminSettingsContent">
        <SettingsLinks />
      </Box>
    </Container>
  );
};

export default AdminSettingsPage;
