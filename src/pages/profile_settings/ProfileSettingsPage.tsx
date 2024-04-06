import { Container } from "@mui/material";
import TabMenu from "@components/tabMenu/TabMenu";
import { translate } from "@i18n";
import SettingsLinks from "./SettingsLinks";
import NavigationButton from "@components/buttons/NavigationButton";
import "./ProfileSettingsPage.scss";

const ProfileSettingsPage = () => {
  const { t } = translate("translate", { keyPrefix: "profileSettings" });

  return (
    <Container className="profileSettingsContainer">
      <NavigationButton label={t("settings")} path={"/profile"} />
      <SettingsLinks />
      <TabMenu />
    </Container>
  );
};

export default ProfileSettingsPage;
