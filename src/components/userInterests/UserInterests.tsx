import { Box } from "@mui/material";
import classNames from "classnames";
import { translate } from "@i18n";
import { useLocation } from "react-router-dom";
import Interests from "./Interests";
import "./UserInterests.scss";

const UserInterests = () => {
  const { t } = translate("translate", { keyPrefix: "signUp.interests" });
  const { pathname } = useLocation();

  const classMainTitle: string = classNames("mainTitle", {
    registration: pathname.includes("registration"),
  });

  return (
    <Box className="interestsBox">
      <p className={classMainTitle}>{t("interests")}</p>
      {pathname.includes("registration") && (
        <p className="title">{t("title")}</p>
      )}
      <Interests />
    </Box>
  );
};

export default UserInterests;
