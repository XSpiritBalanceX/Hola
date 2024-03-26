import { useState } from "react";
import { Modal, Box, Button, TextField, List, ListItem } from "@mui/material";
import { translate } from "@i18n";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import "./Modals.scss";

interface ICountryModalProps {
  isOpen: boolean;
  cbCloseModal: () => void;
}

const words = [
  "Apple",
  "Banana",
  "Cherry",
  "Grape",
  "Lemon",
  "Mango",
  "Orange",
  "Peach",
  "Strawberry",
  "Watermelon",
  "Bon",
];

const CountryModal = ({ isOpen, cbCloseModal }: ICountryModalProps) => {
  const { t } = translate("translate", { keyPrefix: "modals.location" });

  const [country, setCountry] = useState("");

  const filteredWords = words.filter((word) =>
    word.toLowerCase().includes(country.toLowerCase())
  );

  // Функция для группировки элементов списка по первым буквам
  const groupWordsByFirstLetter = () => {
    const groupedWords: { [letter: string]: string[] } = {};

    filteredWords.forEach((word) => {
      const firstLetter: string = word.charAt(0).toUpperCase();

      if (groupedWords[firstLetter]) {
        groupedWords[firstLetter].push(word);
      } else {
        groupedWords[firstLetter] = [word];
      }
    });

    return groupedWords;
  };

  // Получение списка сгруппированных элементов
  const groupedWords: { [letter: string]: string[] } =
    groupWordsByFirstLetter();

  // Обработчик изменения значения в поле поиска
  const handleSearchChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setCountry(event.target.value);
  };

  const handleChooseCountry = (word: string) => {
    setCountry(word);
  };

  const handleCloseModal = () => {
    cbCloseModal();
  };

  return (
    <Modal open={isOpen} className="modalContainerCountries">
      <Box className="contentCountriesModal">
        <Box className="closeModalButton">
          <p className="titleModal">{t("chooseLocation")}</p>
          <Button type="button" onClick={handleCloseModal}>
            <CloseIcon />
          </Button>
        </Box>
        <Box className="boxWithSearch">
          <TextField
            value={country}
            onChange={handleSearchChange}
            placeholder={t("search")}
            InputProps={{ startAdornment: <SearchIcon /> }}
            className="searchField"
          />
          <Button type="button" className="saveCountryButton">
            {t("save")}
          </Button>
        </Box>
        <List className="listCountries">
          {Object.entries(groupedWords).map(([letter, words]) => (
            <Box key={letter}>
              <ListItem className="letterItem">
                <p>{letter}</p>
              </ListItem>
              {words.map((el) => (
                <ListItem
                  key={el}
                  className="wordItem"
                  onClick={() => handleChooseCountry(el)}
                >
                  <p>{el}</p>
                </ListItem>
              ))}
            </Box>
          ))}
        </List>
      </Box>
    </Modal>
  );
};

export default CountryModal;
