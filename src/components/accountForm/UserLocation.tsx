import { Box, Button } from "@mui/material";
import { translate } from "@i18n";
import { IUserLocationProps } from "./TypesAccountForm";
import "./AccountForm.scss";

const UserLocation = ({
  user_location,
  cbHandleOpenModalCountries,
}: IUserLocationProps) => {
  const { t } = translate("translate", { keyPrefix: "accountSettings" });

  const handleClick = () => {
    cbHandleOpenModalCountries();
  };
  return (
    <>
      <Box className="containerAccountLocation">
        <Box className="userLocation">
          <p>{t("location")}</p>
          <p>{user_location}</p>
        </Box>
        <Box className="buttonNewLocationBox">
          <Button type="button" onClick={handleClick}>
            + {t("setNewLocation")}
          </Button>
        </Box>
      </Box>
      <p className="titleLocation">{t("titleNewLocation")}</p>
    </>
  );
};

export default UserLocation;
