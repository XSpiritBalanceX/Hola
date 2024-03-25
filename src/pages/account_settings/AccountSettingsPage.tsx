import { Box, Button, Container } from "@mui/material";
import { translate } from "@i18n";
import { useNavigate } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import "./AccountSettingsPage.scss";

const AccountSettingsPage = () => {
  const { t } = translate("translate", { keyPrefix: "accountSettings" });
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/profile/settings");
  };
  return (
    <Container className="accountSettingsContainer">
      <Box className="accountSettingsNavigation">
        <Button type="button" onClick={handleNavigate}>
          <ArrowBackIosNewIcon />
        </Button>
        <p>{t("account")}</p>
      </Box>
    </Container>
  );
};

export default AccountSettingsPage;
