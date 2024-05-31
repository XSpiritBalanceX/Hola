import { useEffect, useState } from "react";
import {
  Box,
  Container,
  InputAdornment,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import AdminMenu from "@components/adminMenu/AdminMenu";
import { translate } from "@i18n";
import SearchIcon from "@mui/icons-material/Search";
import ControlsListOfUsers from "./ControlsListOfUsers";
import UserItem from "@components/adminUsers/UserItem";
import SelectedUser from "@components/adminUsers/SelectedUser";
import { useParams, useNavigate } from "react-router-dom";
import "./AdminUsersPage.scss";

const mockUserData = [
  {
    id: 1,
    user_status: "Active",
    name: "Matt",
    age: 30,
    email: "mat@gmail.com",
    acc_type: "free",
    avatar:
      "https://rus.team/images/article/58829/avatar_16x9.webp?actual=1604332666",
    photos: [
      "https://cs7.pikabu.ru/post_img/2019/03/08/4/155202203315797795.jpg",
      "https://cs11.pikabu.ru/post_img/2019/03/08/4/1552022048124068578.jpg",
      "https://cs12.pikabu.ru/post_img/2019/03/08/4/155202205315675560.jpg",
      "https://cs10.pikabu.ru/post_img/2019/03/08/4/155202205619071405.jpg",
      "https://cs10.pikabu.ru/post_img/2019/03/08/4/1552022059145322189.jpg",
      "https://cs11.pikabu.ru/post_img/2019/03/08/4/1552022062165987889.jpg",
    ],
    description:
      "Aliquam scelerisque turpis ut felis semper egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer eget fringilla nibh, vel.",
    subscription: {
      start_date: "2023-10-25",
      end_date: "2024-02-25",
      last_payment: "2024-01-25",
      card: "Visa **** **45",
    },
    matches: [
      {
        id: 12,
        name: "Margo",
        age: 31,
        email: "margo_r@gmail.com",
        photo:
          "https://gallery.alexandersakulin.com/storage/app/media/gallery/_Portrait/2021-TinaL/23-nov_21-TinaL_0369-r-1800_60p.jpg",
        messages: [],
      },
      {
        id: 11,
        name: "Karen",
        age: 25,
        email: "kar@gmail.com",
        photo:
          "https://gallery.alexandersakulin.com/storage/app/uploads/public/92b/af0/985/thumb__0_800_0_0_auto.jpg",
        messages: [
          { id: 11, message: "Hi", time: "18:20" },
          { id: 1, message: "Hello", time: "19:40" },
        ],
      },
      {
        id: 35,
        name: "Laura",
        age: 26,
        email: "Laura@gmail.com",
        photo:
          "https://gallery.alexandersakulin.com/storage/app/uploads/public/903/935/bee/thumb__0_800_0_0_auto.jpg",
        messages: [
          { id: 35, message: "Hi", time: "18:20" },
          { id: 1, message: "Hello", time: "19:40" },
        ],
      },
    ],
  },
  {
    id: 2,
    user_status: "Active",
    name: "Kira",
    age: 29,
    email: "Kira1997@gmail.com",
    acc_type: "free",
    avatar:
      "https://gallery.alexandersakulin.com/storage/app/media/gallery/_Portrait/2021-Vika-EW/09-jun_21-EW-108783-v2_3-1800-60p.jpg",
    photos: [
      "https://gallery.alexandersakulin.com/storage/app/uploads/public/3e5/133/33f/thumb__0_800_0_0_auto.jpg",
      "https://gallery.alexandersakulin.com/storage/app/uploads/public/f73/f81/3c5/thumb__0_800_0_0_auto.jpg",
      "https://gallery.alexandersakulin.com/storage/app/uploads/public/71c/f17/d46/thumb__0_800_0_0_auto.jpg",
    ],
    description:
      "Suspendisse dictum dignissim commodo. Nullam commodo arcu non mauris maximus euismod. Nullam sit amet dui elit. Donec ultrices, massa in sagittis tincidunt, mauris sem gravida.",
    subscription: {
      start_date: "2023-10-25",
      end_date: "2024-02-25",
      last_payment: "2024-01-25",
      card: "Visa **** **45",
    },
    matches: [
      {
        id: 8,
        name: "Paul",
        age: 27,
        email: "PauloNovak@gmail.com",
        photo:
          "https://rus.team/images/article/58829/avatar_16x9.webp?actual=1604332666",
        messages: [
          { id: 8, message: "Hi", time: "18:20" },
          { id: 2, message: "Hello", time: "19:40" },
        ],
      },
      {
        id: 5,
        name: "Daniel",
        age: 25,
        email: "Dan_dan@gmail.com",
        photo:
          "https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/ebf9dcd7-66b4-41c2-816d-bf6f00500a0d/x178",
        messages: [
          { id: 5, message: "Hi", time: "18:20" },
          { id: 2, message: "Hello", time: "19:40" },
        ],
      },
      {
        id: 13,
        name: "Mike",
        age: 23,
        email: "xMikex@gmail.com",
        photo: "https://www.kino-teatr.ru/acter/album/52909/929591.jpg",
        messages: [
          { id: 13, message: "Hi", time: "18:20" },
          { id: 2, message: "Hello", time: "19:40" },
        ],
      },
    ],
  },
  {
    id: 3,
    user_status: "Active",
    name: "Mike",
    age: 23,
    email: "xMikex@gmail.com",
    acc_type: "free",
    avatar: "https://www.kino-teatr.ru/acter/album/52909/929591.jpg",
    photos: [
      "https://cs7.pikabu.ru/post_img/2019/03/08/4/15520220501617672.jpg",
      "https://cs10.pikabu.ru/post_img/2019/03/08/4/1552022014180148622.jpg",
      "https://cs9.pikabu.ru/post_img/2019/03/08/4/1552022017184954283.jpg",
      "https://cs11.pikabu.ru/post_img/2019/03/08/4/155202202514068024.jpg",
    ],
    description:
      "In diam velit, interdum fringilla enim ut, hendrerit egestas odio. In hac habitasse platea dictumst. Nulla quis erat et lectus fringilla rhoncus a nec erat.",
    subscription: {
      start_date: "2023-10-25",
      end_date: "2024-02-25",
      last_payment: "2024-01-25",
      card: "Visa **** **45",
    },
    matches: [
      {
        id: 22,
        name: "Nina",
        age: 20,
        email: "nin_nin@gmail.com",
        photo:
          "https://gallery.alexandersakulin.com/storage/app/uploads/public/213/e22/f6a/thumb__0_800_0_0_auto.jpg",
        messages: [
          { id: 22, message: "Hi", time: "18:20" },
          { id: 3, message: "Hello", time: "19:40" },
        ],
      },
      {
        id: 16,
        name: "Ursula",
        age: 28,
        email: "ursula@gmail.com",
        photo:
          "https://gallery.alexandersakulin.com/storage/app/media/gallery/_Portrait/2021-IrinaM/21-dec_21-IrinaM-138003-r-1800_60p.jpg",
        messages: [
          { id: 16, message: "Hi", time: "18:20" },
          { id: 3, message: "Hello", time: "19:40" },
        ],
      },
    ],
  },
];

const AdminUsersPage = () => {
  const { t } = translate("translate", { keyPrefix: "adminUsersPage" });
  const { userID } = useParams();
  const navigate = useNavigate();

  const [users, setUsers] = useState(mockUserData);
  const [filteredWord, setFilteredWord] = useState("");
  const [selectedUser, setSelectedUser] = useState<null | number>(null);
  const [selectedFilter, setSelectedFilter] = useState("all");

  useEffect(() => {
    if (filteredWord === "") {
      setUsers(mockUserData);
    } else {
      const filteredData = mockUserData.filter(
        (el) =>
          el.name.toLowerCase().includes(filteredWord.toLowerCase()) ||
          el.email.toLowerCase().includes(filteredWord.toLowerCase())
      );
      setUsers(filteredData);
    }
    // eslint-disable-next-line
  }, [filteredWord]);

  useEffect(() => {
    userID && setSelectedUser(Number(userID));
    !userID && setSelectedUser(null);
    // eslint-disable-next-line
  }, [userID]);

  const handleChangeFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilteredWord(e.currentTarget.value);
  };

  const handleSelectedUser = (id: number | null) => {
    id && navigate(`/admin/user/${id}`);
    !id && navigate(`/admin/users`);
  };

  const tableHead = [t("user"), "E-mail", t("accType")];

  const foundUser = users.find((el) => el.id === selectedUser);

  return (
    <Container className="userPageContainer">
      <AdminMenu />
      <Box className="usersContentContainer">
        <Box className="searchUsersBox">
          <p>{t("users")}</p>
          {!selectedUser && (
            <TextField
              placeholder={t("search")}
              value={filteredWord}
              onChange={handleChangeFilter}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              className="searchField"
            />
          )}
        </Box>
        {!selectedUser && (
          <ControlsListOfUsers
            selectedFilter={selectedFilter}
            cbHandleFilter={setSelectedFilter}
          />
        )}
        {!selectedUser && (
          <Table className="tableAdminUsers">
            <TableHead className="tableUsersHead">
              <TableRow>
                {tableHead.map((el, ind) => (
                  <TableCell key={ind}>{el}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {users.length !== 0 ? (
                users.map((el) => (
                  <UserItem
                    key={el.id}
                    id={el.id}
                    name={el.name}
                    age={el.age}
                    email={el.email}
                    photo={el.avatar}
                    acc_type={el.acc_type}
                    cbHandleSelectedUser={handleSelectedUser}
                  />
                ))
              ) : (
                <TableRow className="emptyRowUsers">
                  <TableCell colSpan={tableHead.length}>
                    <p>{t("emptyUsers")}</p>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        )}
        {selectedUser && foundUser && (
          <SelectedUser
            information={foundUser}
            cbHandleCloseUser={handleSelectedUser}
          />
        )}
      </Box>
    </Container>
  );
};

export default AdminUsersPage;
