import { Box } from "@mui/material";
import { translate } from "@i18n";
import admin from "@assets/user.png";
import AdminPhoto from "./AdminPhoto";
import "./AdminGeneralSettings.scss";

const mockData = {
  photo: null,
  name: "Helen",
  date_of_birth: "1996-30-04",
  email: "test@test.com",
};

const AdminGeneralSettings = () => {
  const { t } = translate("translate", { keyPrefix: "adminSettingsPage" });
  return (
    <Box className="adminInformationContainer">
      <p className="titleAdminSettings">{t("personalInformation")}</p>
      <AdminPhoto admin_photo={mockData.photo || admin} />
    </Box>
  );
};

export default AdminGeneralSettings;
