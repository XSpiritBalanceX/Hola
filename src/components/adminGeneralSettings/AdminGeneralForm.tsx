import {
  Box,
  Button,
  TextField,
  FormHelperText,
  FormLabel,
  MenuItem,
} from "@mui/material";
import { translate } from "@i18n";
import { NavLink } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import moment from "moment";
import { IAdminGeneralFormProps, TAdminInformation } from "./TypesAdminGeneral";
import InputMask from "react-input-mask";
import * as holaSelectors from "@store/selectors";
import { useAppDispatch, useAppSelector } from "@store/hook";
import { changeLocale } from "@store/holaSlice";
import "./AdminGeneralSettings.scss";

const AdminGeneralForm = ({
  name,
  date_of_birth,
  email,
}: IAdminGeneralFormProps) => {
  const { t } = translate("translate", { keyPrefix: "adminSettingsPage" });
  const locale = useAppSelector(holaSelectors.localeSelect);
  const dispatch = useAppDispatch();

  const languages = [
    { lang: "en", title: "English" },
    { lang: "ru", title: "Русский" },
  ];

  const validationSchema = Yup.object().shape({
    name: Yup.string().required(t("errorRequiredField")),
    email: Yup.string()
      .required(t("errorRequiredEmail"))
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
  });

  const {
    handleSubmit,
    watch,
    register,
    setValue,
    formState: { errors },
  } = useForm<TAdminInformation>({
    resolver: yupResolver(validationSchema),
    values: { name: name, email: email, date_of_birth: date_of_birth },
  });

  const submitChanges = (data: TAdminInformation) => {
    console.log(data);
  };

  const handleDateOfBirth = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setValue("date_of_birth", value);
  };

  const handleChangeLanguage = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeLocale(e.target.value));
  };

  return (
    <form onSubmit={handleSubmit(submitChanges)} className="adminSettingsForm">
      <Box className="controlledAdminFieldBox">
        <FormLabel
          className={`adminFormLabel ${errors.name ? "errorLabel" : ""}`}
        >
          {t("name")}
        </FormLabel>
        <TextField
          {...register("name")}
          className="adminField"
          error={!!errors.name}
        />
        <FormHelperText className="errorMessage">
          {errors.name?.message}
        </FormHelperText>
      </Box>
      <Box className="controlledAdminFieldBox">
        <FormLabel
          className={`adminFormLabel ${
            errors.date_of_birth ? "errorLabel" : ""
          }`}
        >
          {t("dateOfBirth")}
        </FormLabel>
        <InputMask
          mask="99.99.9999"
          maskChar={""}
          value={watch("date_of_birth")}
          onChange={handleDateOfBirth}
        >
          {/* @ts-ignore */}
          {() => (
            <TextField className="adminField" error={!!errors.date_of_birth} />
          )}
        </InputMask>
        <FormHelperText className="errorMessage">
          {errors && errors.date_of_birth?.message}
        </FormHelperText>
        <Box className="controlledAdminFieldBox">
          <FormLabel
            className={`adminFormLabel ${errors.email ? "errorLabel" : ""}`}
          >
            E-mail
          </FormLabel>
          <TextField
            {...register("email")}
            className="adminField"
            error={!!errors.email}
          />
          <FormHelperText className="errorMessage">
            {errors.email?.message}
          </FormHelperText>
        </Box>
      </Box>
      <Box className="controlledAdminFieldBox">
        <FormLabel className="adminFormLabel">{t("language")}</FormLabel>
        <TextField
          select
          value={locale}
          onChange={handleChangeLanguage}
          className="adminField"
        >
          {languages.map((el, ind) => (
            <MenuItem key={ind} value={el.lang}>
              {el.title}
            </MenuItem>
          ))}
        </TextField>
      </Box>
      <NavLink
        to={"/admin/settings/change_password"}
        className={"linkChangePassword"}
      >
        {t("changePassword")}
      </NavLink>
      <Button type="submit" className="adminSaveButton">
        {t("save")}
      </Button>
    </form>
  );
};

export default AdminGeneralForm;
