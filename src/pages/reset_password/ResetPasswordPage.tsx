import { useState } from "react";
import { Container } from "@mui/material";
import { translate } from "@i18n";
import { useParams, useLocation } from "react-router-dom";
import PasswordsForm from "@components/resetPasswordForm/PasswordsForm";
import EmailForm from "@components/resetPasswordForm/EmailForm";
import ResetPasswordModal from "@components/modal/ResetPasswordModal";
import NavigationButton from "@components/buttons/NavigationButton";
import "./ResetPasswordPage.scss";

const ResetPasswordPage = () => {
  const { t } = translate("translate", { keyPrefix: "resetPasswordPage" });
  const { step } = useParams();
  const { pathname } = useLocation();

  const [isSavedPassword, setIsSavedPassword] = useState(false);

  const handleSavePassword = () => {
    setIsSavedPassword(true);
  };

  return (
    <Container className="containerResetPasswordPage">
      <NavigationButton
        label={
          pathname.includes("reset_password")
            ? t("resetPassword")
            : t("setNewPassword")
        }
        path={"/profile/settings"}
      />
      {step === "email" && !isSavedPassword && <EmailForm />}
      {step === "password" && !isSavedPassword && (
        <PasswordsForm cbHandleSavePassword={handleSavePassword} />
      )}
      {isSavedPassword && <ResetPasswordModal />}
    </Container>
  );
};

export default ResetPasswordPage;
