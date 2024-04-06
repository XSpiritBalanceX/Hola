import { Button } from "@mui/material";
import { translate } from "@i18n";
import { useDeleteAvatarMutation } from "@store/profileInformationApi";
import { toast } from "react-toastify";
import BucketIcon from "@components/icons/BucketIcon";
import "@components/modal/Modals.scss";

interface IDeletePhotoButtonProps {
  cbCloseModal: () => void;
}

const DeletePhotoButton = ({ cbCloseModal }: IDeletePhotoButtonProps) => {
  const { t } = translate("translate", { keyPrefix: "modals.profilePhoto" });

  const [deleteAvatar] = useDeleteAvatarMutation();

  const handleDeleteAvatar = () => {
    deleteAvatar()
      .unwrap()
      .then(() => {
        cbCloseModal();
      })
      .catch(() => {
        toast.error(t("errPhoto"));
        cbCloseModal();
      });
  };

  return (
    <Button type="button" className="deleteButton" onClick={handleDeleteAvatar}>
      <BucketIcon fill="#B50000" />
      {t("delete")}
    </Button>
  );
};

export default DeletePhotoButton;
