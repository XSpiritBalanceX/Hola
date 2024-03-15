import { useState, useEffect } from "react";
import { Button, FormControlLabel, Checkbox, Box } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { translate } from "@i18n";
import { listOfInterests } from "@utils/listOfInterests";
import "./UserInterests.scss";

interface IInterests {
  interests: Array<string>;
}

const Interests = () => {
  const { t } = translate("translate", { keyPrefix: "signUp.interests" });
  const [isDisableButton, setIsDisableButton] = useState(true);

  const validationSchema = Yup.object().shape({
    interests: Yup.array().of(Yup.string().required()).required(),
  });

  const { handleSubmit, watch, register } = useForm<IInterests>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      interests: [],
    },
  });

  const onSubmitInterests = (data: IInterests) => {
    console.log(data);
  };

  useEffect(() => {
    const isEmptyInterests = watch("interests").length > 0 ? false : true;
    setIsDisableButton(isEmptyInterests);
    // eslint-disable-next-line
  }, [watch("interests")]);

  return (
    <form onSubmit={handleSubmit(onSubmitInterests)} className="interestsForm">
      <Box>
        {listOfInterests.map((el) => {
          return (
            <FormControlLabel
              key={el.indInt}
              control={
                <Checkbox
                  {...register("interests")}
                  value={el.indInt}
                  className="checkBoxInterest"
                />
              }
              label={t(el.label)}
              className={`itemInterest ${
                watch("interests").includes(el.indInt.toString())
                  ? "checked"
                  : ""
              }`}
            />
          );
        })}
      </Box>
      <Button
        type="submit"
        disabled={isDisableButton}
        className="buttonSubmitInterests"
      >
        {t("next")}
      </Button>
    </form>
  );
};

export default Interests;
