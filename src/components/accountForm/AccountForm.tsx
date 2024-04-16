import { useState, useEffect } from "react";
import {
  Button,
  TextField,
  Box,
  FormHelperText,
  InputAdornment,
} from "@mui/material";
import { useAppSelector } from "@store/hook";
import * as holaSelectors from "@store/selectors";
import { translate } from "@i18n";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import moment from "moment";
import DatePicker from "./DatePicker";
import { IAccountInformation } from "./TypesAccountForm";
import UserLocation from "./UserLocation";
import CountryModal from "@components/modal/CountryModal";
import AccountRagers from "./AccountRagers";
import { listOfCountries } from "@utils/listOfCountries";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";
import { useUpdateAccountMutation } from "@store/requestApi/accountApi";
import { toast } from "react-toastify";
import DeleteAccountModal from "@components/modal/DeleteAccountModal";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import LanguageModal from "@components/modal/LanguageModal";
import { listOfCategoryDate } from "@utils/listOfCategoryDate";
import GoalModal from "@components/modal/GoalModal";
import "./AccountForm.scss";

const AccountForm = () => {
  const { t } = translate("translate", { keyPrefix: "accountSettings" });
  const accountInfo = useAppSelector(holaSelectors.accountSelect);
  const locale = useAppSelector(holaSelectors.localeSelect);

  const [updateAccount] = useUpdateAccountMutation();

  const [showPicker, setShowPicker] = useState(false);
  const [showModalCountries, setShowModalCountries] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [showModalLanguage, setShowModalLanguage] = useState(false);
  const [showModalGoal, setShowModalGoal] = useState(false);
  const [initialState, setInitialState] = useState({
    name: "",
    email: "",
    date_of_birth: "",
    goal: listOfCategoryDate[0].id,
    location: {
      id: listOfCountries[0].id,
      name: listOfCountries[0].englishLabel,
    },
    global_search: false,
    max_distance: 100,
    min_age: 20,
    max_age: 30,
  });

  useEffect(() => {
    if (accountInfo) {
      const location = listOfCountries.find(
        (el) => accountInfo.location === el.id
      ) || {
        id: listOfCountries[0].id,
        englishLabel: listOfCountries[0].englishLabel,
        russianLabel: listOfCountries[0].russianLabel,
      };
      const compiledDate = {
        name: accountInfo.name,
        email: accountInfo.email,
        date_of_birth: moment(accountInfo.date_of_birth, "YYYY-MM-DD").format(
          "DD/MM/YYYY"
        ),
        goal: accountInfo.goal || listOfCategoryDate[0].id,
        location: {
          id: location.id,
          name: locale === "en" ? location.englishLabel : location.russianLabel,
        },
        global_search: accountInfo.global_search,
        max_distance: accountInfo.max_distance,
        min_age: accountInfo.min_age || 20,
        max_age: accountInfo.max_age || 30,
      };
      setInitialState(compiledDate);
    }
    // eslint-disable-next-line
  }, [accountInfo]);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required(t("errorRequiredField")),
    email: Yup.string()
      .required(t("errorRequiredEmail"))
      .email(t("errIncorrectEmail")),
    date_of_birth: Yup.string()
      .required(t("errorRequiredField"))
      .test("less-18", t("errDateOfBirth"), (value) => {
        const minAge = 18;
        const currentDate = moment();
        const dob = moment(value, "DD.MM.YYYY");
        const age = currentDate.diff(dob, "years");
        return age >= minAge;
      }),
    goal: Yup.number().required(),
    location: Yup.object()
      .shape({ id: Yup.number().required(), name: Yup.string().required() })
      .required(),
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
    const compiledData = {
      name: data.name,
      email: data.email,
      date_of_birth: moment(data.date_of_birth, "DD.MM.YYYY").format(
        "YYYY-MM-DD"
      ),
      goal: data.goal,
      location: data.location.id,
      global_search: data.global_search,
      max_distance: data.max_distance,
      min_age: data.min_age,
      max_age: data.max_age,
    };
    updateAccount(compiledData)
      .unwrap()
      .then(() => toast.success(t("successUpdate")))
      .catch(() => toast.error(t("errEditing")));
  };

  const handleShowPicker = () => {
    setShowPicker(!showPicker);
  };

  const handleModals = (name: string, isShow: boolean) => {
    switch (name) {
      case "country":
        setShowModalCountries(isShow);
        break;
      case "delete":
        setShowModalDelete(isShow);
        break;
      case "language":
        setShowModalLanguage(isShow);
        break;
      case "goal":
        setShowModalGoal(isShow);
        break;
      default:
        console.log("no active modal");
    }
  };

  useEffect(() => {
    const foundCountry = listOfCountries.find(
      (el) => el.id === watch("location.id")
    );
    const foundGoal = listOfCategoryDate.find((el) => el.id === watch("goal"));
    setValue("location", {
      id: foundCountry!.id,
      name:
        locale === "en"
          ? foundCountry!.englishLabel
          : foundCountry!.russianLabel,
    });
    setValue("goal", foundGoal!.id);
    // eslint-disable-next-line
  }, [locale]);

  const handleLocation = (country: {
    id: number;
    englishLabel: string;
    russianLabel: string;
  }) => {
    setValue("location", {
      id: country.id,
      name: locale === "en" ? country.englishLabel : country.russianLabel,
    });
  };

  const handleSetGoal = (value: number) => {
    setValue("goal", value);
  };

  const isChanges = JSON.stringify(initialState) === JSON.stringify(watch());

  return (
    <>
      <CountryModal
        isOpen={showModalCountries}
        locale={locale}
        cbCloseModal={handleModals}
        cbHandleLocation={handleLocation}
      />
      <DeleteAccountModal
        isOpen={showModalDelete}
        cbCloseModal={handleModals}
      />
      <LanguageModal
        isOpen={showModalLanguage}
        cbCloseModal={handleModals}
        locale={locale}
      />
      <GoalModal
        isOpen={showModalGoal}
        cbCloseModal={handleModals}
        currentGoal={watch("goal")}
        cbHandleSetGoal={handleSetGoal}
      />
      <form
        className="formAccountSettings"
        onSubmit={handleSubmit(onSubmitAccount)}
      >
        <Box className="fieldsBox">
          <TextField
            InputProps={{
              startAdornment: <p className="labelField">{t("name")}</p>,
              endAdornment: !!errors.name && (
                <InputAdornment position="end" className="errorIcon">
                  <WarningAmberRoundedIcon />
                </InputAdornment>
              ),
            }}
            {...register("name")}
            className="accountField"
            error={!!errors.name}
          />
          <FormHelperText className="errorMessage">
            {errors.name?.message}
          </FormHelperText>
        </Box>
        <Box className="fieldsBox">
          <TextField
            InputProps={{
              startAdornment: <p className="labelField">{t("email")}</p>,
              endAdornment: !!errors.email && (
                <InputAdornment position="end" className="errorIcon">
                  <WarningAmberRoundedIcon />
                </InputAdornment>
              ),
            }}
            {...register("email")}
            className="accountField"
            error={!!errors.email}
          />
          <FormHelperText className="errorMessage">
            {errors.email?.message}
          </FormHelperText>
        </Box>
        <Box className="fieldsBox">
          <TextField
            InputProps={{
              startAdornment: <p className="labelField">{t("dateOfBirth")}</p>,
              style: { pointerEvents: "none" },
              endAdornment: !!errors.date_of_birth && (
                <InputAdornment position="end" className="errorIcon">
                  <WarningAmberRoundedIcon />
                </InputAdornment>
              ),
            }}
            {...register("date_of_birth")}
            className={`accountField ${showPicker && "dateField"}`}
            disabled
            onClick={handleShowPicker}
            error={!!errors.date_of_birth}
          />
          {showPicker && (
            <DatePicker
              date_of_birth={watch("date_of_birth")}
              locale={locale}
              setValue={setValue}
            />
          )}
          <FormHelperText className="errorMessage">
            {errors.date_of_birth?.message}
          </FormHelperText>
        </Box>
        <TextField
          disabled
          InputProps={{
            style: { pointerEvents: "none" },
            startAdornment: <p className="labelField">{t("language")}</p>,
            endAdornment: <ArrowForwardIosRoundedIcon />,
          }}
          onClick={() => handleModals("language", true)}
          value={locale === "ru" ? "Русский" : "English"}
          className="languageField"
        />
        <TextField
          disabled
          InputProps={{
            style: { pointerEvents: "none" },
            startAdornment: <p className="labelField">{t("goal")}</p>,
            endAdornment: <ArrowForwardIosRoundedIcon />,
          }}
          onClick={() => handleModals("goal", true)}
          value={
            watch("goal")
              ? t(
                  listOfCategoryDate.find((el) => el.id === watch("goal"))!
                    .label
                )
              : ""
          }
          className="languageField"
        />
        <UserLocation
          user_location={watch("location.name")}
          cbHandleOpenModalCountries={handleModals}
        />
        <AccountRagers
          distance={watch("max_distance")}
          global_search={watch("global_search")}
          min_age={watch("min_age")}
          max_age={watch("max_age")}
          setValue={setValue}
        />
        <Box className="controlButtonsBox">
          {!isChanges && (
            <Button type="submit" className="saveButton">
              {t("save")}
            </Button>
          )}
          {isChanges && (
            <Button
              type="button"
              className="deleteButton"
              onClick={() => handleModals("delete", true)}
            >
              {t("deleteAcc")}
            </Button>
          )}
        </Box>
      </form>
    </>
  );
};

export default AccountForm;
