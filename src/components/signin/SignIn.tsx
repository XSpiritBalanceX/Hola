import { Container } from "@mui/material";
import logo from "@assets/logo.svg";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { translate } from "@i18n";
import "./SignIn.scss";

interface ISignIn {
  email: string;
  password: string;
}

const SignIn = () => {
  const { t } = translate("translate", { keyPrefix: "signIn" });

  const validationShema = Yup.object().shape({
    email: Yup.string()
      .required(t("errorRequiredField"))
      .email(t("errIncorrectField")),
    password: Yup.string()
      .required(t("errorRequiredField"))
      .min(14, t("errorMeetPassword"))
      .max(99, t("errorMeetPassword"))
      .matches(
        /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*[a-z])/,
        t("errorMeetPassword")
      ),
  });

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ISignIn>({
    resolver: yupResolver(validationShema),
  });

  const onSubmitSignIn = (data: ISignIn) => {
    console.log(data);
  };

  return (
    <Container className="signInContainer">
      <img src={logo} alt="logo" />
    </Container>
  );
};

export default SignIn;
