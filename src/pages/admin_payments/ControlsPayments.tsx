import { Box, Button, TextField, InputAdornment } from "@mui/material";
import { translate } from "@i18n";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import "./AdminPaymentsPage.scss";

interface IControlsPaymentsProps {
  filterWord: string;
  cbHandleFilterWord: (word: string) => void;
  paymentType: string;
}

const ControlsPayments = ({
  filterWord,
  cbHandleFilterWord,
  paymentType,
}: IControlsPaymentsProps) => {
  const { t } = translate("translate", { keyPrefix: "adminPaymentsPage" });

  const navigate = useNavigate();

  const buttonPayment = ["all", "paid", "expected", "suspended"];

  const handleChangeFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    cbHandleFilterWord(e.currentTarget.value);
  };

  const handleNavigate = (e: React.MouseEvent<HTMLButtonElement>) => {
    navigate(`/admin/payments/${e.currentTarget.name}`);
  };

  return (
    <>
      <Box className="searchPaymentBox">
        <p>{t("payments")}</p>
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
      <Box className="buttonsPaymentsBox">
        {buttonPayment.map((el, ind) => (
          <Button
            key={ind}
            type="button"
            name={el}
            onClick={handleNavigate}
            className={`buttonType ${paymentType === el ? "activeButton" : ""}`}
          >
            {t(el)}
          </Button>
        ))}
      </Box>
    </>
  );
};

export default ControlsPayments;
