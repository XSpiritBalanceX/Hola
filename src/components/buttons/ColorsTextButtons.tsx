import { Box, Button } from "@mui/material";
import "./Buttons.scss";

interface IColorsTextButtonsProps {
  colors: string[];
  cbHandleSelectedColor: (color: string) => void;
  cbHandleApplyChangesText: () => void;
}

const ColorsTextButtons = ({
  colors,
  cbHandleSelectedColor,
  cbHandleApplyChangesText,
}: IColorsTextButtonsProps) => {
  const handleColor = (e: React.MouseEvent<HTMLButtonElement>) => {
    cbHandleSelectedColor(e.currentTarget.name);
  };

  const handleApply = () => {
    cbHandleApplyChangesText();
  };

  return (
    <Box className="textColorsContainer">
      {colors.map((el, ind) => (
        <Button
          type="button"
          key={ind}
          style={{ backgroundColor: el }}
          name={el}
          onClick={handleColor}
          className="colorButton"
        />
      ))}
      <Button
        type="button"
        className="controlColorButton"
        onClick={handleApply}
      >
        Ok
      </Button>
    </Box>
  );
};

export default ColorsTextButtons;
