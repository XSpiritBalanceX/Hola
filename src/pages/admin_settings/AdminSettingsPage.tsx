import { Container, Box } from "@mui/material";
import AdminMenu from "@components/adminMenu/AdminMenu";
import SettingsLinks from "./SettingsLinks";
import { useParams } from "react-router-dom";
import AdminGeneralSettings from "@components/adminGeneralSettings/AdminGeneralSettings";
import "./AdminSettingsPage.scss";

type TPartsOfSettings = {
  general: JSX.Element;
};

const AdminSettingsPage = () => {
  const { part } = useParams();

  const partsOsSettings: TPartsOfSettings = {
    general: <AdminGeneralSettings />,
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
