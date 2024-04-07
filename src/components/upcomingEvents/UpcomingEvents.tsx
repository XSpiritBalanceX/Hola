import { Box } from "@mui/material";
import { translate } from "@i18n";
import NavigationButton from "@components/buttons/NavigationButton";
import moment from "moment";
import "./UpcomingEvents.scss";

const mockData = [
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
    label: "theatre",
    name: "Swan Lane",
    place: "The Big Theatre of Belarus",
    date_start: "2024-01-20",
    date_end: "2024-02-10",
    image:
      "https://www.kvitki.by/imageGenerator/eventDetails/14df67ad059ca8338ef9358002ddd3e9",
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
  {
    label: "standUp",
    name: "Sergey Orlov",
    place: "Concert Hall Minsk",
    date_start: "2024-03-29",
    date_end: "",
    image: "https://images.newsru.co.il/l/200/95/2009599.jpg?cb=1643537358",
  },
];

const UpcomingEvents = () => {
  const { t } = translate("translate", { keyPrefix: "searchPage" });

  return (
    <Box className="eventsBox">
      <NavigationButton label={t("upcomingEvents")} path="/search" />
      {mockData.map((el, ind) => (
        <Box key={ind} className="eventContentBox">
          <Box className="textEventBox">
            <p className="genre">{t(el.label)}</p>
            <Box>
              <p className="eventName">{el.name}</p>
              <p className="eventPlace">{el.place}</p>
              {el.date_end ? (
                <p className="eventDate">{`${moment(
                  el.date_start,
                  "YYYY-MM-DD"
                ).format("MMM DD")} - ${moment(
                  el.date_end,
                  "YYYY-MM-DD"
                ).format("MMM DD")}`}</p>
              ) : (
                <p className="eventDate">
                  {moment(el.date_start, "YYYY-MM-DD").format("MMMM DD")}
                </p>
              )}
            </Box>
          </Box>
          <Box
            className="eventImageBox"
            style={{ backgroundImage: `url(${el.image})` }}
          />
        </Box>
      ))}
    </Box>
  );
};

export default UpcomingEvents;
