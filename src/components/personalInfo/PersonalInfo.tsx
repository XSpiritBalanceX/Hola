import { useEffect, useState } from "react";
import {
  Box,
  FormControlLabel,
  TextField,
  Button,
  RadioGroup,
  Radio,
  InputAdornment,
  FormHelperText,
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
import Loader from "@components/loader/Loader";
import { toast } from "react-toastify";
import { signUp } from "@api/auth/signUp";
import { useNavigate } from "react-router-dom";
import { ISignUpInfo } from "./TypesPersonalInfo";
import ListCountries from "./ListCountries";
import { listOfCategoryDate } from "@utils/listOfCategoryDate";
import "./PersonalInfo.scss";

const PersonalInfo = () => {
  const { t } = translate("translate", { keyPrefix: "signUp.personalInfo" });
  const [isDisableButton, setIsDisableButton] = useState(true);
  const [loading, setLoading] = useState(false);
  const [showCountryList, setShowCountryList] = useState(false);
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    gender: Yup.string().oneOf(["man", "woman"]).required(t("errReqGender")),
    goal: Yup.number()
      .min(1, "Goal must be between 1 and 4")
      .max(4, "Goal must be between 1 and 4")
      .required("Goal is required"),
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
    location: Yup.object()
      .shape({ id: Yup.number().required(), name: Yup.string().required() })
      .required(t("errorRequiredField")),
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
    defaultValues: {
      date_of_birth: "",
    },
  });

  useEffect(() => {
    if (watch()) {
      const valuesPersonalInfo = [];
      for (const key in watch()) {
        valuesPersonalInfo.push(watch(key as Path<ISignUpInfo>));
      }
      const isEmptyFields = valuesPersonalInfo.some(
        (value) => value === "" || value === null
      );
      setIsDisableButton(isEmptyFields);
    }
    // eslint-disable-next-line
  }, [watch()]);

  const onSubmitSignIn = async (data: ISignUpInfo) => {
    const compiledData = {
      gender: data.gender,
      goal: data.goal,
      name: data.name,
      date_of_birth: moment(data.date_of_birth, "DD.MM.YYYY").format(
        "YYYY-MM-DD"
      ),
      location: data.location.id,
      email: data.email,
      password: data.password,
    };
    try {
      setLoading(true);
      const response = await signUp(compiledData);
      if (response.data.id) {
        localStorage.setItem("hola_login", data.email);
        localStorage.setItem("hola_user_id", response.data.id.toString());
        navigate("/registration/interests");
      } else {
        toast.error(t("errSignUp"));
      }
    } catch (err) {
      toast.error(t("errSignUp"));
    } finally {
      setLoading(false);
    }
  };

  const handleDateOfBirth = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setValue("date_of_birth", value);
  };

  const handleShowCountryList = () => {
    setShowCountryList(true);
  };

  const handleHideCountryList = () => {
    setShowCountryList(false);
  };

  const fieldsGender = ["man", "woman"];

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
    <Box className="personalInfoBox">
      <Loader isLoading={loading} />
      <p className="mainTitle">{t("title")}</p>
      <p className="title">{t("iAm")}</p>
      <form
        onSubmit={handleSubmit(onSubmitSignIn)}
        className="personalInfoForm"
      >
        <Box className="genderBox">
          <RadioGroup className="radioGenderGroup">
            {fieldsGender.map((el, ind) => {
              return (
                <FormControlLabel
                  key={ind}
                  value={el}
                  control={<Radio />}
                  label={t(el)}
                  {...register("gender")}
                  className="radioGender"
                />
              );
            })}
          </RadioGroup>
          <FormHelperText className="errorMessage">
            {errors && errors.gender?.message}
          </FormHelperText>
        </Box>
        <Box className="goalBox">
          <p className="titleGoal">{t("questionGoal")}</p>
          <RadioGroup className="radioGoalGroup">
            {listOfCategoryDate.map((el, ind) => (
              <FormControlLabel
                key={ind}
                value={el.id}
                control={<Radio className="radioButton" />}
                label={t(el.label)}
                {...register("goal")}
                className="radioGoal"
              />
            ))}
          </RadioGroup>
          <FormHelperText className="errorMessage">
            {errors && errors.goal?.message}
          </FormHelperText>
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
          <FormHelperText className="errorMessage">
            {errors && errors.date_of_birth?.message}
          </FormHelperText>
        </Box>
        <ControlledInput
          name={"email"}
          label={t("email")}
          control={control}
          error={errors && errors.email?.message}
        />
        {showCountryList ? (
          <ListCountries
            user_country={watch("location.name")}
            cbHandleHideCountryList={handleHideCountryList}
            setValue={setValue}
          />
        ) : (
          <Box className="controlledFieldBox">
            <TextField
              label={t("country")}
              value={watch("location.name")}
              className="controlledField"
              error={!!errors.location}
              InputProps={{
                endAdornment: !!errors.location && (
                  <InputAdornment position="end" className="errorIcon">
                    <WarningAmberRoundedIcon />
                  </InputAdornment>
                ),
                style: { pointerEvents: "none" },
              }}
              onClick={handleShowCountryList}
            />
            <FormHelperText className="errorMessage">
              {errors && errors.location?.message}
            </FormHelperText>
          </Box>
        )}
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
                (watch(el.name as Path<ISignUpInfo>) as string).length
              }
            />
          );
        })}
        <Button
          type="submit"
          className="submitPersonalInfo"
          disabled={isDisableButton}
        >
          {t("next")}
        </Button>
      </form>
    </Box>
  );
};

export default PersonalInfo;
