import { Box } from "@mui/material";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { translate } from "@i18n";
import { useNavigate } from "react-router-dom";
import "./SearchPage.scss";

const SearchPageLinks = () => {
  const { t } = translate("translate", { keyPrefix: "searchPage" });
  const navigate = useNavigate();

  const searchLinks = [
    { title: "communication", path: "/search/communication" },
    { title: "romanticDate", path: "/search/romantic_date" },
    { title: "nightStand", path: "/search/one_night" },
    { title: "relationships", path: "/search/relationships" },
    { title: "upcomingEvents", path: "/search/events" },
  ];

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <Box>
      {searchLinks.map((el, ind) => (
        <Box
          key={ind}
          onClick={() => handleNavigate(el.path)}
          className="searchLinkBox"
        >
          <p>{t(el.title)}</p>
          <ArrowForwardIosRoundedIcon />
        </Box>
      ))}
    </Box>
  );
};

export default SearchPageLinks;
