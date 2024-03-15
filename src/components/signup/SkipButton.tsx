import { Button } from "@mui/material";
import { translate } from "@i18n";
import { useNavigate } from "react-router-dom";
import "./SignUp.scss";

interface ISkipButtonProps {
  pathname: string;
}

const SkipButton = ({ pathname }: ISkipButtonProps) => {
  const { t } = translate("translate", { keyPrefix: "signUp" });
  const navigate = useNavigate();

  const handleSkip = () => {
    pathname === "/registration/interests" && navigate("/registration/photos");
    pathname === "/registration/photos" && navigate("/profile");
  };

  return (
    <Button type="button" className="skipStepButton" onClick={handleSkip}>
      {t("skip")}
    </Button>
  );
};

export default SkipButton;
