import { useState, useEffect } from "react";
import { Box, Button, Pagination } from "@mui/material";
import { translate } from "@i18n";
import moment from "moment";
import { useParams, useNavigate } from "react-router-dom";
import { listOfEventCategory } from "@utils/listOfEventCategory";
import "./AdminEvents.scss";

const mockData = [
  {
    id: 1,
    photo:
      "https://avatars.mds.yandex.net/get-kinopoisk-image/10592371/56d4e2fb-f71c-419e-845e-d667e57f92ad/600x900",
    category: 1,
    name: "Мастер и маргарита",
    date_start: "2024-01-25",
    date_end: "2024-02-14",
    place: "Falcon Club Cinema Boutique",
  },
  {
    id: 2,
    photo: "",
    category: 2,
    name: "Лебединое озеро",
    date_start: "2024-01-25",
    date_end: "2024-02-14",
    place: "Большой театр Республики Беларусь",
  },
  {
    id: 3,
    photo:
      "https://sun9-79.userapi.com/impg/37iiZdJJ4YHAb-ATjB-YVTpMGEjTpGga_VbEkw/7YM9hnUpGPo.jpg?size=538x807&quality=95&sign=5509daf8e4e2b9b586c45384e2374549&c_uniq_tag=0AOMaaycYo_qgX9Ozz9b7HxozgXoFc3izr9QQ8x-ID8&type=album",
    category: 3,
    name: "СБПЧ",
    date_start: "2024-01-25",
    date_end: "",
    place: "Минск-Арена",
  },
  {
    id: 4,
    photo: "https://images.newsru.co.il/l/200/95/2009599.jpg?cb=1643537358",
    category: 3,
    name: "Сергей Орлов",
    date_start: "2024-01-25",
    date_end: "",
    place: "Concert Hall Minsk",
  },
  {
    id: 5,
    photo: "https://images.newsru.co.il/l/200/95/2009599.jpg?cb=1643537358",
    category: 3,
    name: "Сергей Орлов",
    date_start: "2024-01-25",
    date_end: "",
    place: "Concert Hall Minsk",
  },
  {
    id: 6,
    photo: "https://images.newsru.co.il/l/200/95/2009599.jpg?cb=1643537358",
    category: 3,
    name: "Сергей Орлов",
    date_start: "2024-01-25",
    date_end: "",
    place: "Concert Hall Minsk",
  },
  {
    id: 7,
    photo: "https://images.newsru.co.il/l/200/95/2009599.jpg?cb=1643537358",
    category: 3,
    name: "Сергей Орлов",
    date_start: "2024-01-25",
    date_end: "",
    place: "Concert Hall Minsk",
  },
  {
    id: 8,
    photo: "https://images.newsru.co.il/l/200/95/2009599.jpg?cb=1643537358",
    category: 3,
    name: "Сергей Орлов",
    date_start: "2024-01-25",
    date_end: "",
    place: "Concert Hall Minsk",
  },
];

const AdminEventsArchive = () => {
  const { t } = translate("translate", { keyPrefix: "adminEventsPage" });

  const { part } = useParams();
  const navigate = useNavigate();

  const [limit] = useState(5);
  const [events, setEvents] = useState(mockData.slice(0, limit));
  const [activePage, setActivePage] = useState(1);
  const startIndex = (activePage - 1) * limit;
  const endIndex = startIndex + limit;
  const totalItems = mockData.length;
  const totalPages = Math.ceil(totalItems / limit);

  useEffect(() => {
    const page = parseInt((part as string).replace("archive_", ""));
    setActivePage(page);
    // eslint-disable-next-line
  }, [part]);

  useEffect(() => {
    const newData = mockData.slice(startIndex, endIndex);
    setEvents(newData);
    // eslint-disable-next-line
  }, [startIndex, endIndex]);

  const handleNavigate = (_: React.ChangeEvent<unknown>, page: number) => {
    navigate(`/admin/events/archive_${page}`);
  };

  const handleChooseEvent = (id: number) => {
    console.log(id);
  };

  return (
    <Box className="archiveEventsBox">
      {events.map((el) => {
        const labelCategory = listOfEventCategory.find(
          (item) => item.id === el.category
        )?.label;
        return (
          <Box key={el.id} className="itemArchiveEventBox">
            {el.photo ? (
              <img src={el.photo} alt="event" className="eventPhotoArchive" />
            ) : (
              <Box className="emptyEventPhotoArchive" />
            )}
            <Box className="itemArchiveEventInformation">
              <Box className="eventArchiveCategoryName">
                <Box className="controlsEventArchiveBox">
                  <p>{t(labelCategory as string)}</p>
                  <Button
                    onClick={() => handleChooseEvent(el.id)}
                    className="publishEventButton"
                  >
                    {t("publish")}
                  </Button>
                </Box>
                <p className="eventName">{el.name}</p>
              </Box>
              <Box className="itemArchiveEventPlaceDate">
                <p>{el.place}</p>
                <p>
                  {el.date_end
                    ? `${moment(el.date_start).format("DD MMMM")} - ${moment(
                        el.date_end
                      ).format("DD MMMM")}`
                    : `${moment(el.date_start).format("DD MMMM")}`}
                </p>
              </Box>
            </Box>
          </Box>
        );
      })}
      <Pagination
        count={totalPages}
        shape="rounded"
        onChange={handleNavigate}
        className="archivePaginationEvents"
      />
    </Box>
  );
};

export default AdminEventsArchive;
