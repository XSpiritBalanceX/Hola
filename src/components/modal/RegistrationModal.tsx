import { Modal, Box, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { translate } from "@i18n";
import "./Modals.scss";

interface IRegistrationModalProps {
  isOpen: boolean;
  cbCloseModal: () => void;
}

const RegistrationModal = ({
  isOpen,
  cbCloseModal,
}: IRegistrationModalProps) => {
  const { t } = translate("translate", { keyPrefix: "modals.registration" });
  const emailUser = localStorage.getItem("hola_login");

  const siteEmail = [
    {
      email: "gmail.com",
      site: "https://mail.google.com/",
    },
    {
      email: "mail.ru",
      site: "https://e.mail.ru/inbox/",
    },
    {
      email: "yandex.by",
      site: "https://mail.yandex.by/",
    },
    {
      email: "yandex.ru",
      site: "https://mail.yandex.ru/",
    },
  ];

  const handleCloseModal = () => {
    cbCloseModal();
  };

  const handleOpenMain = () => {
    // window.location.href = `mailto:${emailUser}`;
    const foundUserEmail = siteEmail.find((el) =>
      emailUser?.includes(el.email)
    );
    window.open(foundUserEmail?.site, "_blank");
  };

  return (
    <Modal open={isOpen} className="modalContainerRegistration">
      <Box className="contentRegistrationModalBox">
        <Box className="closeModalButton">
          <Button type="button" onClick={handleCloseModal}>
            <CloseIcon />
          </Button>
        </Box>
        <Box className="contentRegistrationModal">
          <CheckCircleOutlineIcon className="iconModal" />
          <p className="mainTitleModal">{t("mainTitle")}</p>
          <p className="titleModal">{t("title")}</p>
          <p className="userEmail">{emailUser}</p>
          <Button
            type="button"
            onClick={handleOpenMain}
            className="buttonOpenEmail"
          >
            {t("button")}
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default RegistrationModal;
