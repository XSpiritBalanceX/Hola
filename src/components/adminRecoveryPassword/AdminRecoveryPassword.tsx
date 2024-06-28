import { Box, Button } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { translate } from "@i18n";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import AdminEmailForm from "./AdminEmailForm";
import AdminPasswordForm from "./AdminPasswordForm";
import "./AdminRecoveryPassword.scss";

const AdminRecoveryPassword = () => {
  const { t } = translate("translate", { keyPrefix: "adminSettingsPage" });

  const { part } = useParams();
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/admin/settings/general");
  };
  return (
    <Box className="adminRecoveryPasswordContainer">
      <Button
        type="button"
        onClick={handleNavigate}
        className="navigatePasswordButton"
      >
        <ArrowBackIosNewIcon />
        {part?.includes("change_password")
          ? t("changePassword")
          : t("passwordRecovery")}
      </Button>
      {part?.includes("email") && <AdminEmailForm />}
      {!part?.includes("email") && <AdminPasswordForm />}
    </Box>
  );
};

export default AdminRecoveryPassword;
