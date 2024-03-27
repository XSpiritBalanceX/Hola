import { useState } from "react";
import { Container, Box, Button } from "@mui/material";
import { translate } from "@i18n";
import { useNavigate } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import PasswordsForm from "@components/resetPasswordForm/PasswordsForm";
import EmailForm from "@components/resetPasswordForm/EmailForm";
import "./ResetPasswordPage.scss";

const ResetPasswordPage = () => {
  const { t } = translate("translate", { keyPrefix: "resetPasswordPage" });
  const navigate = useNavigate();

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
      {isSavedPassword && <EmailForm />}
      {!isSavedPassword && (
        <PasswordsForm cbHandleSavePassword={handleSavePassword} />
      )}
    </Container>
  );
};

export default ResetPasswordPage;
