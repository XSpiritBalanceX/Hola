import { useState, useEffect } from "react";
import { Box, Container, Button } from "@mui/material";
import Stepper from "@components/stepper/Stepper";
import { useLocation } from "react-router-dom";
import { translate } from "@i18n";
import PersonalInfo from "@components/personalInfo/PersonalInfo";
import "./SignUp.scss";

const SignUp = () => {
  const { pathname } = useLocation();
  const [activeStep, setActiveStep] = useState(0);
  const { t } = translate("translate", { keyPrefix: "signUp" });

  const steps = [
    { path: "/registration/info", element: <PersonalInfo />, step: 0 },
    { path: "/registration/interests", element: <div>interests</div>, step: 1 },
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
        {pathname !== steps[0].path && (
          <Button type="button" className="skipStepButton">
            {t("skip")}
          </Button>
        )}
      </Box>
      {steps[activeStep].element}
    </Container>
  );
};

export default SignUp;
