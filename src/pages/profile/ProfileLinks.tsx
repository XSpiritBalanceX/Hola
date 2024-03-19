import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { translate } from "@i18n";
import edit from "@assets/editicon.png";
import setting from "@assets/settings.png";
import privacy from "@assets/privacy.png";
import help from "@assets/help.png";
import "./Profile.scss";

const ProfileLinks = () => {
  const { t } = translate("translate", { keyPrefix: "profile" });

  const links = [
    { icon: edit, title: "edit", path: "/profile/edit" },
    { icon: setting, title: "settings", path: "/profile/settings" },
    { icon: privacy, title: "privacy", path: "/privacy" },
    { icon: help, title: "help", path: "/help" },
  ];

  return (
    <Box className="profileLinksBox">
      {links.map((el, ind) => {
        return (
          <Box key={ind} className="linkItem">
            <Box className="iconLinks">
              <img src={el.icon} alt="icon" />
            </Box>
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
