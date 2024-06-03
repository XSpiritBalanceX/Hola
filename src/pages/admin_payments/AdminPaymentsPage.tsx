import { useEffect, useState } from "react";
import { Box, Container } from "@mui/material";
import { useParams } from "react-router-dom";
import AdminMenu from "@components/adminMenu/AdminMenu";
import ControlsPayments from "./ControlsPayments";
import "./AdminPaymentsPage.scss";

const mockData = [
  {
    name: "Kira",
    age: 29,
    email: "Kira1997@gmail.com",
    start_date: "2023-10-25",
    last_payment: "2024-01-25",
    end_date: "2024-02-25",
    card: "Visa **** **45",
    type: "paid",
  },
  {
    name: "Mary",
    age: 34,
    email: "maria_petrova88@gmail.com",
    start_date: "2022-09-27",
    last_payment: "2024-01-27",
    end_date: "2024-02-27",
    card: "MasterCard **** **45",
    type: "paid",
  },
  {
    name: "Paul",
    age: 27,
    email: "paulmayer1997@gmail.com",
    start_date: "2023-12-09",
    last_payment: "2024-01-09",
    end_date: "2024-02-09",
    card: "Visa **** **56",
    type: "expected",
  },
  {
    name: "Mike",
    age: 21,
    email: "mikemike2003@gmail.com",
    start_date: "2022-12-12",
    last_payment: "2023-12-12",
    end_date: "2024-01-12",
    card: "Visa **** **56",
    type: "suspended",
  },
  {
    name: "Alice",
    age: 28,
    email: "aliceee@gmail.com",
    start_date: "2022-03-01",
    last_payment: "2023-12-01",
    end_date: "2024-01-01",
    card: "MasterCard **** **45",
    type: "suspended",
  },
  {
    name: "Mary",
    age: 23,
    email: "marianna1999@gmail.com",
    start_date: "2023-09-12",
    last_payment: "2024-01-12",
    end_date: "2024-02-12",
    card: "Visa **** **47",
    type: "paid",
  },
  {
    name: "Kevin",
    age: 30,
    email: "kevin0001@gmail.com",
    start_date: "2023-04-04",
    last_payment: "2023-12-04",
    end_date: "2024-01-04",
    card: "Visa **** **78",
    type: "suspended",
  },
  {
    name: "Karen",
    age: 46,
    email: "karen__1978@gmail.com",
    start_date: "2022-08-16",
    last_payment: "2023-12-16",
    end_date: "2024-02-16",
    card: "Visa **** **67",
    type: "expected",
  },
  {
    name: "Kate",
    age: 18,
    email: "Katekate@gmail.com",
    start_date: "2023-09-12",
    last_payment: "2024-01-12",
    end_date: "2024-02-12",
    card: "Visa **** **47",
    type: "expected",
  },
  {
    name: "Tony",
    age: 42,
    email: "antony@gmail.com",
    start_date: "2022-11-05",
    last_payment: "2023-12-05",
    end_date: "2024-01-05",
    card: "MasterCard **** **56",
    type: "suspended",
  },
  {
    name: "Kristofer",
    age: 31,
    email: "kristofer@gmail.com",
    start_date: "2023-09-12",
    last_payment: "2023-09-12",
    end_date: "2024-02-12",
    card: "MasterCard **** **45",
    type: "paid",
  },
];

const AdminPaymentsPage = () => {
  const [filterWord, setFilterWord] = useState("");
  const [payments, setPayments] = useState(mockData);

  const { paymentType } = useParams();

  const handleFilter = (word: string) => {
    setFilterWord(word);
  };

  useEffect(() => {
    const filterByType = mockData.filter((el) => {
      if (paymentType === "all") {
        return true;
      } else if (paymentType !== el.type) {
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
    setPayments(filterByWord);
    // eslint-disable-next-line
  }, [paymentType, filterWord]);

  useEffect(() => {
    setFilterWord("");
    // eslint-disable-next-line
  }, [paymentType]);

  return (
    <Container className="adminPaymentsContainer">
      <AdminMenu />
      <Box className="adminPaymentsContent">
        <ControlsPayments
          filterWord={filterWord}
          cbHandleFilterWord={handleFilter}
          paymentType={paymentType as string}
        />
      </Box>
    </Container>
  );
};

export default AdminPaymentsPage;
