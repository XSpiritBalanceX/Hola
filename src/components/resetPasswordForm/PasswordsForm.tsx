import { useState, useEffect } from "react";
import { Box, Button } from "@mui/material";
import {
  IPasswordsFormProps,
  IResetPasswordInfo,
  ISetNewPasswordInfo,
} from "./TypesResetForm";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { FieldErrors, Path, useForm } from "react-hook-form";
import { translate } from "@i18n";
import ControlledPassword from "@components/fields/ControlledPassword";
import ControlledInput from "@components/fields/ControlledInput";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { resetPassword } from "@api/password_reset/resetPassword";
import { toast } from "react-toastify";
import Loader from "@components/loader/Loader";
import "./ResetForm.scss";

const PasswordsForm = ({ cbHandleSavePassword }: IPasswordsFormProps) => {
  const { t } = translate("translate", { keyPrefix: "resetPasswordPage" });
  const { pathname } = useLocation();

  const [isDisableButton, setIsDisableButton] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const validationSchemaReset = Yup.object().shape({
    current_password: Yup.string()
      .required(t("errorRequiredPassword"))
      .min(8, t("errorMeetPassword"))
      .max(25, t("errorMeetPassword"))
      .matches(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])/, t("errorMeetPassword")),
    new_password: Yup.string()
      .required(t("errorRequiredPassword"))
      .min(8, t("errorMeetPassword"))
      .max(25, t("errorMeetPassword"))
      .matches(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])/, t("errorMeetPassword")),
    confirm_password: Yup.string()
      .required(t("errorRequiredPassword"))
      .oneOf([Yup.ref("new_password")], t("mismatchPassword"))
      .min(8, t("errorMeetPassword"))
      .max(25, t("errorMeetPassword"))
      .matches(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])/, t("errorMeetPassword")),
    confirmation_code: Yup.string().required(t("errorRequiredField")),
  });

  const validationSchemaNewPassword = Yup.object().shape({
    new_password: Yup.string()
      .required(t("errorRequiredPassword"))
      .min(8, t("errorMeetPassword"))
      .max(25, t("errorMeetPassword"))
      .matches(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])/, t("errorMeetPassword")),
    confirm_password: Yup.string()
      .required(t("errorRequiredPassword"))
      .oneOf([Yup.ref("new_password")], t("mismatchPassword"))
      .min(8, t("errorMeetPassword"))
      .max(25, t("errorMeetPassword"))
      .matches(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])/, t("errorMeetPassword")),
    confirmation_code: Yup.string().required(t("errorRequiredField")),
  });

  const schema = pathname.includes("reset_password")
    ? validationSchemaReset
    : validationSchemaNewPassword;

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IResetPasswordInfo | ISetNewPasswordInfo>({
    resolver: yupResolver(schema),
  });

  const onSubmitResetPassword = async (
    data: IResetPasswordInfo | ISetNewPasswordInfo
  ) => {
    if (pathname.includes("reset_password")) {
      try {
        setIsLoading(true);
        const infoReset = data as IResetPasswordInfo;
        const response = await resetPassword({
          current_password: infoReset.current_password,
          new_password: infoReset.new_password,
          code: infoReset.confirmation_code,
        });
        console.log(response);
        cbHandleSavePassword();
      } catch (err) {
        toast.error(t("errReset"));
      } finally {
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    if (watch()) {
      const valuesPersonalInfo = [];
      for (const key in watch()) {
        valuesPersonalInfo.push(
          watch(key as Path<IResetPasswordInfo | ISetNewPasswordInfo>)
        );
      }
      const isEmptyFields = valuesPersonalInfo.some(
        (value) => value === "" || value === null
      );
      setIsDisableButton(isEmptyFields);
    }
    // eslint-disable-next-line
  }, [watch()]);

  const passwordsFields = [
    {
      name: "new_password",
      label: "newPassword",
      error: errors && errors.new_password?.message,
    },
    {
      name: "confirm_password",
      label: "confirmPassword",
      error: errors && errors.confirm_password?.message,
    },
  ];

  return (
    <>
      <Loader isLoading={isLoading} />
      <form
        onSubmit={handleSubmit(onSubmitResetPassword)}
        className="formResetPassword"
      >
        <ControlledInput
          name="confirmation_code"
          label={t("confirmationCode")}
          control={control}
          error={errors && errors.confirmation_code?.message}
          classNameField="resetPasswordField"
        />
        {pathname.includes("reset_password") && (
          <>
            <ControlledPassword
              name="current_password"
              label={t("currPassword")}
              control={control}
              error={
                errors &&
                (errors as FieldErrors<IResetPasswordInfo>).current_password
                  ?.message
              }
              lengthValue={
                watch("current_password") && watch("current_password").length
              }
              watch={watch}
              className="resetPasswordField"
            />
            <Box className="linkForgotPassword">
              <Link to={"/forgot_password/email"}>{t("forgotPassword")}</Link>
            </Box>
          </>
        )}
        <p className="titleResetPassword">{t("criteriaPassword")}</p>
        {passwordsFields.map((el, ind) => {
          return (
            <ControlledPassword
              key={ind}
              name={el.name}
              control={control}
              error={el.error}
              label={t(el.label)}
              lengthValue={
                watch(
                  el.name as Path<IResetPasswordInfo | ISetNewPasswordInfo>
                ) &&
                watch(el.name as Path<IResetPasswordInfo | ISetNewPasswordInfo>)
                  .length
              }
              watch={watch}
              className="resetPasswordField"
            />
          );
        })}
        <Box className="boxSubmitButton">
          <Button type="submit" disabled={isDisableButton}>
            {t("save")}
          </Button>
        </Box>
      </form>
    </>
  );
};

export default PasswordsForm;
