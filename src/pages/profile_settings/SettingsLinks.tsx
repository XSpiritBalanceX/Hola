import { Box } from "@mui/material";
import { translate } from "@i18n";
import { NavLink } from "react-router-dom";
import UserIcon from "@components/icons/UserIcon";
import CardIcon from "@components/icons/CardIcon";
import LockIcon from "@components/icons/LockIcon";
import "./ProfileSettingsPage.scss";

const SettingsLinks = () => {
  const { t } = translate("translate", { keyPrefix: "profileSettings" });

  return (
    <Box className="linksSettings">
      <NavLink to={"/settings/account"} className={"itemLink"}>
        <UserIcon fill="black" />
        {t("account")}
      </NavLink>
      <NavLink to={"/subscription"} className={"itemLink"}>
        <CardIcon fill="black" />
        {t("subscription")}
      </NavLink>
      <NavLink to={"/reset_password/email"} className={"itemLink"}>
        <LockIcon fill="black" />
        {t("resetPassword")}
      </NavLink>
    </Box>
  );
};

export default SettingsLinks;
