import { Box } from "@mui/material";
import { translate } from "@i18n";
import { NavLink, useParams } from "react-router-dom";
import SettingIcon from "@components/icons/SettingIcon";
import LockIcon from "@components/icons/LockIcon";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import "./AdminSettingsPage.scss";

const SettingsLinks = () => {
  const { t } = translate("translate", { keyPrefix: "adminSettingsPage" });

  const { part } = useParams();

  return (
    <Box className="settingsLinksBox">
      <NavLink
        to={"/admin/settings/general"}
        className={`nav-link ${
          part?.includes("change_password") ? "active" : ""
        }`}
      >
        <SettingIcon
          fill={
            part === "general" || part?.includes("change_password")
              ? "#FFFFFF"
              : "#BFC3CF"
          }
        />
        {t("general")}
      </NavLink>
      <NavLink to={"/admin/settings/privacy"} className={"nav-link"}>
        <LockIcon fill={part === "privacy" ? "#FFFFFF" : "#BFC3CF"} />
        {t("privacy")}
      </NavLink>
      <NavLink to={"/admin/settings/about_us"} className={"nav-link"}>
        <InfoOutlinedIcon
          style={{ fill: part === "about_us" ? "#FFFFFF" : "#BFC3CF" }}
        />
        {t("aboutUs")}
      </NavLink>
    </Box>
  );
};

export default SettingsLinks;
