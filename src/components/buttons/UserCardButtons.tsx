import { useState } from "react";
import { Button } from "@mui/material";
import like from "@assets/likefilled.svg";
import "animate.css";

interface IUserCardButtonsProps {
  user_id: number;
}

const UserCardButtons = ({ user_id }: IUserCardButtonsProps) => {
  const [isLike, setIsLike] = useState(false);

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
    setIsLike(true);
    console.log("like", user_id);
  };

  return (
    <>
      {isLike && (
        <p className="likeText animate__animated animate__bounceInUp">Like</p>
      )}
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
