import { Container, Box } from "@mui/material";
import AdminMenu from "@components/adminMenu/AdminMenu";
import "./AdminSettingsPage.scss";

const AdminSettingsPage = () => {
  return (
    <Container className="adminSettingsContainer">
      <AdminMenu />
      <Box>AdminSettingsPage</Box>
    </Container>
  );
};

export default AdminSettingsPage;
