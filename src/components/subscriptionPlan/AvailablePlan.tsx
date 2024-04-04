import { Box, Button, List, ListItem, ListItemIcon } from "@mui/material";
import logo from "@assets/logoblue.svg";
import { translate } from "@i18n";
import CheckIcon from "@mui/icons-material/Check";
import { useNavigate } from "react-router-dom";
import { IAvailablePlanProps, TPlansInformation } from "./TypesPlan";
import "./SubscriptionPlan.scss";

const AvailablePlan = ({ id, type, price_per_month }: IAvailablePlanProps) => {
  const { t } = translate("translate", { keyPrefix: "subscriptionPage" });
  const navigate = useNavigate();

  const plans: TPlansInformation = {
    free: ["free1", "free2", "free3", "free4"],
    premium: ["premium1", "premium2", "premium3", "premium4"],
    "premium student": [
      "premiumStudent1",
      "premiumStudent2",
      "premiumStudent3",
      "premiumStudent4",
    ],
  };

  const handleGoToPlan = () => {
    navigate(`/plan/${id}`);
  };

  return (
    <Box className="availablePlanItemBox">
      <Box className="contentAvailablePlan">
        <Box className="planNameBox">
          <img src={logo} alt="logo" />
          <p>{type}</p>
        </Box>
        <List className="listAvailablePlan">
          {plans[type as keyof TPlansInformation].map((el, ind) => (
            <ListItem key={ind}>
              <ListItemIcon className="icon">
                <CheckIcon />
              </ListItemIcon>
              <p>{t(el)}</p>
            </ListItem>
          ))}
        </List>
      </Box>
      <Button type="button" className="startButton" onClick={handleGoToPlan}>
        {t("startNow")}
      </Button>
      {type !== "free" ? (
        <p className="priceText">
          {t("availablePlanPrice", { price: price_per_month })}
        </p>
      ) : (
        <p className="priceText">{t("perMonth", { price: price_per_month })}</p>
      )}
    </Box>
  );
};

export default AvailablePlan;
