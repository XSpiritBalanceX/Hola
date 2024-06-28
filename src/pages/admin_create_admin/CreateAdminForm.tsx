import {
  TextField,
  Box,
  FormLabel,
  Button,
  InputAdornment,
  FormHelperText,
} from "@mui/material";
import { translate } from "@i18n";
import ControlledInput from "@components/fields/ControlledInput";
import ControlledPassword from "@components/fields/ControlledPassword";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import moment from "moment";
import InputMask from "react-input-mask";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";
import "./CreateAdminPage.scss";

interface INewAdminInformation {
  name: string;
  date_of_birth: string;
  email: string;
  password: string;
}

const CreateAdminForm = () => {
  const { t } = translate("translate", { keyPrefix: "adminCreateAdminPage" });

  const validationSchema = Yup.object().shape({
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
    email: Yup.string()
      .required(t("errorRequiredField"))
      .email(t("errIncorrectEmail")),
    password: Yup.string()
      .required(t("errorRequiredField"))
      .min(8, t("errorMeetPassword"))
      .max(25, t("errorMeetPassword"))
      .matches(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])/, t("errorMeetPassword")),
  });

  const {
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<INewAdminInformation>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      date_of_birth: "",
    },
  });

  const handleCreateAdmin = (data: INewAdminInformation) => {
    console.log(data);
  };

  const handleDateOfBirth = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setValue("date_of_birth", value);
  };

  return (
    <form
      onSubmit={handleSubmit(handleCreateAdmin)}
      className="createNewAdminForm"
    >
      <Box className="newAdminFieldBox">
        <FormLabel
          className={`newAdminLabel ${errors.name ? "errorAdminLabel" : ""}`}
        >
          {t("name")}
        </FormLabel>
        <ControlledInput
          name={"name"}
          label={""}
          control={control}
          error={errors && errors.name?.message}
          classNameField="newAdminField"
        />
      </Box>
      <Box className="newAdminFieldBox dateOfBirthAdminBox">
        <FormLabel
          className={`newAdminLabel ${
            errors.date_of_birth ? "errorAdminLabel" : ""
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
            <TextField
              className="newAdminField"
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
          {errors.date_of_birth?.message}
        </FormHelperText>
      </Box>
      <Box className="newAdminFieldBox">
        <FormLabel
          className={`newAdminLabel ${errors.email ? "errorAdminLabel" : ""}`}
        >
          E-mail
        </FormLabel>
        <ControlledInput
          name={"email"}
          label={""}
          control={control}
          error={errors && errors.email?.message}
          classNameField="newAdminField"
        />
      </Box>
      <Box className="newAdminFieldBox">
        <FormLabel
          className={`newAdminLabel ${
            errors.password ? "errorAdminLabel" : ""
          }`}
        >
          {t("password")}
        </FormLabel>
        <ControlledPassword
          name={"password"}
          label={""}
          control={control}
          error={errors && errors.password?.message}
          className="newAdminField"
          watch={watch}
          lengthValue={watch("password") && watch("password").length}
        />
      </Box>
      <Button type="submit" className="createNewAdminButton">
        {t("save")}
      </Button>
    </form>
  );
};

export default CreateAdminForm;
