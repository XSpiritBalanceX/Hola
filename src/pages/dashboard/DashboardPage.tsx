import { Container, Box } from "@mui/material";
import TabMenu from "@components/tabMenu/TabMenu";
import { translate } from "@i18n";
import UserStories from "@components/userStories/UserStories";
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

const DashboardPage = () => {
  const { t } = translate("translate", { keyPrefix: "dashboardPage" });
  return (
    <Container className="dashboardPageContainer">
      <Box className="storiesContainer">
        <p className="titleStories">{t("stories")}</p>
        <UserStories stories={mockStories} />
      </Box>
      <TabMenu />
    </Container>
  );
};

export default DashboardPage;
