import { Box, Button, List, ListItem, ListItemIcon } from "@mui/material";
import { translate } from "@i18n";
import CheckIcon from "@mui/icons-material/Check";
import {
  ISelectablePlanProps,
  TPlansInformationSelectable,
  TColors,
} from "./TypesPlan";
import logoblue from "@assets/logoblue.svg";
import logolight from "@assets/logolight.svg";
import logogrey from "@assets/logogrey.svg";
import moment from "moment";
import { useAppSelector } from "@store/hook";
import * as holaSelectors from "@store/selectors";
import "./SubscriptionPlan.scss";

const SelectablePlan = ({
  id,
  type,
  price_per_month,
  isSelectable,
}: ISelectablePlanProps) => {
  const { t } = translate("translate", { keyPrefix: "subscriptionPage" });
  const locale = useAppSelector(holaSelectors.localeSelect);

  const plans: TPlansInformationSelectable = {
    free: { list: ["free1", "free2", "free3", "free4"], logo: logogrey },
    premium: {
      list: ["premium1", "premium2", "premium3", "premium4"],
      logo: logoblue,
    },
    "premium student": {
      list: [
        "premiumStudent1",
        "premiumStudent2",
        "premiumStudent3",
        "premiumStudent4",
      ],
      logo: logolight,
    },
  };

  const currentDate = moment();
  const trialDate = currentDate.add(5, "days");
  const dateFormat =
    locale === "ru"
      ? `${trialDate.format("D MMMM")}`
      : `${trialDate.format("MMMM D")}`;

  const colors: TColors = {
    free: { background: "#F5F5F5", text: "#BFC3CF" },
    premium: { background: "#F8F7FF", text: "#554CB6" },
    "premium student": { background: "#E9F6FF", text: "#6E9FC2" },
  };

  return (
    <Box className="selectablePlanItemBox">
      <Box className="contentSelectablePlan">
        <Box
          className="planNameBox"
          style={{ backgroundColor: colors[type as keyof TColors].background }}
        >
          <img
            src={plans[type as keyof TPlansInformationSelectable].logo}
            alt="logo"
          />
          <p style={{ color: colors[type as keyof TColors].text }}>{type}</p>
        </Box>
        <List className="listSelectablePlan">
          {plans[type as keyof TPlansInformationSelectable].list.map(
            (el, ind) => (
              <ListItem key={ind}>
                <ListItemIcon className="icon">
                  <CheckIcon />
                </ListItemIcon>
                <p>{t(el)}</p>
              </ListItem>
            )
          )}
        </List>
        {isSelectable && (
          <Box className="controlsBox">
            <p>{price_per_month} USD</p>
            <Button type="button">{t("choose")}</Button>
          </Box>
        )}
      </Box>
      {!isSelectable && (
        <p className="nextPaymentText">
          {t("nextPayment")} <span>{price_per_month} USD</span> {t("datePaym")}{" "}
          <span>{dateFormat}</span>
        </p>
      )}
    </Box>
  );
};

export default SelectablePlan;
