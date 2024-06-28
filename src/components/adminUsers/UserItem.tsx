import { TableRow, TableCell, Avatar, Box } from "@mui/material";
import user from "@assets/user.png";
import { IUserItemProps } from "./TypesAdminUser";
import { translate } from "@i18n";
import "./AdminUsers.scss";

const UserItem = ({
  id,
  name,
  age,
  photo,
  email,
  acc_type,
  subscription_type,
  cbHandleSelectedUser,
}: IUserItemProps) => {
  const { t } = translate("translate", { keyPrefix: "adminUsersPage" });

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
        <Box
          className={`boxWithAccType ${acc_type === "user" ? "" : "adminText"}`}
        >
          <span className="mobileContent">{t("accType")}: </span>
          {acc_type === "user" ? t("user") : t("admin")}
        </Box>
      </TableCell>
      <TableCell>
        <Box className="boxWithEmail">
          <span className="mobileContent">E-mail: </span>
          {email}{" "}
        </Box>
      </TableCell>
      <TableCell>
        <Box className="boxWithSubscriptionType">
          {acc_type !== "admin" && (
            <span className="mobileContent">{t("subscription")}: </span>
          )}
          {subscription_type}
        </Box>
      </TableCell>
    </TableRow>
  );
};

export default UserItem;
