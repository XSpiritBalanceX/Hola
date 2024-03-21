import { useEffect, useState } from "react";
import { Container, Button, Box } from "@mui/material";
import { useParams, useNavigate } from "react-router";
import { translate } from "@i18n";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import UserInterests from "@components/userInterests/UserInterests";
import MainEditProfile from "./MainEditProfile";
import Loader from "@components/loader/Loader";
import CustomError from "@components/error/CustomError";
import { useGetProfileQuery } from "@store/profileApi";
import { listOfInterests } from "@utils/listOfInterests";
import "./EditProfile.scss";

const EditProfilePage = () => {
  const { t } = translate("translate", { keyPrefix: "profile.editing" });

  const { data, error, isLoading } = useGetProfileQuery();

  const [userInterests, setUserInterests] = useState<
    { indInt: number; label: string }[]
  >([]);

  useEffect(() => {
    if (data) {
      const matchingInterests = listOfInterests
        .filter((el) => data.interests.some((item) => item.id === el.indInt))
        .map((interest) => ({
          indInt: interest.indInt,
          label: interest.label,
        }));
      setUserInterests(matchingInterests);
    }
    // eslint-disable-next-line
  }, [data]);

  const { step } = useParams();
  const navigate = useNavigate();

  const handleNavigate = () => {
    !step && navigate("/profile");
    step && navigate("/profile/edit");
  };

  return (
    <>
      <Loader isLoading={isLoading} />
      {error ? (
        <CustomError />
      ) : (
        <Container className="containerEditProfile">
          {data && (
            <>
              <Box className="navigationEditProfile">
                <Button type="button" onClick={handleNavigate}>
                  <ArrowBackIosNewIcon />
                </Button>
                <p>{t("editProfile")}</p>
              </Box>
              {!step && (
                <MainEditProfile
                  user_description={data.description || ""}
                  user_interests={userInterests}
                />
              )}
              {step === "interests" && <UserInterests />}
            </>
          )}
        </Container>
      )}
    </>
  );
};

export default EditProfilePage;
