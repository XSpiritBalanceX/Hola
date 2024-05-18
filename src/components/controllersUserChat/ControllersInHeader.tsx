import { Box, Button } from "@mui/material";
import { IControllersInHeaderProps } from "./TypesControllersUserChat";
import { translate } from "@i18n";
import "./ControllersUserChat.scss";

const ControllersInHeader = ({
  cbHandleIsSelectedMessage,
  countOfMessages,
}: IControllersInHeaderProps) => {
  const { t } = translate("translate", { keyPrefix: "chatPage" });

  const handleIsSelectedMessages = () => {
    cbHandleIsSelectedMessage(false);
  };

  return (
    <Box className="controllersInHeaderBox">
      <Button type="button">{t("deleteChat")}</Button>
      <p className="chosenMessages">
        {t("chosenMessages", { count: countOfMessages })}
      </p>
      <Button type="button" onClick={handleIsSelectedMessages}>
        {t("cancel")}
      </Button>
    </Box>
  );
};

export default ControllersInHeader;
