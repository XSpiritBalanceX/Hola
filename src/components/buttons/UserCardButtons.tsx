import { Button } from "@mui/material";
import like from "@assets/likefilled.svg";

interface IUserCardButtonsProps {
  user_id: number;
}

const UserCardButtons = ({ user_id }: IUserCardButtonsProps) => {
  const handleRemoveUser = (
    e: React.MouseEvent<HTMLButtonElement> | React.TouchEvent
  ) => {
    e.stopPropagation();
    console.log("remove", user_id);
  };

  const handleLikeUser = (
    e: React.MouseEvent<HTMLButtonElement> | React.TouchEvent
  ) => {
    e.stopPropagation();
    console.log("like", user_id);
  };

  return (
    <>
      <Button
        className="removeButton"
        onClick={handleRemoveUser}
        onTouchStart={handleRemoveUser}
      >
        +
      </Button>
      <Button
        className="likeButton"
        onClick={handleLikeUser}
        onTouchStart={handleLikeUser}
      >
        <img src={like} alt="icon" />
      </Button>
    </>
  );
};

export default UserCardButtons;
