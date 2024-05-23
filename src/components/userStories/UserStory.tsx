import { Box } from "@mui/material";
import { IUserStoryProps } from "./TypesUsersStories";
import UserNewStory from "./UserNewStory";
import classNames from "classnames";
import "./UserStories.scss";

const UserStory = ({
  cbHandleCloseUserStory,
  userStory,
  userSelectedPhoto,
}: IUserStoryProps) => {
  const classUserStoryContainer: string = classNames("userStoryContainer", {
    newStoryContainer: userSelectedPhoto,
    storyContainer: userStory,
  });

  return (
    <Box className={classUserStoryContainer}>
      {userSelectedPhoto && (
        <UserNewStory
          userSelectedPhoto={userSelectedPhoto}
          cbHandleCloseUserStory={cbHandleCloseUserStory}
        />
      )}
    </Box>
  );
};

export default UserStory;
