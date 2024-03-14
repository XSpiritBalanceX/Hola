import MobileStepper from "@mui/material/MobileStepper";
import "./Stepper.scss";

interface IStepperProps {
  activeStep: number;
}

const Stepper = ({ activeStep }: IStepperProps) => {
  return (
    <MobileStepper
      variant="dots"
      steps={3}
      activeStep={activeStep}
      backButton={false}
      nextButton={false}
      className="customStepper"
      position={"static"}
    />
  );
};

export default Stepper;
