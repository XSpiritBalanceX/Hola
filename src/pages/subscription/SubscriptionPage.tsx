import { Container, Box, Button } from "@mui/material";
import {
  useGetSubscriptionsQuery,
  useGetUserPlanQuery,
} from "@store/requestApi/subscriptionApi";
import Loader from "@components/loader/Loader";
import CustomError from "@components/error/CustomError";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { translate } from "@i18n";
import AvailablePlan from "@components/subscriptionPlan/AvailablePlan";
import NavigationButton from "@components/buttons/NavigationButton";
import { useNavigate } from "react-router-dom";
import "./SubscriptionPage.scss";

const SubscriptionPage = () => {
  const { t } = translate("translate", { keyPrefix: "subscriptionPage" });
  const navigate = useNavigate();

  const { data, error, isLoading } = useGetSubscriptionsQuery();

  const {
    data: userCurrentPlan,
    error: errorCurrentPlan,
    isLoading: loadingCurrentPlan,
  } = useGetUserPlanQuery();

  const handleNavigate = () => {
    navigate("/plan/user_plan");
  };

  return (
    <>
      <Loader isLoading={isLoading || loadingCurrentPlan} />
      {error || errorCurrentPlan ? (
        <CustomError />
      ) : (
        data &&
        userCurrentPlan && (
          <Container className="subscriptionContainer">
            <NavigationButton
              label={t("subscription")}
              path={"/profile/settings"}
            />
            <Box className="userCurrentPlanBox">
              <p className="titleCurrentPlan">{t("yourPlan")}</p>
              <Box className="planNameButton">
                <p>{`Hola ${userCurrentPlan.type}`}</p>
                <Button type="button" onClick={handleNavigate}>
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
        )
      )}
    </>
  );
};

export default SubscriptionPage;
