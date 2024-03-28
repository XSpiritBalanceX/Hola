import { Box } from "@mui/material";
import checkin from "@assets/checkin.svg";
import { translate } from "@i18n";
import "./Modals.scss";

const ResetPasswordModal = () => {
  const { t } = translate("translate", { keyPrefix: "resetPasswordPage" });

  return (
    <Box className="resetPasswordModal">
      <img src={checkin} alt="checkin" />
      <p>{t("titleModal")}</p>
    </Box>
  );
};

export default ResetPasswordModal;
