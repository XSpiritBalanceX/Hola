import { Container, Box, Button } from "@mui/material";
import { useGetSubscriptionsQuery } from "@store/subscriptionApi";
import Loader from "@components/loader/Loader";
import CustomError from "@components/error/CustomError";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { translate } from "@i18n";
import { useNavigate } from "react-router-dom";
import AvailablePlan from "@components/subscriptionPlan/AvailablePlan";
import "./SubscriptionPage.scss";

const SubscriptionPage = () => {
  const { t } = translate("translate", { keyPrefix: "subscriptionPage" });

  const { data, error, isLoading } = useGetSubscriptionsQuery();

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/profile/settings");
  };

  return (
    <>
      <Loader isLoading={isLoading} />
      {error ? (
        <CustomError />
      ) : (
        <Container className="subscriptionContainer">
          <Box className="navigationSubscription">
            <Button type="button" onClick={handleNavigate}>
              <ArrowBackIosNewIcon />
            </Button>
            <p>{t("subscription")}</p>
          </Box>
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
