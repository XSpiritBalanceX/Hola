import { useState, useEffect } from "react";
import { Box, Button } from "@mui/material";
import { translate } from "@i18n";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import { useLocation } from "react-router-dom";
import Loader from "@components/loader/Loader";
import { toast } from "react-toastify";
import { addImage } from "@api/image/addImage";
import classNames from "classnames";
import { useAppSelector } from "@store/hook";
import * as holaSelectors from "@store/selectors";
import { HOST } from "@axiosApi/axiosAPI";
import "./UserPhotos.scss";

interface IUserPhotosProps {
  cbHandleOpenModal?: () => void;
}

const UserPhotos = ({ cbHandleOpenModal }: IUserPhotosProps) => {
  const { t } = translate("translate", { keyPrefix: "signUp.photos" });
  const { pathname } = useLocation();
  const userPhotos = useAppSelector(holaSelectors.profileEditSelect);

  const [photos, setPhotos] = useState(Array(9).fill(null));
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (userPhotos) {
      const compiledDataPhotos = Array.from({ length: 9 }, (_, ind) => {
        if (ind < userPhotos.images.length && userPhotos.images[ind].file) {
          return userPhotos.images[ind].file.replace("minio", HOST);
        } else {
          return null;
        }
      });
      setPhotos(compiledDataPhotos);
    }
    // eslint-disable-next-line
  }, [userPhotos]);

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

  const handleSavePhoto = async () => {
    try {
      setLoading(true);
      const formData = new FormData();
      photos.forEach((el) => {
        if (el) {
          formData.append("file", el);
        }
      });
      const userID = localStorage.getItem("hola_user_id");
      formData.append("person", userID!);
      const response = await addImage(formData);
      if (response.data.detail === "ok") {
        pathname.includes("registration") &&
          cbHandleOpenModal &&
          cbHandleOpenModal();
      }
    } catch (err) {
      toast.error(t("errPhotos"));
    } finally {
      setLoading(false);
    }
  };

  const isDisabledButton = photos.some((el) => el !== null);

  const classButton: string = classNames("savePhotosButton", {
    registrationPart: pathname.includes("registration"),
  });

  return (
    <Box className="userPhotosBox">
      <Loader isLoading={loading} />
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
                    src={
                      typeof photo === "string"
                        ? photo
                        : URL.createObjectURL(photo)
                    }
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
        className={classButton}
        disabled={!isDisabledButton}
        onClick={handleSavePhoto}
      >
        {pathname.includes("registration") ? t("next") : t("save")}
      </Button>
    </Box>
  );
};

export default UserPhotos;
