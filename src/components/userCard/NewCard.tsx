import { Container, Box } from "@mui/material";
import NavigationButton from "@components/buttons/NavigationButton";
import { translate } from "@i18n";
import NewCardForm from "./NewCardForm";
import mastercard from "@assets/mastercard.svg";
import visa from "@assets/visa.svg";
import "./Card.scss";

const NewCard = () => {
  const { t } = translate("translate", { keyPrefix: "planPage" });

  return (
    <Container className="containerNewCard">
      <Box className="contentNewCard">
        <NavigationButton label={t("addCard")} path="/plan/user_plan" />
        <p className="paymentInformation">{t("paymentInformation")}</p>
        <NewCardForm />
        <p className="cardDetailText">{t("cardDetail")}</p>
        <Box className="imagesBox">
          <img src={mastercard} alt="mastercard" />
          <img src={visa} alt="visa" />
        </Box>
      </Box>
    </Container>
  );
};

export default NewCard;
