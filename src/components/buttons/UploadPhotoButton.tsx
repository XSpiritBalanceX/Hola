import { useState } from "react";
import { Box, Button } from "@mui/material";
import { translate } from "@i18n";
import PictureIcon from "@components/icons/PictureIcon";
import { useUploadAvatarMutation } from "@store/requestApi/profileInformationApi";
import { toast } from "react-toastify";
import "@components/modal/Modals.scss";

interface IUploadPhotoButtonProps {
  cbCloseModal: () => void;
}

const UploadPhotoButton = ({ cbCloseModal }: IUploadPhotoButtonProps) => {
  const { t } = translate("translate", { keyPrefix: "modals.profilePhoto" });
  const [photo, setPhoto] = useState<File | null>(null);

  const [uploadAvatar] = useUploadAvatarMutation();

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    const newPhoto = files && files[0];
    setPhoto(newPhoto);
  };

  const handleSavePhoto = () => {
    if (photo) {
      const formData = new FormData();
      formData.append("avatar", photo);
      uploadAvatar(formData)
        .unwrap()
        .then(() => {
          cbCloseModal();
        })
        .catch(() => {
          toast.error(t("errPhoto"));
          cbCloseModal();
        });
    }
  };

  const handleClose = () => {
    setPhoto(null);
  };

  return (
    <>
      {photo && (
        <Box className="boxWithUserUploadPhoto">
          <img
            src={URL.createObjectURL(photo)}
            alt="user"
            className="userUploadPicture"
          />
          <Box className="buttonsUploadPhotoBox">
            <Button type="button" onClick={handleSavePhoto}>
              {t("save")}
            </Button>
            <Button type="button" onClick={handleClose}>
              {t("close")}
            </Button>
          </Box>
        </Box>
      )}
      <label htmlFor={`file-input`}>
        <PictureIcon fill="black" /> {t("upload")}
      </label>
      <input type="file" id={`file-input`} onChange={handlePhotoUpload} />
    </>
  );
};

export default UploadPhotoButton;
