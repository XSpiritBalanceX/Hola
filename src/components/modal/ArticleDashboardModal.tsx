import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  Box,
} from "@mui/material";
import { translate } from "@i18n";
import "./Modals.scss";

interface IArticleDashboardModalProps {
  isOpen: boolean;
  title: string;
  image: string;
  text: string;
  cbHandleClose: (value: boolean) => void;
  labelAdmin?: string;
  cbHandleActivateArticle?: () => void;
}

const ArticleDashboardModal = ({
  isOpen,
  title,
  image,
  text,
  cbHandleClose,
  labelAdmin,
  cbHandleActivateArticle,
}: IArticleDashboardModalProps) => {
  const { t } = translate("translate", { keyPrefix: "dashboardPage" });

  const handleClose = () => {
    cbHandleClose(false);
  };

  const handleActivateArticle = () => {
    cbHandleActivateArticle && cbHandleActivateArticle();
  };

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      scroll={"paper"}
      className="articleModal"
    >
      <DialogTitle className="articleTitle">{title}</DialogTitle>
      <DialogContent dividers={true} className="articleContent">
        <Box className="articleImage">
          {image && <img src={image} alt="article" />}
        </Box>
        <DialogContentText className="articleText">{text}</DialogContentText>
      </DialogContent>
      <DialogActions>
        {labelAdmin && (
          <Button
            type="button"
            onClick={handleActivateArticle}
            className="activateArticleButton"
          >
            {labelAdmin}
          </Button>
        )}
        <Button
          type="button"
          onClick={handleClose}
          className="closeArticleButton"
        >
          {t("cancel")}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ArticleDashboardModal;
