import { Box, Button, Container } from "@mui/material";
import logo from "@assets/logo.svg";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { translate } from "@i18n";
import ControlledInput from "@components/fields/ControlledInput";
import ControlledPassword from "@components/fields/ControlledPassword";
import { Link } from "react-router-dom";
import AuthButtons from "./AuthButtons";
import "./SignIn.scss";

interface ISignIn {
  email: string;
  password: string;
}

const SignIn = () => {
  const { t } = translate("translate", { keyPrefix: "signIn" });

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required(t("errorRequiredEmail"))
      .email(t("errIncorrectEmail")),
    password: Yup.string()
      .required(t("errorRequiredPassword"))
      .min(8, t("errorMeetPassword"))
      .max(25, t("errorMeetPassword"))
      .matches(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])/, t("errorMeetPassword")),
  });

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ISignIn>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmitSignIn = (data: ISignIn) => {
    console.log(data);
  };

  return (
    <Container className="signInContainer">
      <img src={logo} alt="logo" className="logoPicture" />
      <form onSubmit={handleSubmit(onSubmitSignIn)} className="signInForm">
        <ControlledInput
          name="email"
          control={control}
          error={errors && errors.email?.message}
          label={t("email")}
          classNameField="signInEmailField"
        />
        <ControlledPassword
          name="password"
          control={control}
          error={errors && errors.password?.message}
          label={t("password")}
          watch={watch}
          lengthValue={watch("password") && watch("password").length}
          className="signInPasswordField"
        />
        <Link to={"/"} className="forgotPasswordLink">
          {t("forgotPassword")}
        </Link>
        <Button type="submit" className="submitLoginForm">
          {t("login")}
        </Button>
      </form>
      <AuthButtons />
      <Box className="registrationButtonBox">
        <p className="titleRegistration">{t("donotHaveAcc")}</p>
        <Link to={"/registration"} className="linkRegistration">
          {t("signUp")}
        </Link>
      </Box>
    </Container>
  );
};

export default SignIn;
