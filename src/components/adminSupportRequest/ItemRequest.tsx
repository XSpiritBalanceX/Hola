import { Box, TableCell, TableRow } from "@mui/material";
import moment from "moment";
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
  const statusColors: TStatusColors = {
    new: "#554CB6",
    "in process": "#55C1E3",
    closed: "#BFC3CF",
  };

  const momentDate = moment(date);
  return (
    <TableRow className="itemRequestRow">
      <TableCell>
        <Box className="itemRequestBox idRequest">{id}</Box>
      </TableCell>
      <TableCell>
        <Box
          className={`itemRequestBox statusBox ${
            status.toLowerCase() === "closed" ? "closedRequest" : ""
          }`}
        >
          <Box
            className="statusColor"
            bgcolor={statusColors[status.toLowerCase() as keyof TStatusColors]}
          />
          {status}
        </Box>
      </TableCell>
      <TableCell>
        <Box className="itemRequestBox userNameAgeBox">{`${user_name}, ${age}`}</Box>
      </TableCell>
      <TableCell>
        <Box className="itemRequestBox emailBox">{email}</Box>
      </TableCell>
      <TableCell>
        <Box className="itemRequestBox issueBox">{issue}</Box>
      </TableCell>
      <TableCell>
        <Box className="itemRequestBox dateBox">
          {momentDate.format("DD.MM.YYYY")}
        </Box>
      </TableCell>
      <TableCell>
        <Box className="itemRequestBox timeBox">
          {momentDate.format("HH:mm")}
        </Box>
      </TableCell>
    </TableRow>
  );
};

export default ItemRequest;
