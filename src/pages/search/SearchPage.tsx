import { Container } from "@mui/material";
import { translate } from "@i18n";
import SearchPageLinks from "./SearchPageLinks";
import { useParams } from "react-router-dom";
import TabMenu from "@components/tabMenu/TabMenu";
import UpcomingEvents from "@components/upcomingEvents/UpcomingEvents";
import "./SearchPage.scss";

const SearchPage = () => {
  const { t } = translate("translate", { keyPrefix: "searchPage" });

  const { category } = useParams();

  return (
    <Container className="searchPageContainer">
      {!category && (
        <>
          <p className="mainTitle">{t("chooseCategory")}</p>
          <p className="title">{t("title")}</p>
          <SearchPageLinks />
        </>
      )}
      {category === "events" && <UpcomingEvents />}
      <TabMenu />
    </Container>
  );
};

export default SearchPage;
