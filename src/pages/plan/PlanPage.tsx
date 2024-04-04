import { Container, Box } from "@mui/material";
import { useParams } from "react-router-dom";
import CustomError from "@components/error/CustomError";
import Loader from "@components/loader/Loader";
import NavigationButton from "@components/buttons/NavigationButton";
import { useGetPlanByIDQuery } from "@store/subscriptionApi";
import { translate } from "@i18n";
import PlanForm from "./PlanForm";
import moment from "moment";
import { useAppSelector } from "@store/hook";
import * as holaSelectors from "@store/selectors";
import "./PlanPage.scss";

const PlanPage = () => {
  const { t } = translate("translate", { keyPrefix: "planPage" });
  const locale = useAppSelector(holaSelectors.localeSelect);

  const planID = useParams();
  const { data, error, isLoading } = useGetPlanByIDQuery(planID.id as string);

  const currentDate = moment();
  const trialDate = currentDate.add(5, "days");
  const dateFormat =
    locale === "ru"
      ? `${trialDate.format("D MMMM")}`
      : `${trialDate.format("MMMM D")}`;

  return (
    <>
      <Loader isLoading={isLoading} />
      {error ? (
        <CustomError />
      ) : (
        <Container className="containerPlanPage">
          <Box className="contentPlanPage">
            <NavigationButton
              label={`Hola ${data?.type}`}
              path="/subscription"
            />
            <p className="paymentText">{t("paymentInformation")}</p>
            <PlanForm />
            <p className="paymentInformationText">
              {t("firstPayment")}
              <span>{dateFormat}, </span>
              {t("cancelSub")}
            </p>
          </Box>
        </Container>
      )}
    </>
  );
};

export default PlanPage;
