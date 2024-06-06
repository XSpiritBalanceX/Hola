import { useEffect, useState } from "react";
import {
  Container,
  Box,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import AdminMenu from "@components/adminMenu/AdminMenu";
import ControlsSupport from "./ControlsSupport";
import { translate } from "@i18n";
import ItemRequest from "@components/adminSupportRequest/ItemRequest";
import "./AdminSupportPage.scss";

const mockData = [
  {
    id: 125,
    status: "New",
    user_name: "Kira",
    user_age: 29,
    email: "Kira1997@gmail.com",
    issue: "Payment",
    date: "2024-02-06 11:30",
  },
  {
    id: 124,
    status: "New",
    user_name: "Nina",
    user_age: 25,
    email: "nin_nin@gmail.com",
    issue: "Subscription",
    date: "2024-02-06 11:30",
  },
  {
    id: 122,
    status: "In process",
    user_name: "Matt",
    user_age: 32,
    email: "matt@gmail.com",
    issue: "Payment",
    date: "2024-02-01 18:50",
  },
  {
    id: 120,
    status: "New",
    user_name: "Kristin",
    user_age: 19,
    email: "kristin@gmail.com",
    issue: "Payment",
    date: "2024-03-25 12:45",
  },
  {
    id: 123,
    status: "In process",
    user_name: "Olaf",
    user_age: 25,
    email: "olaf@gmail.com",
    issue: "Subscription",
    date: "2024-03-16 01:30",
  },
  {
    id: 119,
    status: "Closed",
    user_name: "Karen",
    user_age: 27,
    email: "karen@gmail.com",
    issue: "Privacy policy",
    date: "2024-01-16 15:23",
  },
  {
    id: 115,
    status: "In process",
    user_name: "Lily",
    user_age: 23,
    email: "lily@gmail.com",
    issue: "Payment",
    date: "2024-03-12 13:37",
  },
  {
    id: 116,
    status: "New",
    user_name: "Wolf",
    user_age: 29,
    email: "wolf@gmail.com",
    issue: "Privacy policy",
    date: "2024-02-03 16:48",
  },
  {
    id: 110,
    status: "New",
    user_name: "Alex",
    user_age: 32,
    email: "alex@gmail.com",
    issue: "Payment",
    date: "2024-01-25 16:34",
  },
  {
    id: 113,
    status: "Closed",
    user_name: "Paul",
    user_age: 40,
    email: "paul@gmail.com",
    issue: "Subscription",
    date: "2024-03-16 13:10",
  },
  {
    id: 114,
    status: "New",
    user_name: "Mila",
    user_age: 35,
    email: "mila@gmail.com",
    issue: "Privacy policy",
    date: "2024-03-19 10:46",
  },
  {
    id: 131,
    status: "In process",
    user_name: "Mary",
    user_age: 21,
    email: "mary@gmail.com",
    issue: "Payment",
    date: "2024-05-12 18:47",
  },
  {
    id: 132,
    status: "New",
    user_name: "Camilla",
    user_age: 26,
    email: "cam@gmail.com",
    issue: "Payment",
    date: "2024-05-20 11:25",
  },
  {
    id: 130,
    status: "New",
    user_name: "Cameron",
    user_age: 25,
    email: "cameron@gmail.com",
    issue: "Privacy policy",
    date: "2024-04-30 19:12",
  },
  {
    id: 100,
    status: "Closed",
    user_name: "Daniel",
    user_age: 30,
    email: "dan@gmail.com",
    issue: "Subscription",
    date: "2024-01-02 09:29",
  },
];

const AdminSupportPage = () => {
  const { t } = translate("translate", { keyPrefix: "adminSupportPage" });

  const [supportRequests, setSupportRequests] = useState(mockData);
  const [filterWord, setFilterWord] = useState("");
  const [filterType, setFilterType] = useState("all");

  useEffect(() => {
    const filterByType = mockData.filter((el) => {
      if (filterType === "all") {
        return true;
      } else if (
        filterType.toLocaleLowerCase() !== el.status.toLocaleLowerCase()
      ) {
        return false;
      }
      return true;
    });

    const filterByWord = filterByType.filter((el) => {
      if (
        filterWord &&
        !el.email.toLocaleLowerCase().includes(filterWord.toLocaleLowerCase())
      )
        return false;
      return true;
    });
    setSupportRequests(filterByWord);
    // eslint-disable-next-line
  }, [filterWord, filterType]);

  useEffect(() => {
    setFilterWord("");
    // eslint-disable-next-line
  }, [filterType]);

  const handleChangeFilterByWord = (word: string) => {
    setFilterWord(word);
  };

  const handleChangeFilterByType = (type: string) => {
    setFilterType(type);
  };

  const tableHead = [
    "№",
    t("status"),
    t("user"),
    "E-mail",
    t("issue"),
    t("date"),
    t("time"),
  ];

  return (
    <Container className="adminSupportContainer">
      <AdminMenu />
      <Box className="adminSupportContent">
        <ControlsSupport
          filterWord={filterWord}
          cbHandleFilterWord={handleChangeFilterByWord}
          supportType={filterType}
          cbHandleFilterType={handleChangeFilterByType}
          allRequest={mockData}
        />
        <Table className="tableSupportRequests">
          <TableHead className="tableHeadSupportRequests">
            <TableRow>
              {tableHead.map((el, ind) => (
                <TableCell key={ind}>{el}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {supportRequests.length ? (
              supportRequests
                .sort((a, b) => b.id - a.id)
                .map((el) => (
                  <ItemRequest
                    key={el.id}
                    id={el.id}
                    user_name={el.user_name}
                    age={el.user_age}
                    status={el.status}
                    email={el.email}
                    date={el.date}
                    issue={el.issue}
                  />
                ))
            ) : (
              <TableRow className="emptyRequests">
                <TableCell colSpan={tableHead.length}>
                  <p>{t("emptyRequests")}</p>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Box>
    </Container>
  );
};

export default AdminSupportPage;
