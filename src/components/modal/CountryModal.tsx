import { useState, useEffect } from "react";
import { Modal, Box, Button, TextField, List, ListItem } from "@mui/material";
import { translate } from "@i18n";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import { listOfCountries } from "@utils/listOfCountries";
import "./Modals.scss";

interface ICountryModalProps {
  isOpen: boolean;
  locale: string;
  cbCloseModal: (name: string, isShow: boolean) => void;
  cbHandleLocation: (country: {
    id: number;
    englishLabel: string;
    russianLabel: string;
  }) => void;
}

const CountryModal = ({
  isOpen,
  locale,
  cbCloseModal,
  cbHandleLocation,
}: ICountryModalProps) => {
  const { t } = translate("translate", { keyPrefix: "modals.location" });

  const [country, setCountry] = useState("");
  const [errorCountry, setErrorCountry] = useState("");

  useEffect(() => {
    country && setErrorCountry("");
  }, [country]);

  const filteredWords = listOfCountries.filter((el) =>
    locale === "en"
      ? el.englishLabel.toLowerCase().includes(country.toLowerCase())
      : el.russianLabel.toLowerCase().includes(country.toLowerCase())
  );

  const groupWordsByFirstLetter = () => {
    const groupedWords: { [letter: string]: string[] } = {};

    filteredWords.forEach((word) => {
      const firstLetter: string =
        locale === "en"
          ? word.englishLabel.charAt(0).toUpperCase()
          : word.russianLabel.charAt(0).toUpperCase();

      if (groupedWords[firstLetter]) {
        groupedWords[firstLetter].push(
          locale === "en" ? word.englishLabel : word.russianLabel
        );
      } else {
        groupedWords[firstLetter] = [
          locale === "en" ? word.englishLabel : word.russianLabel,
        ];
      }
    });

    return groupedWords;
  };

  const groupedWords: { [letter: string]: string[] } =
    groupWordsByFirstLetter();

  const handleSearchChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setCountry(event.target.value);
  };

  const handleChooseCountry = (word: string) => {
    setCountry(word);
  };

  const handleCloseModal = () => {
    cbCloseModal("country", false);
  };

  const handleSaveCountry = () => {
    const location = listOfCountries.find((el) =>
      locale === "en"
        ? el.englishLabel === country
        : el.russianLabel === country
    );
    if (location) {
      cbHandleLocation(location);
      cbCloseModal("country", false);
    } else {
      setErrorCountry(t("errCountry"));
    }
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
          <Box className="fieldBox">
            <TextField
              value={country}
              onChange={handleSearchChange}
              placeholder={t("search")}
              InputProps={{ startAdornment: <SearchIcon /> }}
              className="searchField"
              error={!!errorCountry}
            />
            {errorCountry && <p className="errorCountry">{errorCountry}</p>}
          </Box>
          <Button
            type="button"
            className="saveCountryButton"
            onClick={handleSaveCountry}
          >
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
