import { useState } from "react";
import {
  OutlinedInput,
  InputAdornment,
  FormHelperText,
  Box,
  IconButton,
  InputLabel,
  FormControl,
  List,
  ListItem,
  ListItemIcon,
} from "@mui/material";
import {
  Controller,
  Control,
  FieldValues,
  Path,
  PathValue,
  UseFormWatch,
} from "react-hook-form";
import classNames from "classnames";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";
import CheckIcon from "@mui/icons-material/Check";
import CircleIcon from "@mui/icons-material/Circle";
import { translate } from "@i18n";
import "./Fields.scss";

interface IControlledPasswordProps<T extends FieldValues> {
  name: string;
  control: Control<T>;
  label?: string;
  error: React.ReactNode;
  className?: string;
  lengthValue: number | string;
  watch: UseFormWatch<T>;
}

const ControlledPassword = <T extends FieldValues>({
  name,
  control,
  label,
  error,
  className,
  lengthValue,
  watch,
}: IControlledPasswordProps<T>) => {
  const { t } = translate("translate", { keyPrefix: "passwordHints" });
  const [showPassword, setShowPassword] = useState(false);
  const [isFocusedInput, setIsFocusedInput] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleShowHints = () => {
    setIsFocusedInput(true);
  };

  const handleHideHints = () => {
    setIsFocusedInput(false);
  };

  const classBoxInput: string = classNames("controlledFieldBox", {
    errorField: error,
  });

  const classPasswordInput: string = classNames("passwordField", {
    errorField: error,
    [className as string]: className,
  });

  const rulesValidation = [
    {
      rule:
        typeof lengthValue === "number" &&
        lengthValue >= 8 &&
        lengthValue <= 25,
      label: "hintLenghtPass",
    },
    { rule: /\d/.test(watch(name as Path<T>)), label: "hintNumberPass" },
    { rule: /[A-Z]/.test(watch(name as Path<T>)), label: "hintUpperLetter" },
    { rule: /[a-z]/.test(watch(name as Path<T>)), label: "hintLoweLetter" },
    { rule: /[a-zA-Z]/.test(watch(name as Path<T>)), label: "hintLetters" },
  ];

  return (
    <Controller
      name={name as Path<T>}
      control={control}
      defaultValue={"" as PathValue<T, Path<T>>}
      render={({ field }) => {
        return (
          <Box className={classBoxInput}>
            <FormControl className={classPasswordInput}>
              {label && <InputLabel htmlFor={name}>{label}</InputLabel>}
              <OutlinedInput
                {...field}
                id={name}
                type={showPassword ? "text" : "password"}
                onFocus={handleShowHints}
                onBlur={handleHideHints}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                    {error && <WarningAmberRoundedIcon className="errorIcon" />}
                  </InputAdornment>
                }
                label={label}
              />
              {isFocusedInput && (
                <List className="listHintsPassword">
                  {rulesValidation.map((el, ind) => {
                    return (
                      <ListItem
                        key={ind}
                        style={{ color: el.rule ? "#000" : "#AFAFAF" }}
                      >
                        <ListItemIcon className="iconHints">
                          {el.rule ? (
                            <CheckIcon className="checkedHints" />
                          ) : (
                            <CircleIcon className="circleHints" />
                          )}
                        </ListItemIcon>
                        {t(el.label)}
                      </ListItem>
                    );
                  })}
                </List>
              )}
            </FormControl>
            <FormHelperText className="errorMessage">{error}</FormHelperText>
          </Box>
        );
      }}
    />
  );
};

export default ControlledPassword;
