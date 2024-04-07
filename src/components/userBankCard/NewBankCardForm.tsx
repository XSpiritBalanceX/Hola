import { useState, useEffect } from "react";
import {
  Box,
  TextField,
  InputAdornment,
  FormHelperText,
  FormLabel,
  Button,
} from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Path, useForm } from "react-hook-form";
import { translate } from "@i18n";
import moment from "moment";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";
import InputMask from "react-input-mask";
import "./Card.scss";

interface IBankCardInformation {
  card_number: string;
  expire_date: string;
  cvc: string;
}

const NewBankCardForm = () => {
  const { t } = translate("translate", { keyPrefix: "planPage" });

  const [isDisableButton, setIsDisableButton] = useState(true);

  const validationSchema = Yup.object().shape({
    card_number: Yup.string()
      .required(t("errorRequiredField"))
      .min(16, t("errLengthCardNumber")),
    expire_date: Yup.string()
      .required(t("errorRequiredField"))
      .test("valid-date", t("errExpDate"), (value) => {
        const currentDate = moment();
        const enteredDate = moment(value, "MM/YY");
        if (
          !enteredDate.isValid() ||
          enteredDate.isBefore(currentDate, "month")
        ) {
          return false;
        }
        return true;
      }),
    cvc: Yup.string()
      .required(t("errorRequiredField"))
      .test("valid-value", t("errNumber"), (value) => {
        if (!value || !Number(value)) {
          return false;
        }
        return true;
      }),
  });

  const {
    handleSubmit,
    watch,
    register,
    setValue,
    formState: { errors },
  } = useForm<IBankCardInformation>({
    resolver: yupResolver(validationSchema),
  });

  useEffect(() => {
    if (watch()) {
      const paymentInfo = [];
      for (const key in watch()) {
        paymentInfo.push(watch(key as Path<IBankCardInformation>));
      }
      const isEmptyFields = paymentInfo.some(
        (value) => value === "" || value === null
      );
      setIsDisableButton(isEmptyFields);
    }
    // eslint-disable-next-line
  }, [watch()]);

  const onSubmitNewCard = (data: IBankCardInformation) => {
    console.log(data);
  };

  const handleCardNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setValue("card_number", value);
  };

  const handleExpireDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setValue("expire_date", value);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitNewCard)} className="newCardForm">
      <Box className="paymentFieldBox">
        <FormLabel className={`labelField ${errors.card_number && "errLabel"}`}>
          {t("cardNumber")}
        </FormLabel>
        <InputMask
          mask="9999 9999 9999 9999"
          maskChar={""}
          value={watch("card_number") || ""}
          onChange={handleCardNumber}
        >
          {/* @ts-ignore */}
          {() => (
            <TextField
              className="controlledField"
              error={!!errors.card_number}
              InputProps={{
                endAdornment: !!errors.card_number && (
                  <InputAdornment position="end" className="errorIcon">
                    <WarningAmberRoundedIcon />
                  </InputAdornment>
                ),
              }}
            />
          )}
        </InputMask>
        <FormHelperText className="errorMessage">
          {errors && errors.card_number?.message}
        </FormHelperText>
      </Box>
      <Box className="unitedFields">
        <Box className="paymentFieldBox">
          <FormLabel
            className={`labelField ${errors.expire_date && "errLabel"}`}
          >
            {t("expireDate")}
          </FormLabel>
          <InputMask
            mask="99/99"
            maskChar={""}
            value={watch("expire_date") || ""}
            onChange={handleExpireDate}
          >
            {/* @ts-ignore */}
            {() => (
              <TextField
                className="controlledField"
                error={!!errors.expire_date}
                InputProps={{
                  endAdornment: !!errors.expire_date && (
                    <InputAdornment position="end" className="errorIcon">
                      <WarningAmberRoundedIcon />
                    </InputAdornment>
                  ),
                }}
              />
            )}
          </InputMask>
          <FormHelperText className="errorMessage">
            {errors && errors.expire_date?.message}
          </FormHelperText>
        </Box>
        <Box className="paymentFieldBox">
          <FormLabel className={`labelField ${errors.cvc && "errLabel"}`}>
            CVC
          </FormLabel>
          <TextField
            {...register("cvc")}
            inputProps={{ maxLength: 3 }}
            className="controlledField"
            error={!!errors.cvc}
            InputProps={{
              endAdornment: !!errors.cvc && (
                <InputAdornment position="end" className="errorIcon">
                  <WarningAmberRoundedIcon />
                </InputAdornment>
              ),
            }}
          />
          <FormHelperText className="errorMessage">
            {errors && errors.cvc?.message}
          </FormHelperText>
        </Box>
      </Box>
      <Button type="submit" className="submitButton" disabled={isDisableButton}>
        {t("addNewCard")}
      </Button>
    </form>
  );
};

export default NewBankCardForm;
