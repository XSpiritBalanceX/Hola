import { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import { translate } from "@i18n";
import { useAppSelector } from "@store/hook";
import * as holaSelectors from "@store/selectors";
import "./UserDescription.scss";

const UserDescription = () => {
  const { t } = translate("translate", { keyPrefix: "profile.editing" });

  const userDescription = useAppSelector(holaSelectors.profileEditSelect);

  const [description, setDescription] = useState(
    userDescription.description || ""
  );

  const handleChangeDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.currentTarget.value);
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
      <Button type="button" className="saveDescriptionButton">
        {t("save")}
      </Button>
    </Box>
  );
};

export default UserDescription;
