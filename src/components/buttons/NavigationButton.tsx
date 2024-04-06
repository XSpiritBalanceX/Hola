import { Box, Button } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router-dom";
import "./Buttons.scss";

interface INavigationButtonProps {
  label: string;
  path: string;
}

const NavigationButton = ({ label, path }: INavigationButtonProps) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(path);
  };

  return (
    <Box className="navigationButtonBox">
      <Button type="button" onClick={handleNavigate}>
        <ArrowBackIosNewIcon />
      </Button>
      <p>{label}</p>
    </Box>
  );
};

export default NavigationButton;
