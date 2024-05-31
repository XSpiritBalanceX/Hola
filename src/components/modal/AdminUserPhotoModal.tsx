import { useState, useEffect } from "react";
import { Modal, Button, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import "./Modals.scss";

interface IAdminUserPhotoModalProps {
  isOpen: boolean;
  cbCloseModal: () => void;
  userPhotos: string[];
  currentPhoto: number;
}

const AdminUserPhotoModal = ({
  isOpen,
  cbCloseModal,
  userPhotos,
  currentPhoto,
}: IAdminUserPhotoModalProps) => {
  const [activePhoto, setActivePhoto] = useState(currentPhoto);

  useEffect(() => {
    setActivePhoto(currentPhoto);
    // eslint-disable-next-line
  }, [currentPhoto]);

  const handleCloseModal = () => {
    cbCloseModal();
  };

  const handlePhotos = (e: React.MouseEvent<HTMLButtonElement>) => {
    const buttonName = e.currentTarget.name;
    if (buttonName === "previous") {
      activePhoto !== 0 && setActivePhoto(activePhoto - 1);
    } else if (buttonName === "next") {
      activePhoto < userPhotos.length - 1 && setActivePhoto(activePhoto + 1);
    }
  };

  return (
    <Modal
      open={isOpen}
      onClose={handleCloseModal}
      className="modalAdminUserPhotos"
    >
      <Box className="contentAdminUserPhotosBox">
        <Box className="controlBox">
          <Button type="button" onClick={handleCloseModal}>
            <CloseIcon />
          </Button>
        </Box>
        <Box className="adminUserPhotoBox">
          <Button
            type="button"
            name="previous"
            onClick={handlePhotos}
            className="controlButtonPhoto"
          >
            <ArrowBackIosNewIcon />
          </Button>
          <Box className="countOfPhotosBox">
            {userPhotos.map((_, ind) => (
              <Box
                key={ind}
                className={`countOfPhotos ${
                  ind === activePhoto ? "activePhoto" : ""
                }`}
              />
            ))}
          </Box>
          <img src={userPhotos[activePhoto]} alt="user" />
          <Button
            type="button"
            name="next"
            onClick={handlePhotos}
            className="controlButtonPhoto"
          >
            <ArrowForwardIosRoundedIcon />
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default AdminUserPhotoModal;
