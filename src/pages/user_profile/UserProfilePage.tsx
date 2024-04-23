import { Box, Button, Container } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import TabMenu from "@components/tabMenu/TabMenu";
import { listOfInterests } from "@utils/listOfInterests";
import { translate } from "@i18n";
import CloseIcon from "@mui/icons-material/Close";
import { useGetUserByIdQuery } from "@store/requestApi/searchingApi";
import Loader from "@components/loader/Loader";
import CustomError from "@components/error/CustomError";
import "./UserProfilePage.scss";

const UserProfilePage = () => {
  const { t } = translate("translate", { keyPrefix: "searchPage" });
  const navigate = useNavigate();

  const { id } = useParams();

  const { data, error, isLoading } = useGetUserByIdQuery(id as string);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    draggable: true,
  };

  const userInterests =
    data &&
    listOfInterests
      .filter((el) => data.interests.some((item) => item.id === el.indInt))
      .map((interest) => ({ indInt: interest.indInt, label: interest.label }));

  const handleNavigateBack = () => {
    navigate(-1);
  };

  return (
    <>
      <Loader isLoading={isLoading} />
      {error && <CustomError />}
      {!error && data && (
        <Container className="userProfileContainer">
          <Box className="navigationBox">
            <Button type="button" onClick={handleNavigateBack}>
              <CloseIcon />
            </Button>
          </Box>
          <Slider {...settings} className="userProfileSlider">
            {data.images.map((el, ind) => (
              <Box key={ind} className="userImage">
                <img src={el.file} alt="user" />
              </Box>
            ))}
          </Slider>
          <Box className="userInformationBox">
            <p className="userNameAge">
              {data.name} <span>{data.age}</span>
            </p>
            <Box className="userInterests">
              {userInterests &&
                userInterests.map((el, ind) => <p key={ind}>{t(el.label)}</p>)}
            </Box>
            <p className="userDescription">{data.description || ""}</p>
            <Button type="button" className="buttonSendMessage">
              {t("sendMessage")}
            </Button>
          </Box>
          <TabMenu />
        </Container>
      )}
    </>
  );
};

export default UserProfilePage;
