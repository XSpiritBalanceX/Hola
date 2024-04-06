import { TextField, MenuItem } from "@mui/material";
import { translate } from "@i18n";
import { useAppSelector, useAppDispatch } from "@store/hook";
import * as holaSelectors from "@store/selectors";
import { changeLocale } from "@store/holaSlice";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import "./AccountForm.scss";

const LanguageSelect = () => {
  const { t } = translate("translate", { keyPrefix: "accountSettings" });
  const locale = useAppSelector(holaSelectors.localeSelect);
  const dispath = useAppDispatch();

  const handleChangeLanguage = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispath(changeLocale(e.target.value));
  };

  return (
    <TextField
      select={true}
      InputProps={{
        startAdornment: <p className="labelField">{t("language")}</p>,
        endAdornment: <ArrowForwardIosRoundedIcon />,
      }}
      onChange={handleChangeLanguage}
      value={locale}
      className="languageField"
    >
      <MenuItem value="en">English</MenuItem>
      <MenuItem value="ru">Русский</MenuItem>
    </TextField>
  );
};

export default LanguageSelect;
