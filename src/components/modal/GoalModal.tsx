import { useState } from "react";
import {
  Modal,
  Box,
  Button,
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@mui/material";
import { translate } from "@i18n";
import { listOfCategoryDate } from "@utils/listOfCategoryDate";
import "./Modals.scss";

interface IGoalModalProps {
  isOpen: boolean;
  cbCloseModal: (name: string, isShow: boolean) => void;
  currentGoal: number;
  cbHandleSetGoal: (value: number) => void;
}

const GoalModal = ({
  isOpen,
  cbCloseModal,
  currentGoal,
  cbHandleSetGoal,
}: IGoalModalProps) => {
  const { t } = translate("translate", { keyPrefix: "modals.account" });

  const [selectedGoal, setSelectedGoal] = useState(currentGoal);

  const handleSaveGoal = () => {
    cbHandleSetGoal(selectedGoal);
    cbCloseModal("goal", false);
  };

  const handleChangeLanguage = (e: React.SyntheticEvent<Element, Event>) => {
    const { value } = e.currentTarget as HTMLInputElement;
    setSelectedGoal(Number(value));
  };

  const handleCloseModal = () => {
    cbCloseModal("goal", false);
  };

  return (
    <Modal open={isOpen} className="modalChooseGoal" onClose={handleCloseModal}>
      <Box className="contentChooseGoal">
        <Box className="saveGoalBox">
          <p>{t("chooseGoal")}</p>
          <Button type="button" onClick={handleSaveGoal}>
            {t("save")}
          </Button>
        </Box>
        <RadioGroup onChange={handleChangeLanguage} value={selectedGoal}>
          {listOfCategoryDate.map((el, ind) => (
            <FormControlLabel
              key={ind}
              control={<Radio />}
              value={el.id}
              label={t(el.label)}
              className="radioGoal"
            />
          ))}
        </RadioGroup>
      </Box>
    </Modal>
  );
};

export default GoalModal;
