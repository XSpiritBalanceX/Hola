import { useState, useEffect } from "react";
import { Box, Avatar, Button, Badge } from "@mui/material";
import user from "@assets/user.png";
import Stories from "react-insta-stories";
import Slider from "react-slick";
import CloseIcon from "@mui/icons-material/Close";
import { translate } from "@i18n";
import { styled } from "@mui/material/styles";
import "./UserStories.scss";

type TStory = {
  url: string;
  header: { heading: string; subheading: string; profileImage: string };
};

interface IUserStoriesProps {
  stories: TStory[];
}

const StyledBadge = styled(Badge)(() => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#554CB6",
    color: "white",
    width: "21px",
    height: "21px",
    borderRadius: "100%",
    "&::after": {
      position: "absolute",
      top: "-1px",
      left: "-1px",
      width: "21px",
      height: "21px",
      borderRadius: "50%",
      border: "1px solid white",
      content: '"+"',
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },
}));

const UserStories = ({ stories }: IUserStoriesProps) => {
  const { t } = translate("translate", { keyPrefix: "dashboardPage" });

  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const [slidesToShow, setSlidesToShow] = useState(10);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      let newSlidesToShow = 10;

      if (screenWidth >= 1000) {
        newSlidesToShow = 10;
      } else if (screenWidth <= 870 && screenWidth > 650) {
        newSlidesToShow = 6.5;
      } else if (screenWidth <= 650 && screenWidth > 500) {
        newSlidesToShow = 6.2;
      } else if (screenWidth <= 500) {
        newSlidesToShow = 5.5;
      }

      setSlidesToShow(newSlidesToShow);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    swipeToSlide: true,
    draggable: true,
  };

  const handleAvatarClick = (user: string) => {
    setSelectedUser(user);
  };

  const handleEndStories = () => {
    setSelectedUser(null);
  };

  const moveSelectedUserToStart = (arr: TStory[], user: string) => {
    const index = arr.findIndex((story) => story.header.heading === user);
    const selectedUserStories = arr.slice(index).concat(arr.slice(0, index));
    return selectedUserStories;
  };

  const filteredStories = selectedUser
    ? moveSelectedUserToStart(stories, selectedUser)
    : stories;

  return (
    <>
      {!selectedUser && (
        <Slider {...settings} className="storiesSlider">
          <Box
            /* onClick={() => handleAvatarClick('User')} */
            className="itemStory"
          >
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
              className="userBadge"
            >
              <Avatar alt="user" src={user} className="avatarUser" />
            </StyledBadge>
            <p className="userName">{t("you")}</p>
          </Box>
          {stories.map((el, ind) => (
            <Box
              key={ind}
              onClick={() => handleAvatarClick(el.header.heading)}
              className="itemStory"
            >
              <Avatar
                src={el.header.profileImage || user}
                className="avatarUser"
              />
              <p className="userName">{el.header.heading}</p>
            </Box>
          ))}
        </Slider>
      )}
      {selectedUser && (
        <Box className="storiesBox">
          <Button
            type="button"
            onClick={handleEndStories}
            className="closeStoryButton"
          >
            <CloseIcon />
          </Button>
          <Stories
            stories={filteredStories}
            defaultInterval={3000}
            width={"98%"}
            height={"calc(100% - 50px)"}
            storyContainerStyles={{
              margin: "0 auto",
              position: "absolute",
              top: "50px",
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
        </Box>
      )}
    </>
  );
};

export default UserStories;
