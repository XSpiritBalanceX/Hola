import { useState } from "react";
import { Container, Box, Button } from "@mui/material";
import { translate } from "@i18n";
import { useNavigate, useParams } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import PasswordsForm from "@components/resetPasswordForm/PasswordsForm";
import EmailForm from "@components/resetPasswordForm/EmailForm";
import ResetPasswordModal from "@components/modal/ResetPasswordModal";
import "./ResetPasswordPage.scss";

const ResetPasswordPage = () => {
  const { t } = translate("translate", { keyPrefix: "resetPasswordPage" });
  const navigate = useNavigate();
  const { step } = useParams();

  const [isSavedPassword, setIsSavedPassword] = useState(false);

  const handleNavigate = () => {
    navigate("/profile/settings");
  };

  const handleSavePassword = () => {
    setIsSavedPassword(true);
  };

  return (
    <Container className="containerResetPasswordPage">
      <Box className="navigationPasswordReset">
        <Button type="button" onClick={handleNavigate}>
          <ArrowBackIosNewIcon />
        </Button>
        <p>{t("resetPassword")}</p>
      </Box>
      {step === "email" && !isSavedPassword && <EmailForm />}
      {step === "password" && !isSavedPassword && (
        <PasswordsForm cbHandleSavePassword={handleSavePassword} />
      )}
      {isSavedPassword && <ResetPasswordModal />}
    </Container>
  );
};

export default ResetPasswordPage;
