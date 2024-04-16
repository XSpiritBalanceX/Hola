import { useState, useEffect } from "react";
import { Button, FormControlLabel, Checkbox, Box } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { translate } from "@i18n";
import { listOfInterests } from "@utils/listOfInterests";
import { addInterest } from "@api/interest/addInterest";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "@store/hook";
import * as holaSelectors from "@store/selectors";
import { useAddInterestsMutation } from "@store/requestApi/profileApi";
import "./UserInterests.scss";

interface IInterestsProps {
  cbHandleLoading: (value: boolean) => void;
  pathname: string;
}

interface IInterests {
  interests: Array<string>;
}

const Interests = ({ cbHandleLoading, pathname }: IInterestsProps) => {
  const { t } = translate("translate", { keyPrefix: "signUp.interests" });
  const navigate = useNavigate();

  const userInterests = useAppSelector(holaSelectors.profileEditSelect);

  const [initialData, setInitialData] = useState<Array<string>>([]);
  const [isDisableButton, setIsDisableButton] = useState(true);

  const [addInterests] = useAddInterestsMutation();

  useEffect(() => {
    if (userInterests) {
      const compiledData = userInterests.interests.map((el) =>
        el.id.toString()
      );
      setInitialData(compiledData);
    }
    // eslint-disable-next-line
  }, [userInterests]);

  const validationSchema = Yup.object().shape({
    interests: Yup.array().of(Yup.string().required()).required(),
  });

  const { handleSubmit, watch, register } = useForm<IInterests>({
    resolver: yupResolver(validationSchema),
    values: { interests: initialData },
  });

  const onSubmitInterests = async (data: IInterests) => {
    const compiledData = data.interests.map((el) => Number(el));
    const newInterests = data.interests.filter(
      (el) => !initialData.includes(el)
    );

    if (pathname === "/registration/interests") {
      try {
        cbHandleLoading(true);
        const response = await addInterest(compiledData);
        if (!response.data.detail) {
          pathname === "/registration/interests" &&
            navigate("/registration/photos");
        } else {
          toast.error(t("errInterests"));
        }
      } catch (err) {
        toast.error(t("errInterests"));
      } finally {
        cbHandleLoading(false);
      }
    } else {
      addInterests({ interests: newInterests })
        .unwrap()
        .catch(() => toast.error(t("errInterests")));
    }
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
        {pathname.includes("registration") ? t("next") : t("save")}
      </Button>
    </form>
  );
};

export default Interests;
