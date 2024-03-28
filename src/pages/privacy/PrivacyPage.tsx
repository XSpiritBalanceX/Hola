import { Container, Box, Button } from "@mui/material";
import { useNavigate } from "react-router";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { translate } from "@i18n";
import "./PrivacyPage.scss";

const PrivacyPage = () => {
  const { t } = translate("translate", { keyPrefix: "privacyPage" });
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/profile");
  };

  return (
    <Container className="containerPrivacyPage">
      <Box className="navigationPrivacyPage">
        <Button type="button" onClick={handleNavigate}>
          <ArrowBackIosNewIcon />
        </Button>
        <p>{t("privacy")}</p>
      </Box>
      <p>
        Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis
        molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
        fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
        elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
        lectus. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Praesent auctor purus luctus enim
        egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse
        ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi
        convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
        Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque
        quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo
        vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex eu
        vestibulum vestibulum. Morbi a eleifend magna. Nam metus lacus,
        porttitor eu mauris a, blandit ultrices nibh. Mauris sit amet magna non
        ligula vestibulum eleifend. Nulla varius volutpat turpis sed lacinia.
      </p>
    </Container>
  );
};

export default PrivacyPage;
