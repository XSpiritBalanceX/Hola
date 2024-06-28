import { useState } from "react";
import { Box, Button, FormLabel, FormHelperText } from "@mui/material";
import { translate } from "@i18n";
import { IAdminArticleChangeProps } from "./TypesAdminArticles";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import ControlledInput from "@components/fields/ControlledInput";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import "./AdminArticles.scss";

const AdminArticleChange = ({ article }: IAdminArticleChangeProps) => {
  const { t } = translate("translate", { keyPrefix: "adminArticlesPage" });

  const [articlePhoto, setArticlePhoto] = useState<string | File | null>(
    article?.photo || ""
  );

  const validationSchema = Yup.object().shape({
    title: Yup.string().required(t("errorRequiredField")),
    text: Yup.string().required(t("errorRequiredField")),
  });

  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<{ title: string; text: string }>({
    resolver: yupResolver(validationSchema),
    values: article && { title: article.title, text: article.text },
  });

  const handleSubmitArticle = (data: { title: string; text: string }) => {
    console.log(data);
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    const newPhoto = files && files[0];
    setArticlePhoto(newPhoto);
  };

  return (
    <Box className="changeArticleBox">
      <Box className="articlePhotoBox">
        <FormLabel className="labelArticle">{t("cover")}</FormLabel>
        {articlePhoto && (
          <img
            src={
              articlePhoto instanceof File
                ? URL.createObjectURL(articlePhoto)
                : articlePhoto
            }
            alt="article"
          />
        )}
        {!articlePhoto && (
          <Box>
            <label htmlFor={`file-input`} className="uploadArticlePhotoLabel">
              <FileUploadOutlinedIcon />
              {t("upload")}
            </label>
            <input
              type="file"
              id={`file-input`}
              onChange={handlePhotoUpload}
              style={{ display: "none" }}
            />
          </Box>
        )}
      </Box>
      <form onSubmit={handleSubmit(handleSubmitArticle)}>
        <Box className="controlArticleBox">
          <FormLabel
            className={`labelArticle ${
              errors.title ? "errorLabelArticle" : ""
            }`}
          >
            {t("title")}
          </FormLabel>
          <ControlledInput
            name="title"
            control={control}
            label=""
            error={errors && errors.title?.message}
            classNameField="articleField"
          />
        </Box>
        <Box className="controlArticleBox">
          <FormLabel
            className={`labelArticle ${errors.text ? "errorLabelArticle" : ""}`}
          >
            {t("text")}
          </FormLabel>
          <textarea
            {...register("text")}
            className={`articleField textAreaArticle ${
              errors.text ? "errorTextArea" : ""
            }`}
          />
          <FormHelperText className="errorMessage">
            {errors && errors.text?.message}
          </FormHelperText>
        </Box>
        <Button type="submit" className="submitArticleButton">
          {t("publish")}
        </Button>
      </form>
    </Box>
  );
};

export default AdminArticleChange;
