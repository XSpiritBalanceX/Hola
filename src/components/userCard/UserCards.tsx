import { useState, useEffect } from "react";
import { Box, Button } from "@mui/material";
import Slider from "react-slick";
import visacard from "@assets/visacard.svg";
import { translate } from "@i18n";
import { useNavigate } from "react-router-dom";
import "./Card.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface IUserCardsProps {
  cards: string[];
}

const UserCards = ({ cards }: IUserCardsProps) => {
  const { t } = translate("translate", { keyPrefix: "planPage" });
  const navigate = useNavigate();

  const [slidesToShow, setSlidesToShow] = useState(2.1);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      let newSlidesToShow = 2.1;

      if (screenWidth >= 1000) {
        newSlidesToShow = 2.8;
      } else if (screenWidth <= 870 && screenWidth > 650) {
        newSlidesToShow = 3.2;
      } else if (screenWidth <= 650 && screenWidth > 500) {
        newSlidesToShow = 2.5;
      } else if (screenWidth <= 500) {
        newSlidesToShow = 1.9;
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

  const handleNavigate = () => {
    navigate("/plan/new_card");
  };

  return (
    <Slider {...settings} className="userCardsSlider">
      {cards.map((el, ind) => (
        <Box key={ind} className="itemCard">
          <img src={visacard} alt="card" />
          <p>{el}</p>
        </Box>
      ))}
      <Box className="itemCard newCard">
        <Button type="button" onClick={handleNavigate}>
          {t("addCard")}
        </Button>
      </Box>
    </Slider>
  );
};

export default UserCards;
