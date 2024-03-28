import { useState, useEffect } from "react";
import { Box, Button } from "@mui/material";
import { IPasswordsFormProps, IResetPasswordInfo } from "./TypesResetForm";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Path, useForm } from "react-hook-form";
import { translate } from "@i18n";
import ControlledPassword from "@components/fields/ControlledPassword";
import ControlledInput from "@components/fields/ControlledInput";
import { Link } from "react-router-dom";
import "./ResetForm.scss";

const PasswordsForm = ({ cbHandleSavePassword }: IPasswordsFormProps) => {
  const { t } = translate("translate", { keyPrefix: "resetPasswordPage" });

  const [isDisableButton, setIsDisableButton] = useState(true);

  const validationSchema = Yup.object().shape({
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

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IResetPasswordInfo>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmitResetPassword = (data: IResetPasswordInfo) => {
    console.log(data);
  };

  useEffect(() => {
    if (watch()) {
      const valuesPersonalInfo = [];
      for (const key in watch()) {
        valuesPersonalInfo.push(watch(key as Path<IResetPasswordInfo>));
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
      <ControlledPassword
        name="current_password"
        label={t("currPassword")}
        control={control}
        error={errors && errors.current_password?.message}
        lengthValue={
          watch("current_password") && watch("current_password").length
        }
        watch={watch}
        className="resetPasswordField"
      />
      <Box className="linkForgotPassword">
        <Link to={"/forgot_password"}>{t("forgotPassword")}</Link>
      </Box>
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
              watch(el.name as Path<IResetPasswordInfo>) &&
              watch(el.name as Path<IResetPasswordInfo>).length
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
  );
};

export default PasswordsForm;
