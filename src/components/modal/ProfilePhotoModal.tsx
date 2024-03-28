import { Modal, Box, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { translate } from "@i18n";
import PictureIcon from "@components/icons/PictureIcon";
import BucketIcon from "@components/icons/BucketIcon";
import TakePhotoButton from "@components/buttons/TakePhotoButton";
import "./Modals.scss";

interface IProfilePhotoModalProps {
  isOpen: boolean;
  cbCloseModal: () => void;
  cbHandleSnapshot: (photo: string) => void;
}

const ProfilePhotoModal = ({
  isOpen,
  cbCloseModal,
  cbHandleSnapshot,
}: IProfilePhotoModalProps) => {
  const { t } = translate("translate", { keyPrefix: "modals.profilePhoto" });

  const handleCloseModal = () => {
    cbCloseModal();
  };

  return (
    <Modal
      open={isOpen}
      onClose={handleCloseModal}
      className="modalContainerProfilePhoto"
    >
      <Box className="contentProfilePhotoModalBox">
        <Box className="closeModalButton">
          <Button type="button" onClick={handleCloseModal}>
            <CloseIcon />
          </Button>
        </Box>
        <Box className="contentProfilePhotoModal">
          <p className="titleModal">{t("profilePhoto")}</p>
          <Button type="button">
            <PictureIcon fill="black" />
            {t("upload")}
          </Button>
          <TakePhotoButton
            cbCloseModal={handleCloseModal}
            cbHandleSnapshot={cbHandleSnapshot}
          />
          <Button type="button" className="deleteButton">
            <BucketIcon fill="#B50000" />
            {t("delete")}
          </Button>
        </Box>{" "}
      </Box>
    </Modal>
  );
};

export default ProfilePhotoModal;
