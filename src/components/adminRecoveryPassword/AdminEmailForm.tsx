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
import { useForm } from "react-hook-form";
import "./AdminRecoveryPassword.scss";

const AdminEmailForm = () => {
  const { t } = translate("translate", { keyPrefix: "adminSettingsPage" });

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required(t("errorRequiredField"))
      .email(t("errIncorrectEmail")),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<{ email: string }>({
    resolver: yupResolver(validationSchema),
  });

  const handleSubmitEmail = (data: { email: string }) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(handleSubmitEmail)} className="adminEmailForm">
      <p>{t("labelPassword")}</p>
      <Box className="controlledAdminBox">
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
      <Button type="submit" className="submitAdminEmailButton">
        {t("send")}
      </Button>
    </form>
  );
};

export default AdminEmailForm;
