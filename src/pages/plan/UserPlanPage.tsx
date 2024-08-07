import { useState } from "react";
import { Container, Box, Button } from "@mui/material";
import { translate } from "@i18n";
import NavigationButton from "@components/buttons/NavigationButton";
import SelectablePlan from "@components/subscriptionPlan/SelectablePlan";
import {
  useGetSubscriptionsQuery,
  useGetUserPlanQuery,
} from "@store/requestApi/subscriptionApi";
import Loader from "@components/loader/Loader";
import CustomError from "@components/error/CustomError";
import UserCards from "@components/userBankCard/UserBankCards";
import "./PlanPage.scss";

const mockCards = ["**** 7576", "**** 2727"];

const UserPlanPage = () => {
  const { t } = translate("translate", { keyPrefix: "planPage" });

  const { data, error, isLoading } = useGetSubscriptionsQuery();

  const {
    data: userCurrentPlan,
    error: errorCurrentPlan,
    isLoading: loadingCurrentPlan,
  } = useGetUserPlanQuery();

  const [isChangePlan, setIsChangePlan] = useState(false);

  const handleChangePlan = () => {
    setIsChangePlan(true);
  };

  return (
    <>
      <Loader isLoading={isLoading || loadingCurrentPlan} />
      {error || errorCurrentPlan ? (
        <CustomError />
      ) : (
        data &&
        userCurrentPlan && (
          <Container className="containerUserPlanPage">
            <Box className="contentUserPlan">
              <NavigationButton label={t("yourPlan")} path="/subscription" />
              {!isChangePlan && (
                <>
                  {/* mock , replace real data*/}
                  <SelectablePlan
                    id={userCurrentPlan.id}
                    type={userCurrentPlan.type}
                    price_per_month={userCurrentPlan.price_per_month}
                    isSelectable={false}
                  />
                  <UserCards cards={mockCards} />
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
        )
      )}
    </>
  );
};

export default UserPlanPage;
