import { useState } from "react";
import { Box, Button, Container } from "@mui/material";
import logo from "@assets/logo.svg";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { translate } from "@i18n";
import ControlledInput from "@components/fields/ControlledInput";
import ControlledPassword from "@components/fields/ControlledPassword";
import { Link, useNavigate } from "react-router-dom";
import AuthButtons from "./AuthButtons";
import Loader from "@components/loader/Loader";
import { signIn } from "@api/auth/signIn";
import { useAppDispatch } from "@store/hook";
import { loginUser } from "@store/holaSlice";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";
import "./SignIn.scss";

interface ISignIn {
  email: string;
  password: string;
}

interface IToken {
  exp: number;
  user_id: number;
}

const SignIn = () => {
  const { t } = translate("translate", { keyPrefix: "signIn" });
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

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

  const onSubmitSignIn = async (data: ISignIn) => {
    try {
      setLoading(true);
      const response = await signIn({
        email: data.email,
        password: data.password,
      });
      if (response.data.access) {
        const decodeToken: IToken = jwtDecode(response.data.access);
        dispatch(
          loginUser({
            isLogin: true,
            token: response.data.access,
            refreshToken: response.data.refresh,
            expiresIn: decodeToken.exp,
            email: data.email,
            user_id: decodeToken.user_id.toString(),
          })
        );
        navigate("/profile");
      }
    } catch (err) {
      toast.error(t("errSignIn"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="signInContainer">
      <Loader isLoading={loading} />
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
        <Link to={"/registration/info"} className="linkRegistration">
          {t("signUp")}
        </Link>
      </Box>
    </Container>
  );
};

export default SignIn;
