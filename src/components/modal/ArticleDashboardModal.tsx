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
}

const ArticleDashboardModal = ({
  isOpen,
  title,
  image,
  text,
  cbHandleClose,
}: IArticleDashboardModalProps) => {
  const { t } = translate("translate", { keyPrefix: "dashboardPage" });

  const handleClose = () => {
    cbHandleClose(false);
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
          <img src={image} alt="article" />
        </Box>
        <DialogContentText className="articleText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          molestie efficitur massa non lacinia. Morbi ac quam non magna
          fermentum consequat. Sed erat augue, varius eget justo et, posuere
          faucibus turpis. Sed faucibus, nunc sodales aliquet scelerisque, dui
          risus finibus erat, at gravida quam lacus eget mi. Suspendisse
          condimentum nisi ac metus auctor, ac ultricies ex euismod. Aenean quis
          semper lorem. Aenean vulputate tempus felis, rhoncus dapibus diam
          elementum convallis. Praesent imperdiet tellus odio, quis dapibus nisi
          eleifend quis. Praesent sit amet ipsum purus. Donec tristique
          efficitur nisi vitae fermentum. Cras laoreet porttitor leo quis
          dapibus. Nullam sollicitudin tortor non dictum commodo. Cras laoreet
          semper tempus. Pellentesque venenatis odio massa, a semper dui
          bibendum nec. Duis ultrices condimentum arcu, quis bibendum ipsum
          lobortis ac. Curabitur nulla elit, accumsan id diam ac, feugiat
          blandit leo. Sed tristique egestas ipsum non cursus. Praesent semper
          massa eget tortor vestibulum, ac egestas augue consequat. Sed
          scelerisque posuere risus ut faucibus. Vestibulum ut tempus nisl, in
          iaculis augue. Integer tortor ex, bibendum a eleifend in, fermentum ac
          libero. Ut leo magna, finibus et eros quis, aliquam mattis sem.
          Suspendisse finibus, nisl a auctor maximus, magna massa cursus elit,
          nec pharetra ex elit vitae sem. Aliquam ante nunc, venenatis in
          tincidunt sed, imperdiet quis urna. Mauris finibus felis non tincidunt
          finibus. Maecenas hendrerit enim dolor, lacinia eleifend ante
          malesuada non. Integer sed sem sed nibh ultrices lacinia. Aenean
          tincidunt diam sit amet auctor laoreet. Praesent a tortor consectetur,
          consequat nibh sagittis, dignissim ex. Mauris pellentesque, mi
          sagittis dictum semper, ipsum metus fermentum nunc, id fringilla nulla
          nibh dignissim massa. Sed libero quam, pretium ut nisi eget, tempus
          eleifend tellus. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus. Maecenas vehicula enim
          vestibulum eros sollicitudin vestibulum. Praesent tincidunt justo
          massa, et auctor arcu commodo sed. Morbi lobortis pharetra tellus, eu
          suscipit ligula tempus nec. Fusce finibus rhoncus neque quis commodo.
          Donec bibendum nisl ut mi vehicula mollis. Etiam a viverra lectus.
          Duis a tortor vitae enim elementum eleifend in quis dui. In in
          tincidunt tortor, vitae rhoncus odio. Phasellus eu nunc augue. Etiam
          quis dapibus lectus. Duis volutpat lacus elit, non vehicula justo
          molestie in. Aliquam vestibulum pharetra nulla, quis mollis arcu
          egestas non.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
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
