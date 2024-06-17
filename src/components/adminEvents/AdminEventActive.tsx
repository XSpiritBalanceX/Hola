import { Box, Button } from "@mui/material";
import { listOfEventCategory } from "@utils/listOfEventCategory";
import { translate } from "@i18n";
import moment from "moment";
import { IAdminEventActiveProps } from "./TypesAdminEvents";
import EditIcon from "@components/icons/EditIcon";
import BucketIcon from "@components/icons/BucketIcon";
import "./AdminEvents.scss";

const mockData: any[] = [
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
];

const AdminEventActive = ({ cbHandleEditEvent }: IAdminEventActiveProps) => {
  const { t } = translate("translate", { keyPrefix: "adminEventsPage" });

  const handleChooseEvent = (id: number) => {
    const currentEvent = mockData.find((el) => el.id === id);
    cbHandleEditEvent(currentEvent);
  };

  return (
    <>
      {mockData.length ? (
        mockData.map((el) => {
          const labelCategory = listOfEventCategory.find(
            (item) => item.id === el.category
          )?.label;
          return (
            <Box key={el.id} className="itemEventBox">
              {el.photo ? (
                <img src={el.photo} alt="event" className="eventPhoto" />
              ) : (
                <Box className="emptyEventPhoto" />
              )}
              <Box className="itemEventInformation">
                <Box className="eventCategoryName">
                  <Box className="controlsEventBox">
                    <p>{t(labelCategory as string)}</p>
                    <Button onClick={() => handleChooseEvent(el.id)}>
                      <EditIcon fill="#554CB6" />
                    </Button>
                    <Button>
                      <BucketIcon fill="#B50000" />
                    </Button>
                  </Box>
                  <p className="eventName">{el.name}</p>
                </Box>
                <Box className="itemEventPlaceDate">
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
        })
      ) : (
        <Box className="emptyActiveEvents">{t("emptyEvents")}</Box>
      )}
    </>
  );
};

export default AdminEventActive;
