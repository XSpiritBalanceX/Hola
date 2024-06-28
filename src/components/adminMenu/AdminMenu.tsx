import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { translate } from "@i18n";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import AdminMenuLinks from "./AdminMenuLinks";
import "./AdminMenu.scss";

const AdminMenu = () => {
  const { t } = translate("translate", { keyPrefix: "adminMenu" });

  return (
    <>
      <Accordion className="accordionAdminMenu">
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          className="accordionAdminText"
        >
          {t("menu")}
        </AccordionSummary>
        <AccordionDetails className="accordionMenuContent">
          <AdminMenuLinks />
        </AccordionDetails>
      </Accordion>
      <Box className="adminMenuBox">
        <AdminMenuLinks />
      </Box>
    </>
  );
};

export default AdminMenu;
