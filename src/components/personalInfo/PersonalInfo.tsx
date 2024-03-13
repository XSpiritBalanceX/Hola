import {
  Box,
  FormControlLabel,
  TextField,
  Button,
  RadioGroup,
  Radio,
  InputAdornment,
} from "@mui/material";
import { translate } from "@i18n";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm, Path } from "react-hook-form";
import ControlledInput from "@components/fields/ControlledInput";
import ControlledPassword from "@components/fields/ControlledPassword";
import moment from "moment";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";
import InputMask from "react-input-mask";

interface ISignUpInfo {
  gender: "man" | "woman";
  name: string;
  date_of_birth: string;
  country: string;
  email: string;
  password: string;
  confirm_password: string;
}

const PersonalInfo = () => {
  const { t } = translate("translate", { keyPrefix: "signUp.personalInfo" });

  const validationSchema = Yup.object().shape({
    gender: Yup.string().oneOf(["man", "woman"]).required(t("errReqGender")),
    name: Yup.string().required(t("errorRequiredField")),
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
    country: Yup.string().required(t("errorRequiredField")),
    email: Yup.string()
      .required(t("errorRequiredField"))
      .email(t("errIncorrectEmail")),
    password: Yup.string()
      .required(t("errorRequiredField"))
      .min(8, t("errorMeetPassword"))
      .max(25, t("errorMeetPassword"))
      .matches(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])/, t("errorMeetPassword")),
    confirm_password: Yup.string()
      .required(t("errorRequiredField"))
      .oneOf([Yup.ref("password")], t("mismatchPassword")),
  });

  const {
    control,
    handleSubmit,
    watch,
    register,
    setValue,
    formState: { errors },
  } = useForm<ISignUpInfo>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmitSignIn = (data: ISignUpInfo) => {
    console.log(data);
  };

  const handleDateOfBirth = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setValue("date_of_birth", value);
  };

  const fieldsGender = ["man", "woman"];
  const fieldsMainCountry = [
    {
      name: "country",
      label: "country",
      error: errors && errors.country?.message,
    },
    { name: "email", label: "email", error: errors && errors.email?.message },
  ];
  const fieldsPassword = [
    {
      name: "password",
      label: "password",
      error: errors && errors.password?.message,
    },
    {
      name: "confirm_password",
      label: "confirmPass",
      error: errors && errors.confirm_password?.message,
    },
  ];

  return (
    <Box>
      <p>{t("title")}</p>
      <p>{t("iAm")}</p>
      <form onSubmit={handleSubmit(onSubmitSignIn)}>
        <Box>
          <RadioGroup>
            {fieldsGender.map((el, ind) => {
              return (
                <FormControlLabel
                  key={ind}
                  value={el}
                  control={<Radio />}
                  label={t(el)}
                  {...register("gender")}
                />
              );
            })}
          </RadioGroup>
          <p>{errors && errors.gender?.message}</p>
        </Box>
        <ControlledInput
          name={"name"}
          label={t("name")}
          control={control}
          error={errors && errors.name?.message}
        />
        <Box className="controlledFieldBox">
          <InputMask
            mask="99.99.9999"
            maskChar={""}
            value={watch("date_of_birth")}
            onChange={handleDateOfBirth}
          >
            {/* @ts-ignore */}
            {() => (
              <TextField
                label={t("birthDate")}
                className="controlledField"
                error={!!errors.date_of_birth}
                InputProps={{
                  endAdornment: !!errors.date_of_birth && (
                    <InputAdornment position="end" className="errorIcon">
                      <WarningAmberRoundedIcon />
                    </InputAdornment>
                  ),
                }}
              />
            )}
          </InputMask>
          <p className="errorMessage">
            {errors && errors.date_of_birth?.message}
          </p>
        </Box>
        {fieldsMainCountry.map((el, ind) => {
          return (
            <ControlledInput
              key={ind}
              name={el.name}
              label={t(el.label)}
              control={control}
              error={el.error}
            />
          );
        })}
        {fieldsPassword.map((el, ind) => {
          return (
            <ControlledPassword
              key={ind}
              name={el.name}
              control={control}
              error={el.error}
              label={t(el.label)}
              watch={watch}
              lengthValue={
                watch(el.name as Path<ISignUpInfo>) &&
                watch(el.name as Path<ISignUpInfo>).length
              }
            />
          );
        })}
        <Button type="submit">{t("next")}</Button>
      </form>
    </Box>
  );
};

export default PersonalInfo;
