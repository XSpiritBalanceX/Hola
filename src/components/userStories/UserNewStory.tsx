import { Box, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { IUserNewStoryProps } from "./TypesUsersStories";
import { translate } from "@i18n";
import EmojiIcon from "@components/icons/EmojiIcon";

import "./UserStories.scss";

const UserNewStory = ({
  userSelectedPhoto,
  cbHandleCloseUserStory,
}: IUserNewStoryProps) => {
  const { t } = translate("translate", { keyPrefix: "dashboardPage" });

  const handlePostStory = () => {
    /* const formData = new FormData();
    formData.append('file', userSelectedPhoto) */
  };

  const handleCloseStory = () => {
    cbHandleCloseUserStory();
  };

  return (
    <>
      <Box className="contentNewStory">
        {userSelectedPhoto instanceof File && (
          <img
            src={URL.createObjectURL(userSelectedPhoto)}
            alt="new user"
            className="userNewPhoto"
          />
        )}
        <Box className="actionsBox">
          <p className="titleNewStory">{t("addToStories")}</p>
          <Box className="actionsButtons">
            <Button type="button">Aa</Button>
            <Button type="button">
              <EmojiIcon fill="#FFFFFF" />
            </Button>
            <Button type="button" onClick={handleCloseStory}>
              <CloseIcon />
            </Button>
          </Box>
        </Box>
      </Box>
      <Box className="controlNewStory">
        <Button type="button" onClick={handlePostStory}>
          {t("post")}
        </Button>
      </Box>
    </>
  );
};

export default UserNewStory;
