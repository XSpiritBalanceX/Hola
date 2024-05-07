import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import UserSearchCard from "./UserSearchCard";
import NoFoundPeople from "./NoFoundPeople";
import MatchModal from "@components/modal/MatchModal";
import { useGetProfileInformationQuery } from "@store/requestApi/profileInformationApi";
import Loader from "@components/loader/Loader";
import CustomError from "@components/error/CustomError";
import {
  useGetUsersQuery,
  IItemUserInList,
} from "@store/requestApi/searchingApi";
import { useParams } from "react-router-dom";
import "./UserSearchCard.scss";

const categoryIDList = [
  { id: "1", params: "communication" },
  { id: "2", params: "romantic_date" },
  { id: "3", params: "one_night" },
  { id: "4", params: "relationships" },
];

const UserSearchCardContainer = () => {
  const [users, setUsers] = useState<IItemUserInList[]>([]);
  const [isOpenMatchModal, setIsOpenMatchModal] = useState(false);
  const [idPartner, setIdPartner] = useState<null | number>(null);
  const [photoPartner, setPhotoPartner] = useState("");

  const { category } = useParams();

  const categoryID = categoryIDList.find((el) => el.params === category)?.id;

  const {
    data: listOfUsers,
    isError: errorUsers,
    isLoading: loadingUsers,
  } = useGetUsersQuery(categoryID || "");

  const userID = localStorage.getItem("hola_user_id");

  const { data, isError, isLoading } = useGetProfileInformationQuery(
    userID as string
  );

  useEffect(() => {
    if (listOfUsers) {
      setUsers([...listOfUsers]);
    }
    // eslint-disable-next-line
  }, [loadingUsers, listOfUsers]);

  const handleRemoveUser = (id: number) => {
    const filteredData = [...users].filter((el) => el.id !== id);
    setUsers(filteredData);
  };

  const handleCloseMathModal = () => {
    setIsOpenMatchModal(false);
  };

  const handleOpenMatchModal = (id: number, photo: string) => {
    setIsOpenMatchModal(true);
    setIdPartner(id);
    setPhotoPartner(photo);
  };

  return (
    <>
      <Loader isLoading={isLoading || loadingUsers} />
      <MatchModal
        isOpen={isOpenMatchModal}
        cbCloseModal={handleCloseMathModal}
        id_partner={idPartner}
        user_photo={data?.avatar}
        partner_photo={photoPartner}
      />
      {(isError || errorUsers) && <CustomError />}
      {users.length && !isError ? (
        <Box className="cardsBox">
          {users
            .sort((a, b) => b.id - a.id)
            .map((el, ind) => {
              return (
                <UserSearchCard
                  key={ind}
                  id={el.id}
                  name={el.name}
                  age={el.age}
                  images={el.images}
                  interests={el.interests}
                  description={el.description}
                  cbHandleRemoveUser={handleRemoveUser}
                  cbHandleOpenMatchModal={handleOpenMatchModal}
                />
              );
            })}
        </Box>
      ) : null}
      {!users.length && !isError && <NoFoundPeople />}
    </>
  );
};

export default UserSearchCardContainer;
