import { Container, Box, Button } from "@mui/material";
import { useGetSubscriptionsQuery } from "@store/subscriptionApi";
import Loader from "@components/loader/Loader";
import CustomError from "@components/error/CustomError";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { translate } from "@i18n";
import AvailablePlan from "@components/subscriptionPlan/AvailablePlan";
import NavigationButton from "@components/buttons/NavigationButton";
import "./SubscriptionPage.scss";

const SubscriptionPage = () => {
  const { t } = translate("translate", { keyPrefix: "subscriptionPage" });

  const { data, error, isLoading } = useGetSubscriptionsQuery();

  return (
    <>
      <Loader isLoading={isLoading} />
      {error ? (
        <CustomError />
      ) : (
        <Container className="subscriptionContainer">
          <NavigationButton
            label={t("subscription")}
            path={"/profile/settings"}
          />
          <Box className="userCurrentPlanBox">
            <p className="titleCurrentPlan">{t("yourPlan")}</p>
            <Box className="planNameButton">
              <p>user plan</p>
              <Button type="button">
                <ArrowForwardIosIcon />
              </Button>
            </Box>
          </Box>
          <Box className="boxWithUsersPlans">
            <p className="titlePlans">{t("availablePlan")}</p>
            {data &&
              data.map((el, ind) => (
                <AvailablePlan
                  key={el.id}
                  id={el.id}
                  type={el.type}
                  price_per_month={el.price_per_month}
                />
              ))}
          </Box>
        </Container>
      )}
    </>
  );
};

export default SubscriptionPage;
