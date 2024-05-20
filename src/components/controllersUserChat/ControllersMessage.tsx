import { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import { translate } from "@i18n";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import moment from "moment";
import { IControllersMessageProps } from "./TypesControllersUserChat";
import EmojiPicker, { EmojiClickData, Categories } from "emoji-picker-react";
import EmojiIcon from "@components/icons/EmojiIcon";
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

  const handleAddEmoji = (emoji: EmojiClickData, event: MouseEvent) => {
    setNewMessage((prevState) => {
      return prevState + emoji.emoji;
    });
  };

  const customCategoriesEmoji = [
    {
      category: Categories.SUGGESTED,
      name: t("lastUsedEmoji"),
    },
    {
      category: Categories.SMILEYS_PEOPLE,
      name: t("smileysAndFacesEmoji"),
    },
    {
      category: Categories.ANIMALS_NATURE,
      name: t("animalAndNatureEmoji"),
    },
    {
      category: Categories.FOOD_DRINK,
      name: t("foodAndDrinkEmoji"),
    },
    {
      category: Categories.TRAVEL_PLACES,
      name: t("travelAndPlacesEmoji"),
    },
    {
      category: Categories.ACTIVITIES,
      name: t("activitiesEmoji"),
    },
    {
      category: Categories.OBJECTS,
      name: t("objectEmoji"),
    },
    {
      category: Categories.SYMBOLS,
      name: t("symbolsEmoji"),
    },
    {
      category: Categories.FLAGS,
      name: t("flagsEmoji"),
    },
  ];

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
          <EmojiPicker
            className="chatEmojiContainer"
            onEmojiClick={handleAddEmoji}
            searchDisabled
            skinTonesDisabled
            previewConfig={{ showPreview: false }}
            categories={customCategoriesEmoji}
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
