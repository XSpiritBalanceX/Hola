import { useState } from "react";
import { Box, Button } from "@mui/material";
import { translate } from "@i18n";
import "./AdminGeneralSettings.scss";

interface IAdminPhotoProps {
  admin_photo: string;
}

const AdminPhoto = ({ admin_photo }: IAdminPhotoProps) => {
  const { t } = translate("translate", { keyPrefix: "adminSettingsPage" });

  const [photo, setPhoto] = useState<File | null>(null);

  const handleUploadPhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    const newPhoto = files && files[0];
    setPhoto(newPhoto);
  };

  return (
    <Box className="adminPhotoBox">
      {!photo && <img src={admin_photo} alt="admin" />}
      {photo && <img src={URL.createObjectURL(photo)} alt="admin" />}
      <Box className="controlsPhotoBox">
        <label htmlFor="adminPhoto" className="uploadAdminPhoto">
          {t("uploadPhoto")}
        </label>
        <input
          type="file"
          id="adminPhoto"
          style={{ display: "none" }}
          onChange={handleUploadPhoto}
        />
        <Button type="button" className="deletePhoto">
          {t("deletePhoto")}
        </Button>
      </Box>
    </Box>
  );
};

export default AdminPhoto;
