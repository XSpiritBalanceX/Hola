import { useState } from "react";
import { Box, Button } from "@mui/material";
import { translate } from "@i18n";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import { useLocation } from "react-router-dom";
import "./UserPhotos.scss";

const UserPhotos = () => {
  const { t } = translate("translate", { keyPrefix: "signUp.photos" });
  const { pathname } = useLocation();

  const [photos, setPhotos] = useState(Array(9).fill(null));

  const handlePhotoUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const files = e.target.files;
    const newPhoto = files && files[0];
    setPhotos((prevPhotos) => {
      const updatedPhotos = [...prevPhotos];
      updatedPhotos[index] = newPhoto;
      return updatedPhotos;
    });
  };

  const handlePhotoDelete = (index: number) => {
    setPhotos((prevPhotos) => {
      const updatedPhotos = [...prevPhotos];
      updatedPhotos[index] = null;
      return updatedPhotos;
    });
  };

  const isDisabledButton = photos.some((el) => el !== null);

  return (
    <Box className="userPhotosBox">
      {pathname.includes("registration") && (
        <p className="titlePhotos">{t("addPhotos")}</p>
      )}
      <Box className="itemsPhotosBox">
        {photos.map((photo, ind) => {
          return (
            <Box
              key={ind}
              className={`itemPhoto ${photo ? "withPhoto" : "withoutPhoto"}`}
            >
              {photo ? (
                <>
                  <img
                    src={URL.createObjectURL(photo)}
                    alt={`Photo_${ind + 1}`}
                  />
                  <Button
                    type="button"
                    onClick={() => handlePhotoDelete(ind)}
                    className="deletePhotoButton"
                  >
                    <CloseIcon />
                  </Button>
                </>
              ) : (
                <>
                  <label htmlFor={`file-input-${ind}`}>
                    <AddIcon />
                  </label>
                  <input
                    type="file"
                    id={`file-input-${ind}`}
                    onChange={(e) => handlePhotoUpload(e, ind)}
                  />
                </>
              )}
            </Box>
          );
        })}
      </Box>
      <Button
        type="button"
        className="savePhotosButton"
        disabled={!isDisabledButton}
      >
        {t("next")}
      </Button>
    </Box>
  );
};

export default UserPhotos;
