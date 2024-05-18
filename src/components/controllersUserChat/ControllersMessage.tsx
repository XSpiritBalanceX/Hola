import { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import { translate } from "@i18n";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import moment from "moment";
import { IControllersMessageProps } from "./TypesControllersUserChat";
import "./ControllersUserChat.scss";

const ControllersMessage = ({
  cbHandleAddMessage,
}: IControllersMessageProps) => {
  const { t } = translate("translate", { keyPrefix: "chatPage" });
  const userID = localStorage.getItem("hola_user_id");

  const [newMessage, setNewMessage] = useState("");

  const handleTypeMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewMessage(e.currentTarget.value);
  };

  const handleSendMessage = () => {
    const new_message = {
      id: Number(userID),
      message: newMessage,
      time: moment().format("HH:mm"),
    };
    cbHandleAddMessage(new_message);
    setNewMessage("");
  };

  return (
    <Box className="controllerBox">
      <TextField
        type="search"
        value={newMessage}
        onChange={handleTypeMessage}
        className="messageField"
        placeholder={t("message")}
      />
      <Button type="button" onClick={handleSendMessage} className="sendButton">
        <ArrowUpwardIcon />
      </Button>
    </Box>
  );
};

export default ControllersMessage;
