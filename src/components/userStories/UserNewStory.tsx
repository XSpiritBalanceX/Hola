import { useState, useEffect, useRef } from "react";
import { Box, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { IUserNewStoryProps } from "./TypesUsersStories";
import { translate } from "@i18n";
import DraggableText from "./DraggableText";
import ColorsTextButtons from "@components/buttons/ColorsTextButtons";
import html2canvas from "html2canvas";
import "./UserStories.scss";

const UserNewStory = ({
  userSelectedPhoto,
  cbHandleCloseUserStory,
}: IUserNewStoryProps) => {
  const { t } = translate("translate", { keyPrefix: "dashboardPage" });

  const storyRef = useRef<HTMLDivElement>(null);

  const buttonsColors = [
    "#ffffff",
    "#000",
    "#f01321",
    "#554cb6",
    "#008f33",
    "#e8fc03",
  ];

  const [isAddText, setIsAddText] = useState(false);
  const [selectedTextColor, setSelectedTextColor] = useState("#000");
  const [isChangesText, setIsChangesText] = useState(false);

  useEffect(() => {
    !isAddText && setIsChangesText(false);
    // eslint-disable-next-line
  }, [isAddText]);

  const handlePostStory = async () => {
    /*  
    if (storyRef && storyRef.current) {
      const canvas = await html2canvas(storyRef.current);
      const imageData = canvas.toDataURL("image/png");
      const formData = new FormData();
    formData.append('file', imageData)
    }*/
  };

  const handleCloseStory = () => {
    cbHandleCloseUserStory();
  };

  const handleAddText = () => {
    setIsAddText(!isAddText);
    setIsChangesText(!isChangesText);
  };

  const handleSelectedColor = (color: string) => {
    setSelectedTextColor(color);
  };

  const handleApplyChangesText = () => {
    setIsChangesText(false);
  };

  return (
    <>
      <Box className="contentNewStory">
        <Box ref={storyRef} className="containerSendImage">
          {isAddText && (
            <DraggableText
              textColor={selectedTextColor}
              cbHandleAddText={setIsAddText}
            />
          )}
          {userSelectedPhoto instanceof File && (
            <img
              src={URL.createObjectURL(userSelectedPhoto)}
              alt="new user"
              className="userNewPhoto"
            />
          )}
        </Box>
        <Box className="actionsBox">
          <p className="titleNewStory">{t("addToStories")}</p>
          <Box className="actionsButtons">
            <Button type="button" onClick={handleAddText}>
              Aa
            </Button>
            <Button type="button" onClick={handleCloseStory}>
              <CloseIcon />
            </Button>
          </Box>
        </Box>
      </Box>
      <Box className="controlNewStory">
        {isChangesText && (
          <ColorsTextButtons
            colors={buttonsColors}
            cbHandleSelectedColor={handleSelectedColor}
            cbHandleApplyChangesText={handleApplyChangesText}
          />
        )}
        {!isChangesText && (
          <Button
            type="button"
            onClick={handlePostStory}
            className="buttonControl"
          >
            {t("post")}
          </Button>
        )}
      </Box>
    </>
  );
};

export default UserNewStory;
