import { Box, Button, TextField, InputAdornment } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import SearchIcon from "@mui/icons-material/Search";
import { translate } from "@i18n";
import "./AdminUsersChat.scss";

interface IControlsUsersChatProps {
  filterWord: string;
  cbHandleFilter: (word: string) => void;
}

const ControlsUsersChat = ({
  filterWord,
  cbHandleFilter,
}: IControlsUsersChatProps) => {
  const { t } = translate("translate", { keyPrefix: "adminUsersPage" });
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(-1);
  };

  const handleChangeFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    cbHandleFilter(e.currentTarget.value);
  };

  return (
    <Box className="controlsAdminUsersChat">
      <Button type="button" onClick={handleNavigate}>
        <ArrowBackIosNewIcon /> {t("userChat")}
      </Button>
      <TextField
        placeholder={t("search")}
        value={filterWord}
        onChange={handleChangeFilter}
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
  );
};

export default ControlsUsersChat;
