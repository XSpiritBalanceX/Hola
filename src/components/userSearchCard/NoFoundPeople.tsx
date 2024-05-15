import { Box, Button } from "@mui/material";
import logo from "@assets/logoblue.svg";
import { translate } from "@i18n";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router-dom";
import "./UserSearchCard.scss";

const NoFoundPeople = () => {
  const { t } = translate("translate", { keyPrefix: "searchPage" });
  const navigate = useNavigate();

  const handleBackToCategories = () => {
    navigate("/search");
  };

  const handleReloadPage = () => {
    window.location.reload();
  };

  return (
    <Box className="noFoundPeopleBox">
      <img src={logo} alt="logo" />
      <Box className="contentNoFoundPeople">
        <p className="titleOops">{t("ops")}</p>
        <p className="titleNoFound">{t("noFoundPeople")}</p>
        <Button
          type="button"
          className="buttonTryAgain"
          onClick={handleReloadPage}
        >
          {t("tryAgain")}
        </Button>
        <Button
          type="button"
          className="buttonBack"
          onClick={handleBackToCategories}
        >
          <ArrowBackIosNewIcon />
          {t("backToCateg")}
        </Button>
      </Box>
    </Box>
  );
};

export default NoFoundPeople;
