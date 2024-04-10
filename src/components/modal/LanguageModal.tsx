import { useState } from "react";
import {
  Modal,
  Box,
  Button,
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@mui/material";
import { translate } from "@i18n";
import { useAppDispatch } from "@store/hook";
import { changeLocale } from "@store/holaSlice";
import "./Modals.scss";

interface ILanguageModalProps {
  isOpen: boolean;
  cbCloseModal: (name: string, isShow: boolean) => void;
  locale: string;
}

const LanguageModal = ({
  isOpen,
  cbCloseModal,
  locale,
}: ILanguageModalProps) => {
  const { t } = translate("translate", { keyPrefix: "modals.account" });
  const dispath = useAppDispatch();

  const [selectedLanguage, setSelectedLanguage] = useState(locale);

  const handleSaveLanguage = () => {
    dispath(changeLocale(selectedLanguage));
    cbCloseModal("language", false);
  };

  const handleChangeLanguage = (e: React.SyntheticEvent<Element, Event>) => {
    const { value } = e.currentTarget as HTMLInputElement;
    setSelectedLanguage(value);
  };

  const handleCloseModal = () => {
    cbCloseModal("language", false);
  };

  const languages = [
    { lang: "en", title: "English" },
    { lang: "ru", title: "Русский" },
  ];

  return (
    <Modal
      open={isOpen}
      className="modalChooseLanguage"
      onClose={handleCloseModal}
    >
      <Box className="contentChooseLanguage">
        <Box className="saveLanguageBox">
          <p>{t("chooseLanguage")}</p>
          <Button type="button" onClick={handleSaveLanguage}>
            {t("save")}
          </Button>
        </Box>
        <RadioGroup onChange={handleChangeLanguage} value={selectedLanguage}>
          {languages.map((el, ind) => (
            <FormControlLabel
              key={ind}
              control={<Radio />}
              value={el.lang}
              label={el.title}
              className="radioLanguage"
            />
          ))}
        </RadioGroup>
      </Box>
    </Modal>
  );
};

export default LanguageModal;
