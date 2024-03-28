import { useState } from "react";
import { Box } from "@mui/material";
import classNames from "classnames";
import { translate } from "@i18n";
import { useLocation } from "react-router-dom";
import Interests from "./Interests";
import Loader from "@components/loader/Loader";
import { useAddInterestsMutation } from "@store/profileEditApi";
import "./UserInterests.scss";

const UserInterests = () => {
  const { t } = translate("translate", { keyPrefix: "signUp.interests" });
  const { pathname } = useLocation();
  const [, { isLoading }] = useAddInterestsMutation();

  const [loading, setLoading] = useState(isLoading || false);

  const handleLoading = (value: boolean) => {
    setLoading(value);
  };

  const classMainTitle: string = classNames("mainTitle", {
    registration: pathname.includes("registration"),
  });

  return (
    <Box className="interestsBox">
      <Loader isLoading={loading} />
      <p className={classMainTitle}>{t("interests")}</p>
      {pathname.includes("registration") && (
        <p className="title">{t("title")}</p>
      )}
      <Interests cbHandleLoading={handleLoading} pathname={pathname} />
    </Box>
  );
};

export default UserInterests;
