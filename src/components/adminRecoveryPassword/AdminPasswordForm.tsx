import {
  Box,
  Button,
  TextField,
  FormHelperText,
  FormLabel,
} from "@mui/material";
import { translate } from "@i18n";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { FieldErrors, Path, useForm } from "react-hook-form";
import { NavLink, useParams } from "react-router-dom";
import ControlledPassword from "@components/fields/ControlledPassword";
import "./AdminRecoveryPassword.scss";

interface IResetPasswordInfo {
  old_password: string;
  new_password: string;
  confirm_password: string;
  confirmation_code: string;
}

interface ISetNewPasswordInfo {
  new_password: string;
  confirm_password: string;
  confirmation_code: string;
}

const AdminPasswordForm = () => {
  const { t } = translate("translate", { keyPrefix: "adminSettingsPage" });
  const { part } = useParams();

  const validationSchemaReset = Yup.object().shape({
    old_password: Yup.string()
      .required(t("errorRequiredField"))
      .min(8, t("errorMeetPassword"))
      .max(25, t("errorMeetPassword"))
      .matches(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])/, t("errorMeetPassword")),
    new_password: Yup.string()
      .required(t("errorRequiredField"))
      .min(8, t("errorMeetPassword"))
      .max(25, t("errorMeetPassword"))
      .matches(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])/, t("errorMeetPassword")),
    confirm_password: Yup.string()
      .required(t("errorRequiredField"))
      .oneOf([Yup.ref("new_password")], t("mismatchPassword"))
      .min(8, t("errorMeetPassword"))
      .max(25, t("errorMeetPassword"))
      .matches(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])/, t("errorMeetPassword")),
    confirmation_code: Yup.string().required(t("errorRequiredField")),
  });

  const validationSchemaNewPassword = Yup.object().shape({
    new_password: Yup.string()
      .required(t("errorRequiredField"))
      .min(8, t("errorMeetPassword"))
      .max(25, t("errorMeetPassword"))
      .matches(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])/, t("errorMeetPassword")),
    confirm_password: Yup.string()
      .required(t("errorRequiredField"))
      .oneOf([Yup.ref("new_password")], t("mismatchPassword"))
      .min(8, t("errorMeetPassword"))
      .max(25, t("errorMeetPassword"))
      .matches(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])/, t("errorMeetPassword")),
    confirmation_code: Yup.string().required(t("errorRequiredField")),
  });

  const schema = part?.includes("change_password")
    ? validationSchemaReset
    : validationSchemaNewPassword;

  const {
    control,
    handleSubmit,
    watch,
    register,
    formState: { errors },
  } = useForm<IResetPasswordInfo | ISetNewPasswordInfo>({
    resolver: yupResolver(schema),
  });

  const handleSubmitPassword = (
    data: IResetPasswordInfo | ISetNewPasswordInfo
  ) => {
    console.log(data);
  };

  const fieldsPassword = [
    {
      label: t("newPassword"),
      name: "new_password",
      error: errors.new_password,
    },
    {
      label: t("confirmNewPassword"),
      name: "confirm_password",
      error: errors.confirm_password,
    },
  ];

  return (
    <form
      onSubmit={handleSubmit(handleSubmitPassword)}
      className="adminFormPasswords"
    >
      {part?.includes("change_password") && (
        <>
          <Box className="controlledAdminBox">
            <FormLabel
              className={`adminFormLabel ${
                (errors as FieldErrors<IResetPasswordInfo>).old_password
                  ? "errorLabel"
                  : ""
              }`}
            >
              {t("oldPassword")}
            </FormLabel>
            <ControlledPassword
              name={"old_password"}
              control={control}
              label={""}
              error={
                (errors as FieldErrors<IResetPasswordInfo>).old_password
                  ?.message
              }
              lengthValue={
                watch("old_password") && watch("old_password").length
              }
              watch={watch}
              className="adminField"
            />
          </Box>
          <Box className="passwordLinkBox">
            <NavLink to={"/admin/settings/recovery_password_email"}>
              {t("forgotPassword")}
            </NavLink>
          </Box>
        </>
      )}
      {fieldsPassword.map((el, ind) => (
        <Box key={ind} className="controlledAdminBox">
          <FormLabel
            className={`adminFormLabel ${el.error ? "errorLabel" : ""}`}
          >
            {el.label}
          </FormLabel>
          <ControlledPassword
            name={el.name}
            control={control}
            label={""}
            error={el.error?.message}
            lengthValue={
              watch(
                el.name as Path<IResetPasswordInfo | ISetNewPasswordInfo>
              ) &&
              watch(el.name as Path<IResetPasswordInfo | ISetNewPasswordInfo>)
                .length
            }
            watch={watch}
            className="adminField"
          />
        </Box>
      ))}
      <Box className="controlledAdminBox">
        <FormLabel
          className={`adminFormLabel ${
            errors.confirmation_code ? "errorLabel" : ""
          }`}
        >
          {t("code")}
        </FormLabel>
        <TextField
          {...register("confirmation_code")}
          className="adminField"
          error={!!errors.confirmation_code}
        />
        <FormHelperText className="errorMessage">
          {errors.confirmation_code?.message}
        </FormHelperText>
      </Box>
      <Button type="submit" className="submitPasswordsButton">
        {t("save")}
      </Button>
    </form>
  );
};

export default AdminPasswordForm;
