import { useState, useRef, useEffect } from "react";
import { Box, Button } from "@mui/material";
import TinderCard from "react-tinder-card";
import { listOfInterests } from "@utils/listOfInterests";
import { translate } from "@i18n";
import "./UserSearchCard.scss";

interface IUserSearchCardProps {
  id: number;
  name: string;
  age: number;
  image: string[];
  interests: { id: number; name: string }[];
  cbHandleRemoveUser: (id: number) => void;
}

const UserSearchCard = ({
  id,
  name,
  age,
  image,
  interests,
  cbHandleRemoveUser,
}: IUserSearchCardProps) => {
  const { t } = translate("translate", { keyPrefix: "searchPage" });

  const [activeIndex, setActiveIndex] = useState(0);

  const tinderCardRef = useRef<null | any>(null);
  const startXRef = useRef(0);

  useEffect(() => {
    const cardElement = tinderCardRef.current as any;

    const handleTouchStart = (e: React.TouchEvent) => {
      const touch = e.touches[0];
      startXRef.current = touch.clientX;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
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

  return (
    <>
      <Button
        className="controlPhotoButton prev"
        onClick={handlePreviousPhoto}
      />
      <Button className="controlPhotoButton next" onClick={handleNextPhoto} />
      <TinderCard
        className="swipe"
        preventSwipe={["up", "down"]}
        onSwipe={(direction) => swiped(direction, id)}
        onCardLeftScreen={() => leftScreen(id)}
      >
        <Box
          className="card"
          style={{
            backgroundImage: `url(${image[activeIndex]})`,
          }}
        >
          <Box className="swipedColor" ref={tinderCardRef} />
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
          </Box>
        </Box>
      </TinderCard>
    </>
  );
};

export default UserSearchCard;
