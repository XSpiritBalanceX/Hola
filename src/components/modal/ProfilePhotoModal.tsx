import { Modal, Box, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { translate } from "@i18n";
import TakePhotoButton from "@components/buttons/TakePhotoButton";
import UploadPhotoButton from "@components/buttons/UploadPhotoButton";
import DeletePhotoButton from "@components/buttons/DeletePhotoButton";
import "./Modals.scss";

interface IProfilePhotoModalProps {
  isOpen: boolean;
  cbCloseModal: () => void;
}

const ProfilePhotoModal = ({
  isOpen,
  cbCloseModal,
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
          <UploadPhotoButton cbCloseModal={handleCloseModal} />
          <TakePhotoButton cbCloseModal={handleCloseModal} />
          <DeletePhotoButton cbCloseModal={handleCloseModal} />
        </Box>
      </Box>
    </Modal>
  );
};

export default ProfilePhotoModal;
