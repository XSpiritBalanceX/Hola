import { Box, Button } from "@mui/material";
import { translate } from "@i18n";
import google from "@assets/google-icon.svg";
import apple from "@assets/apple-icon.svg";
import "./SignIn.scss";

const AuthButtons = () => {
  const { t } = translate("translate", { keyPrefix: "signIn" });
  return (
    <>
      <p>{t("signInWith")}</p>
      <Box>
        <Button type="button">
          <img src={google} alt="google icon" />
        </Button>
        <Button type="button">
          <img src={apple} alt="apple icon" />
        </Button>
      </Box>
    </>
  );
};

export default AuthButtons;
