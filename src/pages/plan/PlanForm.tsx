import { useEffect, useState } from "react";
import {
  Box,
  Button,
  TextField,
  FormHelperText,
  InputAdornment,
  FormLabel,
  Switch,
} from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Path, useForm } from "react-hook-form";
import { translate } from "@i18n";
import mastercard from "@assets/mastercard.svg";
import visa from "@assets/visa.svg";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";
import InputMask from "react-input-mask";
import moment from "moment";
import { NavLink } from "react-router-dom";
import "./PlanPage.scss";

interface IPaymentInformation {
  card_number: string;
  expire_date: string;
  cvc: string;
  policy: boolean;
}

const PlanForm = () => {
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
    policy: Yup.boolean().default(false).oneOf([true], t("errReqPolicy")),
  });

  const {
    handleSubmit,
    watch,
    register,
    setValue,
    clearErrors,
    setError,
    formState: { errors },
  } = useForm<IPaymentInformation>({
    resolver: yupResolver(validationSchema),
  });

  useEffect(() => {
    if (watch()) {
      const paymentInfo = [];
      for (const key in watch()) {
        paymentInfo.push(watch(key as Path<IPaymentInformation>));
      }
      const isEmptyFields = paymentInfo.some(
        (value) => value === "" || value === null
      );
      setIsDisableButton(isEmptyFields);
    }
    // eslint-disable-next-line
  }, [watch()]);

  const onSubmitPayment = (data: IPaymentInformation) => {
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

  const handleChangePolicy = () => {
    setValue("policy", !watch("policy"));
    watch("policy")
      ? clearErrors("policy")
      : setError("policy", { message: t("errReqPolicy") });
  };

  return (
    <form onSubmit={handleSubmit(onSubmitPayment)} className="formPayment">
      <Box className="cardInformationBox">
        <Box className="paymentFieldBox">
          <FormLabel
            className={`labelField ${errors.card_number && "errLabel"}`}
          >
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
      </Box>
      <p className="cardDetailText">{t("cardDetail")}</p>
      <Box className="imagesBox">
        <img src={mastercard} alt="mastercard" />
        <img src={visa} alt="visa" />
      </Box>
      <Box className="policyBox">
        <Box className="switcherBox">
          <Switch
            checked={watch("policy") || false}
            onChange={handleChangePolicy}
            className="policySwitcher"
          />
          <NavLink to={"/privacy"}>
            {t("iAgree")}
            <span>{t("terms")}</span>
            {t("and")}
            <span>{t("policy")}</span>
          </NavLink>
        </Box>
        <FormHelperText className="errorMessage">
          {errors && errors.policy?.message}
        </FormHelperText>
      </Box>
      <Button type="submit" className="submitButton" disabled={isDisableButton}>
        {t("subscribe")}
      </Button>
    </form>
  );
};

export default PlanForm;
