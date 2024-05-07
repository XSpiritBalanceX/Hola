import { useState } from "react";
import { Button } from "@mui/material";
import like from "@assets/likefilled.svg";
import { useIgnorePersonMutation } from "@store/requestApi/searchingApi";
import { toast } from "react-toastify";
import { translate } from "@i18n";
import "animate.css";

interface IUserCardButtonsProps {
  user_id: number;
  cbRemoveUser: (id: number) => void;
}

const UserCardButtons = ({ user_id, cbRemoveUser }: IUserCardButtonsProps) => {
  const { t } = translate("translate", { keyPrefix: "searchPage" });

  const [isLike, setIsLike] = useState(false);

  const userID = localStorage.getItem("hola_user_id");

  const [ignorePerson] = useIgnorePersonMutation();

  const handleRemoveUser = async (
    e: React.MouseEvent<HTMLButtonElement> | React.TouchEvent
  ) => {
    e.stopPropagation();
    try {
      await ignorePerson({
        person_id: userID || "",
        ignored_id: user_id,
      }).unwrap();
      cbRemoveUser(user_id);
    } catch (err: any) {
      toast.error(t("unexpectedErr"));
    }
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
        <p className="likeText animate__animated animate__backInUp">Like</p>
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
