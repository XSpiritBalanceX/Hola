import { Box, Button } from "@mui/material";
import { IEmailInformation } from "./TypesResetForm";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { translate } from "@i18n";
import ControlledInput from "@components/fields/ControlledInput";
import { useLocation } from "react-router-dom";
import { sendLetterReset } from "@api/password_reset/sendLetterReset";
import "./ResetForm.scss";

const EmailForm = () => {
  const { t } = translate("translate", { keyPrefix: "resetPasswordPage" });
  const { pathname } = useLocation();

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required(t("errorRequiredEmail"))
      .email(t("errIncorrectEmail")),
  });

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IEmailInformation>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmitEmail = async (data: IEmailInformation) => {
    if (pathname.includes("reset_password")) {
      try {
        const response = await sendLetterReset(data.email);
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    }
  };

  const isDisableButton = watch("email") && watch("email").length;

  return (
    <form onSubmit={handleSubmit(onSubmitEmail)} className="formEmail">
      <p className="title">{t("titleForEmail")}</p>
      <ControlledInput
        name="email"
        control={control}
        label={t("email")}
        error={errors.email?.message}
        classNameField="emailField"
      />
      <Box className="boxSubmitButton">
        <Button type="submit" disabled={!isDisableButton}>
          {t("send")}
        </Button>
      </Box>
    </form>
  );
};

export default EmailForm;
