import { useState, useEffect } from "react";
import { Box, Container } from "@mui/material";
import Stepper from "@components/stepper/Stepper";
import { useLocation } from "react-router-dom";
import PersonalInfo from "@components/personalInfo/PersonalInfo";
import UserInterests from "@components/userInterests/UserInterests";
import SkipButton from "./SkipButton";
import "./SignUp.scss";

const SignUp = () => {
  const { pathname } = useLocation();
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { path: "/registration/info", element: <PersonalInfo />, step: 0 },
    { path: "/registration/interests", element: <UserInterests />, step: 1 },
    { path: "/registration/photos", element: <div>photos</div>, step: 2 },
  ];

  useEffect(() => {
    const currentStep = steps.find((el) => el.path === pathname);
    setActiveStep(currentStep?.step as number);
    // eslint-disable-next-line
  }, [pathname]);

  return (
    <Container className="signUpContainer">
      <Box className="stepperButtonBox">
        <Stepper activeStep={activeStep} />
        {pathname !== steps[0].path && <SkipButton pathname={pathname} />}
      </Box>
      {steps[activeStep].element}
    </Container>
  );
};

export default SignUp;
