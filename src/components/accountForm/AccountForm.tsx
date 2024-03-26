import { useState, useEffect } from "react";
import { TextField, Box } from "@mui/material";
import { useAppSelector } from "@store/hook";
import * as holaSelectors from "@store/selectors";
import { translate } from "@i18n";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import moment from "moment";
import LanguageSelect from "./LanguageSelect";
import DatePicker from "./DatePicker";
import { IAccountInformation } from "./TypesAccountForm";
import "./AccountForm.scss";

const AccountForm = () => {
  const { t } = translate("translate", { keyPrefix: "accountSettings" });
  const accountInfo = useAppSelector(holaSelectors.accountSelect);
  const locale = useAppSelector(holaSelectors.localeSelect);

  const [showPicker, setShowPicker] = useState(false);
  const [initialState, setInitialState] = useState({
    name: "",
    email: "",
    date_of_birth: "",
    location: "",
    global_search: false,
    max_distance: 100,
    min_age: 20,
    max_age: 30,
  });

  useEffect(() => {
    if (accountInfo) {
      const compiledDate = {
        name: accountInfo.name,
        email: accountInfo.email,
        date_of_birth: moment(accountInfo.date_of_birth, "YYYY-MM-DD").format(
          "DD/MM/YYYY"
        ),
        location: accountInfo.location || "",
        global_search: accountInfo.global_search,
        max_distance: accountInfo.max_distance,
        min_age: accountInfo.min_age || 20,
        max_age: accountInfo.max_age || 30,
      };
      setInitialState(compiledDate);
    }
  }, [accountInfo]);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string()
      .required(t("errorRequiredField"))
      .email(t("errIncorrectEmail")),
    date_of_birth: Yup.string()
      .required(t("errorRequiredField"))
      .test("valid-date", t("invalidDate"), (value) => {
        const dob = moment(value, "DD.MM.YYYY");

        return !dob.isValid() ? false : true;
      })
      .test("less-18", t("errDateOfBirth"), (value) => {
        const minAge = 18;
        const currentDate = moment();
        const dob = moment(value, "DD.MM.YYYY");
        const age = currentDate.diff(dob, "years");
        return age >= minAge;
      }),
    location: Yup.string().required(),
    global_search: Yup.boolean().required(),
    max_distance: Yup.number().required(),
    min_age: Yup.number().required(),
    max_age: Yup.number().required(),
  });

  const {
    handleSubmit,
    watch,
    register,
    setValue,
    formState: { errors },
  } = useForm<IAccountInformation>({
    resolver: yupResolver(validationSchema),
    values: initialState,
  });

  const onSubmitAccount = (data: IAccountInformation) => {
    console.log(data);
  };

  const handleShowPicker = () => {
    setShowPicker(!showPicker);
  };

  return (
    <form
      className="formAccountSettings"
      onSubmit={handleSubmit(onSubmitAccount)}
    >
      <TextField
        InputProps={{
          startAdornment: <p className="labelField">{t("name")}</p>,
        }}
        {...register("name")}
        className="accountField"
      />
      <TextField
        InputProps={{
          startAdornment: <p className="labelField">{t("email")}</p>,
        }}
        {...register("email")}
        className="accountField"
      />
      <TextField
        InputProps={{
          startAdornment: <p className="labelField">{t("dateOfBirth")}</p>,
          style: { pointerEvents: "none" },
        }}
        {...register("date_of_birth")}
        className={`accountField ${showPicker && "dateField"}`}
        disabled
        onClick={handleShowPicker}
      />
      {showPicker && (
        <DatePicker
          date_of_birth={watch("date_of_birth")}
          locale={locale}
          setValue={setValue}
        />
      )}
      <LanguageSelect />
    </form>
  );
};

export default AccountForm;
