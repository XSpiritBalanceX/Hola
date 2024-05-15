import { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import { translate } from "@i18n";
import { useAppSelector } from "@store/hook";
import * as holaSelectors from "@store/selectors";
import { useUpdateDescriptionMutation } from "@store/requestApi/profileApi";
import { toast } from "react-toastify";
import "./UserDescription.scss";

const UserDescription = () => {
  const { t } = translate("translate", { keyPrefix: "profile.editing" });

  const userID = localStorage.getItem("hola_user_id");

  const userDescription = useAppSelector(holaSelectors.profileEditSelect);
  const [updateDescription] = useUpdateDescriptionMutation();

  const [description, setDescription] = useState(
    userDescription.description || ""
  );

  const handleChangeDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.currentTarget.value);
  };

  const handleSaveDescription = () => {
    updateDescription({ description: description, userID: userID || "" })
      .unwrap()
      .then(() => toast.success(t("successUpdate")))
      .catch(() => toast.error(t("errEditing")));
  };

  return (
    <Box className="userDescriptionBox">
      <p className="titleDescription">{t("description")}</p>
      <Box className="contentDescription">
        <TextField
          multiline
          rows={3}
          inputProps={{ maxLength: 400 }}
          value={description}
          onChange={handleChangeDescription}
          className="descriptionField"
        />
        <p className="countOfText">{description.length}/400</p>
      </Box>
      <Button
        type="button"
        className="saveDescriptionButton"
        onClick={handleSaveDescription}
      >
        {t("save")}
      </Button>
    </Box>
  );
};

export default UserDescription;
