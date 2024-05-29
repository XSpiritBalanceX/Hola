import { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import { translate } from "@i18n";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import moment from "moment";
import { IControllersMessageProps } from "./TypesControllersUserChat";
import EmojiIcon from "@components/icons/EmojiIcon";
import CustomEmojiPicker from "@components/emoji/CustomEmojiPicker";
import "./ControllersUserChat.scss";

const ControllersMessage = ({
  cbHandleAddMessage,
}: IControllersMessageProps) => {
  const { t } = translate("translate", { keyPrefix: "chatPage" });
  const userID = localStorage.getItem("hola_user_id");

  const [newMessage, setNewMessage] = useState("");
  const [isShowEmoji, setIsShowEmoji] = useState(false);

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
    setIsShowEmoji(false);
  };

  const handleShowEmoji = () => {
    setIsShowEmoji(!isShowEmoji);
  };

  const handleAddEmoji = (emoji: string) => {
    setNewMessage((prevState) => {
      return prevState + emoji;
    });
  };

  return (
    <Box className="controllerBox">
      <Box className="fieldWithEmojiContainer">
        <TextField
          type="search"
          value={newMessage}
          onChange={handleTypeMessage}
          className="messageField"
          placeholder={t("message")}
        />
        <Button type="button" onClick={handleShowEmoji} className="emojiButton">
          <EmojiIcon fill="#797979" />
        </Button>
        {isShowEmoji && (
          <CustomEmojiPicker
            cbHandleAddEmoji={handleAddEmoji}
            classNamePicker="chatEmojiContainer"
          />
        )}
      </Box>
      <Button type="button" onClick={handleSendMessage} className="sendButton">
        <ArrowUpwardIcon />
      </Button>
    </Box>
  );
};

export default ControllersMessage;
