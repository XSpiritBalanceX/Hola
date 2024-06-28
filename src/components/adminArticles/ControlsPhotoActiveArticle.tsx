import { useState } from "react";
import { Box, Button } from "@mui/material";
import { translate } from "@i18n";
import { IControlsPhotoActiveArticleProps } from "./TypesAdminArticles";
import "./AdminArticles.scss";

const ControlsPhotoActiveArticle = ({
  photo,
}: IControlsPhotoActiveArticleProps) => {
  const { t } = translate("translate", { keyPrefix: "adminArticlesPage" });

  const [uploadPhoto, setUploadPhoto] = useState<File | null>(null);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    const newPhoto = files && files[0];
    setUploadPhoto(newPhoto);
  };

  const handleDeletePhoto = () => {
    setUploadPhoto(null);
  };

  return (
    <Box className="activeArticlePhotoBox">
      {photo || uploadPhoto ? (
        <img
          src={photo || URL.createObjectURL(uploadPhoto as File)}
          alt="article"
        />
      ) : (
        <Box className="emptyPhotoArticles" />
      )}
      <Box className="activeArticlesButtons">
        <label htmlFor={`file-input`} className="uploadButton">
          {t("uploadPhoto")}
        </label>
        <input
          type="file"
          id={`file-input`}
          onChange={handlePhotoUpload}
          style={{ display: "none" }}
        />
        <Button type="button" onClick={handleDeletePhoto}>
          {t("deletePhoto")}
        </Button>
      </Box>
    </Box>
  );
};

export default ControlsPhotoActiveArticle;
