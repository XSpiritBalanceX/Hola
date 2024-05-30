import { TableRow, TableCell, Avatar, Box } from "@mui/material";
import user from "@assets/user.png";
import { IUserItemProps } from "./TypesAdminUser";
import "./AdminUsers.scss";

const UserItem = ({
  id,
  name,
  age,
  photo,
  email,
  acc_type,
  cbHandleSelectedUser,
}: IUserItemProps) => {
  const handleClickRow = () => {
    cbHandleSelectedUser(id);
  };

  return (
    <TableRow className="userItemRow" onClick={handleClickRow}>
      <TableCell>
        <Box className="boxWithAvatar">
          <p>{`${name}, ${age}`}</p>
          <Avatar src={photo || user} />
        </Box>
      </TableCell>
      <TableCell>
        <Box className="boxWithEmail">{email} </Box>
      </TableCell>
      <TableCell>
        <Box className="boxWithAccType">{acc_type} </Box>
      </TableCell>
    </TableRow>
  );
};

export default UserItem;
