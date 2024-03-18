import { useState, useEffect } from "react";
import { Box, Container } from "@mui/material";
import Stepper from "@components/stepper/Stepper";
import { useLocation } from "react-router-dom";
import PersonalInfo from "@components/personalInfo/PersonalInfo";
import UserInterests from "@components/userInterests/UserInterests";
import UserPhotos from "@components/userPhotos/UserPhotos";
import SkipButton from "./SkipButton";
import RegistrationModal from "@components/modal/RegistrationModal";
import "./SignUp.scss";

const SignUp = () => {
  const { pathname } = useLocation();
  const [activeStep, setActiveStep] = useState(0);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  const steps = [
    { path: "/registration/info", element: <PersonalInfo />, step: 0 },
    { path: "/registration/interests", element: <UserInterests />, step: 1 },
    {
      path: "/registration/photos",
      element: <UserPhotos cbHandleOpenModal={handleOpenModal} />,
      step: 2,
    },
  ];

  useEffect(() => {
    const currentStep = steps.find((el) => el.path === pathname);
    setActiveStep(currentStep?.step as number);
    // eslint-disable-next-line
  }, [pathname]);

  return (
    <Container className="signUpContainer">
      <RegistrationModal isOpen={isOpenModal} cbCloseModal={handleCloseModal} />
      <Box className="stepperButtonBox">
        <Stepper activeStep={activeStep} />
        {pathname !== steps[0].path && <SkipButton pathname={pathname} />}
      </Box>
      {steps[activeStep].element}
    </Container>
  );
};

export default SignUp;
