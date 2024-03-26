import { useState, useEffect } from "react";
import { Box, Button, TextField, List, ListItem } from "@mui/material";
import { listOfCountries } from "@utils/listOfCountries";
import { IListCountriesProps } from "./TypesPersonalInfo";
import { translate } from "@i18n";
import { useAppSelector } from "@store/hook";
import * as holaSelectors from "@store/selectors";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import SearchIcon from "@mui/icons-material/Search";
import "./PersonalInfo.scss";

const ListCountries = ({
  user_country,
  cbHandleHideCountryList,
  setValue,
}: IListCountriesProps) => {
  const { t } = translate("translate", { keyPrefix: "signUp.personalInfo" });
  const locale = useAppSelector(holaSelectors.localeSelect);

  const [country, setCountry] = useState(user_country || "");
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

  const handleClose = () => {
    const location = listOfCountries.find((el) =>
      locale === "en"
        ? el.englishLabel === country
        : el.russianLabel === country
    );
    if (location) {
      setValue("country", {
        id: location!.id,
        name: locale === "en" ? location.englishLabel : location.russianLabel,
      });
      cbHandleHideCountryList();
    } else {
      setErrorCountry(t("errCountry"));
    }
  };

  return (
    <Box className="countriesBox">
      <p className="labelCountries">{t("country")}</p>
      <Box className="buttonSaveBox">
        <Button type="button" onClick={handleClose}>
          <KeyboardArrowUpIcon />
        </Button>
      </Box>
      <TextField
        value={country}
        onChange={handleSearchChange}
        placeholder={t("search")}
        InputProps={{ startAdornment: <SearchIcon /> }}
        className="searchField"
        error={!!errorCountry}
      />
      {errorCountry && <p className="errorCountryMessage">{errorCountry}</p>}
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
  );
};

export default ListCountries;
