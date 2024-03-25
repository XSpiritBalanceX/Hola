import { Box, Button, Container } from "@mui/material";
import TabMenu from "@components/tabMenu/TabMenu";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { translate } from "@i18n";
import { useNavigate } from "react-router-dom";
import SettingsLinks from "./SettingsLinks";
import "./ProfileSettingsPage.scss";

const ProfileSettingsPage = () => {
  const { t } = translate("translate", { keyPrefix: "profileSettings" });
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/profile");
  };
  return (
    <Container className="profileSettingsContainer">
      <Box className="navigationProfileSettings">
        <Button type="button" onClick={handleNavigate}>
          <ArrowBackIosNewIcon />
        </Button>
        <p>{t("settings")}</p>
      </Box>
      <SettingsLinks />
      <TabMenu />
    </Container>
  );
};

export default ProfileSettingsPage;
