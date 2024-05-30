import { Box, Button } from "@mui/material";
import MessageIcon from "@components/icons/MessageIcon";
import BucketIcon from "@components/icons/BucketIcon";
import BlockIcon from "@mui/icons-material/Block";
import { IControlsSelectedUserProps } from "./TypesAdminUser";
import "./AdminUsers.scss";

const ControlsSelectedUser = ({ user_id }: IControlsSelectedUserProps) => {
  return (
    <Box className="controlsSelectedUserBox">
      <Button type="button" className="buttonMessage">
        <MessageIcon fill="#554CB6" />
      </Button>
      <Button type="button" className="buttonDelete">
        <BucketIcon fill="#30419D" />
      </Button>
      <Button type="button" className="buttonBlock">
        <BlockIcon />
      </Button>
    </Box>
  );
};

export default ControlsSelectedUser;
