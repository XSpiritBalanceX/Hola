import { Box, Button, Modal } from "@mui/material";
import user from "@assets/user.png";
import { translate } from "@i18n";
import LikeFilledIcon from "@components/icons/LikeFilledIcon";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import "./Modals.scss";
import "animate.css";

interface IMatchModalProps {
  isOpen: boolean;
  cbCloseModal: () => void;
  id_partner: number;
  partner_photo: string;
  user_photo: string | null | undefined;
}

const MatchModal = ({
  isOpen,
  cbCloseModal,
  id_partner,
  partner_photo,
  user_photo,
}: IMatchModalProps) => {
  const { t } = translate("translate", { keyPrefix: "searchPage" });
  const navigate = useNavigate();

  const handleCloseModal = () => {
    cbCloseModal();
  };

  const handleViewProfile = () => {
    navigate(`/search/user/${id_partner}`);
  };

  return (
    <Modal
      open={isOpen}
      onClose={handleCloseModal}
      className="modalContainerProfilePhoto"
    >
      <Box className="contentMatchModalBox">
        <Box className="closeModalButton">
          <Button type="button" onClick={handleCloseModal}>
            <CloseIcon />
          </Button>
        </Box>
        <Box className="matchUsersBox">
          <Box className="containerUsersPhoto animate__animated animate__zoomIn">
            <p>{t("itsMatch")}</p>
            <Box className="boxWithBlurring" />
            {Array(14)
              .fill(null)
              .map((_, ind) => (
                <Box key={ind} className={`likeIcon likeIcon_${ind + 1}`}>
                  <LikeFilledIcon fill="#554cb6" />
                </Box>
              ))}
            <img src={user_photo || user} alt="user_1" className="userPhoto1" />
            <img
              src={partner_photo || user}
              alt="user_2"
              className="userPhoto2"
            />
          </Box>
          <Button type="button" className="controlButtonMatch firstButton">
            {t("sendMessage")}
          </Button>
          <Button
            type="button"
            className="controlButtonMatch"
            onClick={handleViewProfile}
          >
            {t("viewProfile")}
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default MatchModal;
