import { useState, useEffect } from "react";
import { Container, Box, Button } from "@mui/material";
import TabMenu from "@components/tabMenu/TabMenu";
import { translate } from "@i18n";
import UserStories from "@components/userStories/UserStories";
import ArticleDashboard from "./ArticleDashboard";
import ArticleDashboardModal from "@components/modal/ArticleDashboardModal";
import { useNavigate } from "react-router-dom";
import EventDashboard from "./EventDashboard";
import UserStory from "@components/userStories/UserStory";
import classNames from "classnames";
import "./DashboardPage.scss";

const mockStories = [
  {
    url: "https://i.pinimg.com/736x/be/39/7c/be397c91b8026b17f5f8a6ed98e23e9e.jpg",
    header: {
      heading: "Paul",
      subheading: "May 20, 2024",
      profileImage: "https://www.kino-teatr.ru/acter/album/52909/929591.jpg",
    },
  },
  {
    url: "https://i.pinimg.com/736x/f9/f2/95/f9f2951ce0bdcd54d0bf24e41aa2ea4f.jpg",
    header: {
      heading: "Mike",
      subheading: "May 21, 2024",
      profileImage:
        "https://www.telestar.fr/wp-content/uploads/telestarv2/2024/02/Under-the-dome-Mike-Vogel-J-aimerais-que-tout-s-arrange-entre-Barbie-et-Julia-Video.jpg",
    },
  },
  {
    url: "https://avatars.dzeninfra.ru/get-zen_doc/1852523/pub_602ceb4aae93e667d22817df_602ceb9a16b98878e1bf98b4/scale_1200",
    header: {
      heading: "Daniel",
      subheading: "May 21, 2024",
      profileImage:
        "https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/ebf9dcd7-66b4-41c2-816d-bf6f00500a0d/x178",
    },
  },
  {
    url: "https://i.pinimg.com/736x/18/49/90/18499075c298138ac6608732caca321f.jpg",
    header: {
      heading: "Matt",
      subheading: "May 21, 2024",
      profileImage:
        "https://rus.team/images/article/58829/avatar_16x9.webp?actual=1604332666",
    },
  },
  {
    url: "https://cdn.trinixy.ru/pics4/20100204/breathtaking_photographs_nature_02.jpg",
    header: {
      heading: "Brandon",
      subheading: "May 21, 2024",
      profileImage: "",
    },
  },
];

const mockArticle = {
  title: "25 date Ideas",
  image:
    "https://www.shutterstock.com/image-photo/happy-young-couple-sitting-on-600nw-1297272505.jpg",
  text: "",
};

const mockEvents = [
  {
    label: "cinema",
    name: "Master and Margarita",
    place: "Falcon Club Cinema Boutique",
    date_start: "2024-01-25",
    date_end: "2024-02-14",
    image:
      "https://avatars.mds.yandex.net/get-kinopoisk-image/10592371/56d4e2fb-f71c-419e-845e-d667e57f92ad/600x900",
  },
  {
    label: "concert",
    name: "SBPC",
    place: "Minsk-Arena",
    date_start: "2024-01-24",
    date_end: "",
    image:
      "https://sun9-79.userapi.com/impg/37iiZdJJ4YHAb-ATjB-YVTpMGEjTpGga_VbEkw/7YM9hnUpGPo.jpg?size=538x807&quality=95&sign=5509daf8e4e2b9b586c45384e2374549&c_uniq_tag=0AOMaaycYo_qgX9Ozz9b7HxozgXoFc3izr9QQ8x-ID8&type=album",
  },
];

const mockUserStory = null;

const DashboardPage = () => {
  const { t } = translate("translate", { keyPrefix: "dashboardPage" });
  const navigate = useNavigate();

  const [isOpenArticle, setIsOpenArticle] = useState(false);
  const [isOpenUserStory, setIsOpenUserStory] = useState(false);
  const [userSelectedPhoto, setUserSelectedPhoto] = useState<string | File>("");

  const handleArticle = (value: boolean) => {
    setIsOpenArticle(value);
  };

  const handleCloseUserStory = () => {
    setIsOpenUserStory(false);
    setUserSelectedPhoto("");
  };

  const handleOpenUserStory = () => {
    setIsOpenUserStory(true);
  };

  const handleAddUserPhoto = (file: File | null) => {
    file && setUserSelectedPhoto(file);
  };

  const handleNavigate = () => {
    navigate("/search/events");
  };

  useEffect(() => {
    if (isOpenUserStory) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
    // eslint-disable-next-line
  }, [isOpenUserStory]);

  const classContainer: string = classNames("", {
    overflowDashboardContainer: isOpenUserStory,
    dashboardPageContainer: !isOpenUserStory,
  });

  return (
    <Container className={classContainer}>
      <ArticleDashboardModal
        isOpen={isOpenArticle}
        title={mockArticle.title}
        image={mockArticle.image}
        text={mockArticle.text}
        cbHandleClose={handleArticle}
      />
      {isOpenUserStory && (
        <UserStory
          cbHandleCloseUserStory={handleCloseUserStory}
          userStory={mockUserStory}
          userSelectedPhoto={userSelectedPhoto}
        />
      )}
      <Box className="storiesContainer">
        <p className="titleStories">{t("stories")}</p>
        <UserStories
          stories={mockStories}
          cbHandleOpenUserStory={handleOpenUserStory}
          cbHandleAddUserPhoto={handleAddUserPhoto}
        />
      </Box>
      <ArticleDashboard
        title={mockArticle.title}
        image={mockArticle.image}
        cbHandleOpenArticle={handleArticle}
      />
      <Box className="eventsBox">
        <Box className="eventsTitle">
          <p>{t("events")}</p>
          <Button type="button" onClick={handleNavigate}>
            {t("viewAll")}
          </Button>
        </Box>
        {mockEvents.map((el, ind) => (
          <EventDashboard
            key={ind}
            label={t(el.label)}
            name={el.name}
            place={el.place}
            date_start={el.date_start}
            date_end={el.date_end}
            image={el.image}
          />
        ))}
      </Box>
      <TabMenu />
    </Container>
  );
};

export default DashboardPage;
