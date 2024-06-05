import { Container, Box } from "@mui/material";
import AdminMenu from "@components/adminMenu/AdminMenu";
import "./AdminSupportPage.scss";

const AdminSupportPage = () => {
  return (
    <Container className="adminSupportContainer">
      <AdminMenu />
      <Box className="adminSupportContent">AdminSupportPage</Box>
    </Container>
  );
};

export default AdminSupportPage;
