import { Box, TableRow, TableCell } from "@mui/material";
import { translate } from "@i18n";
import moment from "moment";
import "./ItemPayment.scss";

interface IItemPaymentProps {
  name: string;
  age: number;
  email: string;
  start_date: string;
  last_payment: string;
  end_date: string;
  card: string;
  type: string;
}

const ItemPayment = ({
  name,
  age,
  email,
  start_date,
  last_payment,
  end_date,
  card,
  type,
}: IItemPaymentProps) => {
  const { t } = translate("translate", { keyPrefix: "adminPaymentsPage" });
  return (
    <TableRow className="itemPaymentRow">
      <TableCell>
        <Box
          className={`itemPaymentBox nameAgeBox ${
            type === "paid"
              ? "paidBox"
              : type === "expected"
              ? "expectedBox"
              : "suspendedBox"
          }`}
        >{`${name}, ${age}`}</Box>
      </TableCell>
      <TableCell>
        <Box
          className={`itemPaymentBox userEmailBox ${
            type === "paid"
              ? "paidBox"
              : type === "expected"
              ? "expectedBox"
              : "suspendedBox"
          }`}
        >
          {email}
        </Box>
      </TableCell>
      <TableCell>
        <Box
          className={`itemPaymentBox datePaymentBox ${
            type === "paid"
              ? "paidBox"
              : type === "expected"
              ? "expectedBox"
              : "suspendedBox"
          }`}
        >
          <span className="mobileText">{t("subscriptionStartDate")}: </span>
          {moment(start_date).format("DD / MM / YYYY")}
        </Box>
      </TableCell>
      <TableCell>
        <Box
          className={`itemPaymentBox datePaymentBox ${
            type === "paid"
              ? "paidBox"
              : type === "expected"
              ? "expectedBox"
              : "suspendedBox"
          }`}
        >
          <span className="mobileText">{t("lastPayment")}: </span>
          {moment(last_payment).format("DD / MM / YYYY")}
        </Box>
      </TableCell>
      <TableCell>
        <Box
          className={`itemPaymentBox datePaymentBox ${
            type === "paid"
              ? "paidDateBox"
              : type === "expected"
              ? "expectedDatedBox"
              : "suspendedDateBox"
          }`}
        >
          <span className="mobileText">{t("renewedUntil")}: </span>
          {moment(end_date).format("DD / MM / YYYY")}
        </Box>
      </TableCell>
      <TableCell>
        <Box
          className={`itemPaymentBox cardBox ${
            type === "paid"
              ? "paidBox"
              : type === "expected"
              ? "expectedBox"
              : "suspendedBox"
          }`}
        >
          {card}
        </Box>
      </TableCell>
    </TableRow>
  );
};

export default ItemPayment;
