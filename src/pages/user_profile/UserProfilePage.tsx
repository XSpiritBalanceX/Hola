import { Box, Button, Container } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import TabMenu from "@components/tabMenu/TabMenu";
import { listOfInterests } from "@utils/listOfInterests";
import { translate } from "@i18n";
import CloseIcon from "@mui/icons-material/Close";
import "./UserProfilePage.scss";

const mockData = {
  id: 1,
  name: "Jacob",
  age: 19,
  image: [
    "https://www.film.ru/sites/default/files/people/34216510-1099516.jpg",
    "https://static.kinoafisha.info/k/persons/1080x1920/upload/persons/307465981235.jpg",
    "https://www.kino-teatr.ru/acter/photo/6/0/496606/964803.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8feqN8K4SfRX0qPpnm1qnz_zFXamaDHbHyUqqXUSOzAzyKjEEH9OxyAZSg_YPwObhuGE&usqp=CAU",
    "https://uznayvse.ru/images/catalog/2022/2/jacob-elordi_97.jpg",
  ],
  interests: [
    { id: 5, name: "" },
    { id: 8, name: "" },
    { id: 10, name: "" },
    { id: 12, name: "" },
    { id: 13, name: "" },
  ],
  description:
    "Praesent pretium ornare tellus a aliquet. Nullam non urna tincidunt, scelerisque dolor vel, tincidunt massa. Aliquam sed sem mi. Aliquam tempor nulla sit amet vestibulum lobortis. Vestibulum iaculis semper lacinia. Etiam eget diam vitae nisi feugiat gravida sit amet a eros. Suspendisse tempus massa id.",
};
const UserProfilePage = () => {
  const { t } = translate("translate", { keyPrefix: "searchPage" });
  const navigate = useNavigate();

  const { id } = useParams();

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    draggable: true,
  };

  const userInterests = listOfInterests
    .filter((el) => mockData.interests.some((item) => item.id === el.indInt))
    .map((interest) => ({ indInt: interest.indInt, label: interest.label }));

  const handleNavigateBack = () => {
    navigate(-1);
  };

  return (
    <Container className="userProfileContainer">
      <Box className="navigationBox">
        <Button type="button" onClick={handleNavigateBack}>
          <CloseIcon />
        </Button>
      </Box>
      <Slider {...settings} className="userProfileSlider">
        {mockData.image.map((el, ind) => (
          <Box key={ind} className="userImage">
            <img src={el} alt="user" />
          </Box>
        ))}
      </Slider>
      <Box className="userInformationBox">
        <p className="userNameAge">
          {mockData.name} <span>{mockData.age}</span>
        </p>
        <Box className="userInterests">
          {userInterests.map((el, ind) => (
            <p key={ind}>{t(el.label)}</p>
          ))}
        </Box>
        <p className="userDescription">{mockData.description}</p>
        <Button type="button" className="buttonSendMessage">
          {t("sendMessage")}
        </Button>
      </Box>
      <TabMenu />
    </Container>
  );
};

export default UserProfilePage;
