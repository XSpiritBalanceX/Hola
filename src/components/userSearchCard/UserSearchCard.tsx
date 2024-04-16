import { useState, useRef, useEffect } from "react";
import { Box, Button } from "@mui/material";
import TinderCard from "react-tinder-card";
import { listOfInterests } from "@utils/listOfInterests";
import { translate } from "@i18n";
import UserCardButtons from "@components/buttons/UserCardButtons";
import classNames from "classnames";
import "./UserSearchCard.scss";

interface IUserSearchCardProps {
  id: number;
  name: string;
  age: number;
  image: string[];
  interests: { id: number; name: string }[];
  description: string;
  cbHandleRemoveUser: (id: number) => void;
}

const UserSearchCard = ({
  id,
  name,
  age,
  image,
  interests,
  description,
  cbHandleRemoveUser,
}: IUserSearchCardProps) => {
  const { t } = translate("translate", { keyPrefix: "searchPage" });

  const [activeIndex, setActiveIndex] = useState(0);
  const [isFullDescription, setIsFullDescription] = useState(false);
  const shortDescription = description.slice(0, 90);

  const tinderCardRef = useRef<null | any>(null);
  const startXRef = useRef(0);

  useEffect(() => {
    const cardElement = tinderCardRef.current as any;

    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
      const touch = e.touches[0];
      startXRef.current = touch.clientX;
    };

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
      const touch = e.touches[0];
      const deltaX = touch.clientX - startXRef.current;

      if (deltaX > 0) {
        cardElement.classList.add("toRight");
        cardElement.classList.remove("toLeft");
      } else if (deltaX < 0) {
        cardElement.classList.add("toLeft");
        cardElement.classList.remove("toRight");
      }
    };

    const handleTouchEnd = () => {
      cardElement.classList.remove("toRight");
      cardElement.classList.remove("toLeft");
    };

    cardElement.addEventListener("touchstart", handleTouchStart);
    cardElement.addEventListener("touchmove", handleTouchMove);
    cardElement.addEventListener("touchend", handleTouchEnd);

    return () => {
      cardElement.removeEventListener("touchstart", handleTouchStart);
      cardElement.removeEventListener("touchmove", handleTouchMove);
      cardElement.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  const swiped = (direction: string, id: number) => {
    console.log(direction, id);
  };

  const leftScreen = (id: number) => {
    cbHandleRemoveUser(id);
  };

  const handlePreviousPhoto = () => {
    activeIndex !== 0 && setActiveIndex(activeIndex - 1);
  };

  const handleNextPhoto = () => {
    activeIndex !== image.length - 1 && setActiveIndex(activeIndex + 1);
  };

  const userInterests = listOfInterests
    .filter((el) => interests.some((item) => item.id === el.indInt))
    .map((interest) => ({ indInt: interest.indInt, label: interest.label }));

  const handleFullShortDescription = () => {
    setIsFullDescription(!isFullDescription);
  };

  const classBoxCard: string = classNames("card", {
    expandedDescription: isFullDescription,
  });

  return (
    <TinderCard
      className="swipe"
      preventSwipe={["up", "down"]}
      onSwipe={(direction) => swiped(direction, id)}
      onCardLeftScreen={() => leftScreen(id)}
    >
      <Box
        className={classBoxCard}
        style={{
          backgroundImage: `url(${image[activeIndex]})`,
        }}
      >
        <Box className="swipedColor" ref={tinderCardRef} />
        <Button
          className="controlPhotoButton prev"
          onClick={handlePreviousPhoto}
          onTouchStart={handlePreviousPhoto}
        />
        <Button
          className="controlPhotoButton next"
          onClick={handleNextPhoto}
          onTouchStart={handleNextPhoto}
        />
        <Box className="photosButtonsBox">
          {Array(image.length)
            .fill(null)
            .map((_, ind) => (
              <Box
                key={ind}
                className={`${ind === activeIndex ? "activeButton" : ""}`}
              />
            ))}
        </Box>
        <Box className="userInformationBox">
          <p className="userNameAge">
            {name} <span>{age}</span>
          </p>
          <Box className="userInterestsBox">
            {userInterests.map((el, ind) => (
              <p key={ind}>{t(el.label)}</p>
            ))}
          </Box>
          <Box className="userDescriptionBox">
            {isFullDescription ? (
              <p>{description}</p>
            ) : (
              <p>
                {description.length > 90
                  ? `${shortDescription}...`
                  : `${shortDescription}`}
              </p>
            )}
            {description.length > 90 && (
              <Button
                type="button"
                onClick={handleFullShortDescription}
                onTouchStart={handleFullShortDescription}
              >
                {t(isFullDescription ? "collapse" : "seeMore")}
              </Button>
            )}
          </Box>
          <Box className="buttonsControlBox">
            <UserCardButtons user_id={id} />
          </Box>
        </Box>
      </Box>
    </TinderCard>
  );
};

export default UserSearchCard;
