import { Box } from "@mui/material";
import { useLocation, NavLink } from "react-router-dom";
import ArticleIcon from "@components/icons/ArticleIcon";
import CalendarIcon from "@components/icons/CalendarIcon";
import { translate } from "@i18n";
import AddIcon from "@mui/icons-material/Add";
import "./AdminPublicationsMenu.scss";

const AdminPublicationsMenu = () => {
  const { t } = translate("translate", { keyPrefix: "adminMenu" });

  const { pathname } = useLocation();

  return (
    <Box className="publicationsLinksBox">
      <NavLink
        to={"/admin/articles/active"}
        className={() =>
          pathname.includes("articles") ? "nav-link activeLink" : "nav-link"
        }
      >
        <ArticleIcon
          fill={pathname.includes("articles") ? "#554cb6" : "#bfc3cf"}
        />
        {t("article")}
      </NavLink>
      <NavLink
        to={"/admin/articles/new"}
        className={() =>
          pathname.includes("articles") ? "new-link activeNewLink" : "new-link"
        }
      >
        <AddIcon />
      </NavLink>
      <NavLink
        to={"/admin/events/active"}
        className={() =>
          pathname.includes("events") ? "nav-link activeLink" : "nav-link"
        }
      >
        <CalendarIcon
          fill={pathname.includes("events") ? "#554cb6" : "#bfc3cf"}
        />
        {t("events")}
      </NavLink>
      <NavLink
        to={"/admin/events/new"}
        className={() =>
          pathname.includes("events") ? "new-link activeNewLink" : "new-link"
        }
      >
        <AddIcon />
      </NavLink>
    </Box>
  );
};

export default AdminPublicationsMenu;
