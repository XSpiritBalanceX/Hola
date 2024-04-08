import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import UserSearchCard from "./UserSearchCard";
import "./UserSearchCard.scss";

interface IUsers {
  id: number;
  name: string;
  age: number;
  image: string[];
  interests: { id: number; name: string }[];
}

const mockData = [
  {
    id: 1,
    name: "Alex",
    age: 25,
    image: [
      "https://media.istockphoto.com/id/1200677760/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BF%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82-%D0%BA%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D0%BE%D0%B3%D0%BE-%D1%83%D0%BB%D1%8B%D0%B1%D0%B0%D1%8E%D1%89%D0%B5%D0%B3%D0%BE%D1%81%D1%8F-%D0%BC%D0%BE%D0%BB%D0%BE%D0%B4%D0%BE%D0%B3%D0%BE-%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA%D0%B0-%D1%81%D0%BE-%D1%81%D0%BA%D1%80%D0%B5%D1%89%D0%B5%D0%BD%D0%BD%D1%8B%D0%BC%D0%B8-%D1%80%D1%83%D0%BA%D0%B0%D0%BC%D0%B8.jpg?s=612x612&w=0&k=20&c=XAmUDQcCbmorrYBQOVADBgkzUX66S7-HSRyEzjwpxZI=",
      "https://st3.depositphotos.com/33359910/37659/i/450/depositphotos_376597274-stock-photo-handsome-smiling-young-man-isolated.jpg",
      "https://st4.depositphotos.com/1049680/25495/i/450/depositphotos_254959168-stock-photo-young-handsome-man-isolated-background.jpg",
    ],
    interests: [
      { id: 1, name: "" },
      { id: 7, name: "" },
      { id: 10, name: "" },
      { id: 11, name: "" },
    ],
  },
  {
    id: 2,
    name: "Liam",
    age: 28,
    image: [
      "https://www.movenoticias.com/wp-content/uploads/2013/11/Liam_Hemsworth_2.jpg",
      "https://br.web.img3.acsta.net/pictures/19/03/08/22/08/0890523.jpg",
    ],
    interests: [
      { id: 2, name: "" },
      { id: 5, name: "" },
      { id: 8, name: "" },
      { id: 9, name: "" },
    ],
  },
  {
    id: 3,
    name: "William",
    age: 23,
    image: [
      "https://i.pinimg.com/736x/90/cc/da/90ccdacdc06bd6778beca4e61cfcd047.jpg",
      "https://www.film.ru/sites/default/files/people/3563858-905622.jpg",
      "https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/1f8c44b3-07ff-45d2-8221-80f51fc8c3d3/220x330",
    ],
    interests: [
      { id: 3, name: "" },
      { id: 5, name: "" },
      { id: 6, name: "" },
      { id: 15, name: "" },
    ],
  },
  {
    id: 4,
    name: "Michael",
    age: 35,
    image: [
      "https://www.film.ru/sites/default/files/people/michael-fassbender.jpg",
      "https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/b306be7b-ef3b-4813-8a1e-c009213d3e42/220x330",
      "https://www.proficinema.com/upload/iblock/ed0/ed003cc1d4ee657ee1bd978f75a159fb.jpg",
      "https://images.thevoicemag.ru/upload/img_cache/9fa/9fa9c591794ea75caabe0539577989a2_cropped_308x411.jpg",
    ],
    interests: [
      { id: 1, name: "" },
      { id: 11, name: "" },
      { id: 15, name: "" },
    ],
  },
  {
    id: 5,
    name: "Jacob",
    age: 19,
    image: [
      "https://www.film.ru/sites/default/files/people/34216510-1099516.jpg",
      "https://static.kinoafisha.info/k/persons/1080x1920/upload/persons/307465981235.jpg",
      "https://www.kino-teatr.ru/acter/photo/6/0/496606/964803.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8feqN8K4SfRX0qPpnm1qnz_zFXamaDHbHyUqqXUSOzAzyKjEEH9OxyAZSg_YPwObhuGE&usqp=CAU",
      "https://uznayvse.ru/images/catalog/2022/2/jacob-elordi_97.jpg",
    ],
    interests: [
      { id: 5, name: "" },
      { id: 8, name: "" },
      { id: 10, name: "" },
      { id: 12, name: "" },
      { id: 13, name: "" },
    ],
  },
];

const UserSearchCardContainer = () => {
  const [users, setUsers] = useState<IUsers[]>([]);

  useEffect(() => {
    setUsers(mockData);
    // eslint-disable-next-line
  }, []);

  const handleRemoveUser = (id: number) => {
    const filteredData = [...users].filter((el) => el.id !== id);
    setUsers(filteredData);
  };

  return (
    <Box className="cardsBox">
      {users.map((el, ind) => (
        <UserSearchCard
          key={ind}
          id={el.id}
          name={el.name}
          age={el.age}
          image={el.image}
          interests={el.interests}
          cbHandleRemoveUser={handleRemoveUser}
        />
      ))}
    </Box>
  );
};

export default UserSearchCardContainer;
