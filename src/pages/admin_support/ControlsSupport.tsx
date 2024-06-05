import { Box, Button, TextField, InputAdornment } from "@mui/material";
import { translate } from "@i18n";
import SearchIcon from "@mui/icons-material/Search";
import "./AdminSupportPage.scss";

interface IControlsSupportProps {
  filterWord: string;
  cbHandleFilterWord: (word: string) => void;
  supportType: string;
  cbHandleFilterType: (type: string) => void;
  allRequest: { status: string }[];
}

const ControlsSupport = ({
  filterWord,
  cbHandleFilterWord,
  supportType,
  cbHandleFilterType,
  allRequest,
}: IControlsSupportProps) => {
  const { t } = translate("translate", { keyPrefix: "adminSupportPage" });

  const handleChangeFilterWord = (e: React.ChangeEvent<HTMLInputElement>) => {
    cbHandleFilterWord(e.currentTarget.value);
  };

  const handleChangeFilterType = (e: React.MouseEvent<HTMLButtonElement>) => {
    cbHandleFilterType(e.currentTarget.name);
  };

  const countOfRequest = (type: string) => {
    return allRequest.filter(
      (el) => el.status.toLowerCase() === type.toLowerCase()
    ).length;
  };

  const buttonsType = [
    { label: t("all", { count: allRequest.length }), name: "all" },
    { label: t("new", { count: countOfRequest("new") }), name: "new" },
    {
      label: t("inProcess", { count: countOfRequest("in process") }),
      name: "in process",
    },
    { label: t("closed", { count: countOfRequest("closed") }), name: "closed" },
  ];

  return (
    <>
      <Box className="filterByWordsBox">
        <p>{t("supportRequests")}</p>
        <TextField
          placeholder={t("search")}
          value={filterWord}
          onChange={handleChangeFilterWord}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          className="searchField"
        />
      </Box>
      <Box className="supportTypeButtonsBox">
        {buttonsType.map((el, ind) => (
          <Button
            key={ind}
            name={el.name}
            onClick={handleChangeFilterType}
            className={`buttonType ${
              el.name === supportType ? "activeButton" : ""
            }`}
          >
            {el.label}
          </Button>
        ))}
      </Box>
    </>
  );
};

export default ControlsSupport;
