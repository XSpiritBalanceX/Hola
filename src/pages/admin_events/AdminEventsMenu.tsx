import { Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import { translate } from "@i18n";
import { useParams } from "react-router-dom";
import "./AdminEventsPage.scss";

const AdminEventsMenu = () => {
  const { t } = translate("translate", { keyPrefix: "adminEventsPage" });

  const { part } = useParams();
  return (
    <Box className="adminEventsMenuBox">
      <NavLink to={"/admin/events/active"} className={"nav-link"}>
        {t("active")}
      </NavLink>
      <NavLink
        to={"/admin/events/archive_1"}
        className={() =>
          part?.includes("archive") ? "nav-link active" : "nav-link"
        }
      >
        {t("archive")}
      </NavLink>
    </Box>
  );
};

export default AdminEventsMenu;
