import { Container, Button, Box } from "@mui/material";
import { useParams, useNavigate } from "react-router";
import { translate } from "@i18n";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import UserInterests from "@components/userInterests/UserInterests";
import MainEditProfile from "./MainEditProfile";

const mockData = {
  user_description: "some text with description about user",
  user_interests: ["Coffee", "Walking", "Art"],
};

const EditProfilePage = () => {
  const { t } = translate("translate", { keyPrefix: "profile.editing" });

  const { step } = useParams();
  const navigate = useNavigate();

  const handleNavigate = () => {
    !step && navigate("/profile");
    step && navigate("/profile/edit");
  };

  return (
    <Container>
      <Box>
        <Button type="button" onClick={handleNavigate}>
          <ArrowBackIosNewIcon />
        </Button>
        <p>{t("editProfile")}</p>
      </Box>
      {!step && (
        <MainEditProfile
          user_description={mockData.user_description}
          user_interests={mockData.user_interests}
        />
      )}
      {step === "interests" && <UserInterests />}
    </Container>
  );
};

export default EditProfilePage;
