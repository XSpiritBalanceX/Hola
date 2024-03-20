import { Container, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { translate } from "@i18n";
import logo from "@assets/logoblue.svg";
import "./CustomError.scss";

interface ICustomErrorProps {
  isErrorBoundary?: boolean;
}

const CustomError = ({ isErrorBoundary }: ICustomErrorProps) => {
  const { t } = translate("translate", { keyPrefix: "errorScreen" });
  const navigate = useNavigate();

  const handleClick = () => {
    if (isErrorBoundary) {
      window.location.href = "/dashboard";
    } else {
      navigate("/dashboard");
    }
  };
  return (
    <Container className="customErrorContainer">
      <img src={logo} alt="logo" />
      <p className="numberOfError">404</p>
      <p className="firstTextError">{t("pageNotFound")}</p>
      <p className="secondTextError">{t("textInErrorPage")}</p>
      <Button className="buttonRedirectError" onClick={handleClick}>
        {t("goToToHome")}
      </Button>
    </Container>
  );
};

export default CustomError;
