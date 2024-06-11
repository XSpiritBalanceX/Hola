import { Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import { translate } from "@i18n";
import "./AdminArticlesPage.scss";

const AdminArticlesMenu = () => {
  const { t } = translate("translate", { keyPrefix: "adminArticlesPage" });
  return (
    <Box className="adminArticlesMenuBox">
      <NavLink to={"/admin/articles/active"} className={"nav-link"}>
        {t("active")}
      </NavLink>
      <NavLink to={"/admin/articles/archive"} className={"nav-link"}>
        {t("archive")}
      </NavLink>
    </Box>
  );
};

export default AdminArticlesMenu;
