import { useState } from "react";
import { Container, Box, Button } from "@mui/material";
import { translate } from "@i18n";
import NavigationButton from "@components/buttons/NavigationButton";
import SelectablePlan from "@components/subscriptionPlan/SelectablePlan";
import { useGetSubscriptionsQuery } from "@store/subscriptionApi";
import Loader from "@components/loader/Loader";
import CustomError from "@components/error/CustomError";
import "./PlanPage.scss";

const UserPlanPage = () => {
  const { t } = translate("translate", { keyPrefix: "planPage" });

  const { data, error, isLoading } = useGetSubscriptionsQuery();

  const [isChangePlan, setIsChangePlan] = useState(false);

  const handleChangePlan = () => {
    setIsChangePlan(true);
  };

  return (
    <>
      <Loader isLoading={isLoading} />
      {error ? (
        <CustomError />
      ) : (
        <Container className="containerUserPlanPage">
          <Box className="contentUserPlan">
            <NavigationButton label={t("yourPlan")} path="/subscription" />
            {!isChangePlan && (
              <>
                {/* mock , replace real data*/}
                <SelectablePlan
                  id={1}
                  type="premium"
                  price_per_month="5.99"
                  isSelectable={false}
                />
                <Box>cards</Box>
                <Box className="changePlanButton">
                  <Button type="button" onClick={handleChangePlan}>
                    {t("changePlan")}
                  </Button>
                </Box>
              </>
            )}
            {isChangePlan &&
              data &&
              data.map((el) => (
                <SelectablePlan
                  key={el.id}
                  id={el.id}
                  type={el.type}
                  price_per_month={el.price_per_month}
                  isSelectable={true}
                />
              ))}
          </Box>
        </Container>
      )}
    </>
  );
};

export default UserPlanPage;
