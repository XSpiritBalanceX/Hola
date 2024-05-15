import { Modal, Box, Button } from "@mui/material";
import { translate } from "@i18n";
import heart from "@assets/hearticon.svg";
import { useDeleteAccountMutation } from "@store/requestApi/accountApi";
import { toast } from "react-toastify";
import { useAppDispatch } from "@store/hook";
import { loginUser } from "@store/holaSlice";
import { useNavigate } from "react-router-dom";
import "./Modals.scss";

interface IDeleteAccountModalProps {
  isOpen: boolean;
  cbCloseModal: (name: string, isShow: boolean) => void;
}

const DeleteAccountModal = ({
  isOpen,
  cbCloseModal,
}: IDeleteAccountModalProps) => {
  const { t } = translate("translate", { keyPrefix: "modals.account" });
  const userID = localStorage.getItem("hola_user_id");

  const [deleteAccount] = useDeleteAccountMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleCloseModalDelete = () => {
    cbCloseModal("delete", false);
  };

  const handleDeleteAccount = () => {
    deleteAccount(userID || "")
      .unwrap()
      .then(() => {
        dispatch(
          loginUser({
            isLogin: false,
            token: "",
            expiresIn: 0,
            email: "",
            refreshToken: "",
            user_id: "",
          })
        );
        navigate("/login");
      })
      .catch(() => {
        toast.error(t("errDeleteAcc"));
        cbCloseModal("delete", false);
      });
  };

  return (
    <Modal open={isOpen} className="modalContainerDeleteAccount">
      <Box className="contentDeleteAccount">
        <img src={heart} alt="heart" />
        <p className="titleModal">{t("label")}</p>
        <Box className="boxWithButtons">
          <Button
            className="closeButton"
            type="button"
            onClick={handleCloseModalDelete}
          >
            {t("close")}
          </Button>
          <Button
            className="deleteButton"
            type="button"
            onClick={handleDeleteAccount}
          >
            {t("delete")}
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default DeleteAccountModal;
