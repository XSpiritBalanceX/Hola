import { Container, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { translate } from "@i18n";
import logo from "@assets/logoblue.svg";
import LogOutIcon from "@components/icons/LogOutIcon";
import { useAppDispatch } from "@store/hook";
import { loginUser } from "@store/holaSlice";
import "./CustomError.scss";

interface ICustomErrorProps {
  isErrorBoundary?: boolean;
}

const CustomError = ({ isErrorBoundary }: ICustomErrorProps) => {
  const { t } = translate("translate", { keyPrefix: "errorScreen" });
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleClickMain = () => {
    if (isErrorBoundary) {
      window.location.href = "/dashboard";
    } else {
      navigate("/dashboard");
    }
  };

  const handleLogOut = () => {
    dispatch(
      loginUser({
        isLogin: false,
        token: "",
        expiresIn: 0,
        email: "",
        refreshToken: "",
        user_id: "",
      })
    );
    navigate("/login");
  };

  return (
    <Container className="customErrorContainer">
      <img src={logo} alt="logo" />
      <p className="numberOfError">404</p>
      <p className="firstTextError">{t("pageNotFound")}</p>
      <p className="secondTextError">{t("textInErrorPage")}</p>
      <Button className="buttonRedirectError" onClick={handleClickMain}>
        {t("goToToHome")}
      </Button>
      <Button onClick={handleLogOut} className="buttonLohOutError">
        <LogOutIcon fill="#554CB6" />
        {t("logOut")}
      </Button>
    </Container>
  );
};

export default CustomError;
