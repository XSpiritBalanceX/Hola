import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { translate } from "@i18n";
import EditIcon from "@components/icons/EditIcon";
import SettingIcon from "@components/icons/SettingIcon";
import PrivacyIcon from "@components/icons/PrivacyIcon";
import HelpIcon from "@components/icons/HelpIcon";
import "./Profile.scss";

const ProfileLinks = () => {
  const { t } = translate("translate", { keyPrefix: "profile" });

  const links = [
    { icon: <EditIcon fill="black" />, title: "edit", path: "/profile/edit" },
    {
      icon: <SettingIcon fill="black" />,
      title: "settings",
      path: "/profile/settings",
    },
    { icon: <PrivacyIcon fill="black" />, title: "privacy", path: "/privacy" },
    { icon: <HelpIcon fill="black" />, title: "help", path: "/help" },
  ];

  return (
    <Box className="profileLinksBox">
      {links.map((el, ind) => {
        return (
          <Box key={ind} className="linkItem">
            <Box className="iconLinks">{el.icon}</Box>
            <Link to={el.path} className="linkProfile">
              {t(el.title)}
            </Link>
          </Box>
        );
      })}
    </Box>
  );
};

export default ProfileLinks;
