import { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import { IUserStoryProps } from "./TypesUsersStories";
import UserNewStory from "./UserNewStory";
import classNames from "classnames";
import Stories from "react-insta-stories";
import { translate } from "@i18n";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import CloseIcon from "@mui/icons-material/Close";
import "./UserStories.scss";

const UserStory = ({
  cbHandleCloseUserStory,
  userStory,
  userSelectedPhoto,
}: IUserStoryProps) => {
  const { t } = translate("translate", { keyPrefix: "dashboardPage" });

  const [message, setMessage] = useState("");

  const classUserStoryContainer: string = classNames("userStoryContainer", {
    newStoryContainer: userSelectedPhoto,
    storyContainer: userStory,
  });

  const handleEndStories = () => {
    cbHandleCloseUserStory();
  };

  const handleTypeMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.currentTarget.value);
  };

  const handleSendMessage = () => {
    console.log(message);
    setMessage("");
  };

  return (
    <Box className={classUserStoryContainer}>
      {userSelectedPhoto && (
        <UserNewStory
          userSelectedPhoto={userSelectedPhoto}
          cbHandleCloseUserStory={cbHandleCloseUserStory}
        />
      )}
      {userStory && (
        <>
          <Button
            type="button"
            onClick={handleEndStories}
            className="closeExistingStoryButton"
          >
            <CloseIcon />
          </Button>
          <Stories
            stories={[userStory]}
            defaultInterval={3000}
            width={"100%"}
            height={"calc(100% - 60px)"}
            storyContainerStyles={{
              margin: "0 auto",
              position: "absolute",
              top: "35px",
              left: 0,
              right: 0,
              bottom: 0,
            }}
            storyInnerContainerStyles={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto",
            }}
            onAllStoriesEnd={handleEndStories}
          />
          <Box className="messageBoxStory">
            <TextField
              type="search"
              value={message}
              onChange={handleTypeMessage}
              placeholder={t("sendMessage")}
              className="fieldMessage"
            />
            <Button
              type="button"
              onClick={handleSendMessage}
              className="sendMessageButton"
            >
              <ArrowUpwardIcon />
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};

export default UserStory;
