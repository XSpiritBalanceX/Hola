import { Box, TableCell, TableRow } from "@mui/material";
import moment from "moment";
import { translate } from "@i18n";
import "./ItemRequest.scss";

interface IItemRequestProps {
  id: number;
  status: string;
  user_name: string;
  age: number;
  email: string;
  issue: string;
  date: string;
}

type TStatusColors = {
  new: string;
  "in process": string;
  closed: string;
};

const ItemRequest = ({
  id,
  status,
  user_name,
  age,
  email,
  issue,
  date,
}: IItemRequestProps) => {
  const { t } = translate("translate", { keyPrefix: "adminSupportPage" });

  const statusColors: TStatusColors = {
    new: "#554CB6",
    "in process": "#55C1E3",
    closed: "#BFC3CF",
  };

  const momentDate = moment(date);
  return (
    <TableRow className="itemRequestRow">
      <TableCell>
        <Box className="itemRequestBox idRequest">
          <span className="mobileText">№</span>
          {id}
        </Box>
      </TableCell>
      <TableCell>
        <Box
          className={`itemRequestBox statusBox ${
            status.toLowerCase() === "closed" ? "closedRequest" : ""
          }`}
        >
          <span className="mobileText">{t("status")}:</span>
          <Box
            className="statusColor"
            bgcolor={statusColors[status.toLowerCase() as keyof TStatusColors]}
          />
          {status}
        </Box>
      </TableCell>
      <TableCell>
        <Box className="itemRequestBox userNameAgeBox">
          <span className="mobileText">{t("user")}:</span>{" "}
          {`${user_name}, ${age}`}
        </Box>
      </TableCell>
      <TableCell>
        <Box className="itemRequestBox emailBox">
          <span className="mobileText">E-mail:</span>
          {email}
        </Box>
      </TableCell>
      <TableCell>
        <Box className="itemRequestBox issueBox">
          <span className="mobileText">{t("issue")}:</span>
          {issue}
        </Box>
      </TableCell>
      <TableCell>
        <Box className="itemRequestBox dateBox">
          <span className="mobileText">{t("date")}:</span>
          {momentDate.format("DD.MM.YYYY")}
        </Box>
      </TableCell>
      <TableCell>
        <Box className="itemRequestBox timeBox">
          <span className="mobileText">{t("time")}:</span>
          {momentDate.format("HH:mm")}
        </Box>
      </TableCell>
    </TableRow>
  );
};

export default ItemRequest;
