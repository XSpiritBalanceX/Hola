import { Box, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { IUserStoryProps } from "./TypesUsersStories";
import "./UserStories.scss";

const UserStory = ({
  cbHandleCloseUserStory,
  userStory,
  userSelectedPhoto,
}: IUserStoryProps) => {
  const handleCloseStory = () => {
    cbHandleCloseUserStory();
  };

  return (
    <Box className="userStoryContainer">
      <Button type="button" onClick={handleCloseStory}>
        <CloseIcon />
      </Button>
    </Box>
  );
};

export default UserStory;
