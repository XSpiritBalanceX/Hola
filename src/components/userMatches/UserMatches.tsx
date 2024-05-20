import { useState, useEffect } from "react";
import { Box, Avatar } from "@mui/material";
import Slider from "react-slick";
import user from "@assets/user.png";
import { useNavigate } from "react-router-dom";
import "./UserMatches.scss";

const mockData = [
  {
    id: 4,
    name: "Брендон",
    image:
      "http://212.193.62.231:9000/media-bucket/media/6943d241-055d-4cca-bcff-989f236318ab.jpg",
  },
  {
    id: 5,
    name: "Джейкоб",
    image:
      "http://212.193.62.231:9000/media-bucket/media/d84a2714-2c55-4231-accf-0fd1ac3f5c35.jpg",
  },
  {
    id: 6,
    name: "Джозеф",
    image:
      "http://212.193.62.231:9000/media-bucket/media/4bf97497-2c2d-4f29-bbe0-d00bb8d4ac8d.jpg",
  },
  {
    id: 7,
    name: "Дениел",
    image:
      "http://212.193.62.231:9000/media-bucket/media/ed3785be-1ce0-4724-9ffb-f2bf95e1effe.jpg",
  },
  {
    id: 8,
    name: "User",
    image: "",
  },
  {
    id: 9,
    name: "Matt",
    image:
      "https://rus.team/images/article/58829/avatar_16x9.webp?actual=1604332666",
  },
  {
    id: 10,
    name: "Alex",
    image:
      "https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/ebf9dcd7-66b4-41c2-816d-bf6f00500a0d/x178",
  },
];

const UserMatches = () => {
  const navigate = useNavigate();

  const [slidesToShow, setSlidesToShow] = useState(6.2);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      let newSlidesToShow = 6.2;

      if (screenWidth >= 1000) {
        newSlidesToShow = 7.5;
      } else if (screenWidth <= 870 && screenWidth > 650) {
        newSlidesToShow = 4.5;
      } else if (screenWidth <= 650 && screenWidth > 500) {
        newSlidesToShow = 4.2;
      } else if (screenWidth <= 500) {
        newSlidesToShow = 3.3;
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

  const handleClickUser = (id: number) => {
    navigate(`/search/user/${id}`);
  };

  return (
    <Slider {...settings} className="userMatchesSlider">
      {mockData.map((el) => (
        <Box
          key={el.id}
          className="userMatchItem"
          onClick={() => handleClickUser(el.id)}
        >
          <Avatar src={el.image || user} alt="user" className="avatarUser" />
          <p className="userName">{el.name}</p>
        </Box>
      ))}
    </Slider>
  );
};

export default UserMatches;
