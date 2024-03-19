import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { translate } from "@i18n";
import edit from "@assets/editicon.png";
import setting from "@assets/settings.png";
import privacy from "@assets/privacy.png";
import help from "@assets/help.png";

const ProfileLinks = () => {
  const { t } = translate("translate", { keyPrefix: "profile" });

  const links = [
    { icon: edit, title: "edit", path: "/profile/edit" },
    { icon: setting, title: "settings", path: "/profile/settings" },
    { icon: privacy, title: "privacy", path: "/privacy" },
    { icon: help, title: "help", path: "/help" },
  ];

  return (
    <Box>
      {links.map((el, ind) => {
        return (
          <Box key={ind}>
            <Box>
              <img src={el.icon} alt="icon" />
            </Box>
            <Link to={el.path}>{t(el.title)}</Link>
          </Box>
        );
      })}
    </Box>
  );
};

export default ProfileLinks;
