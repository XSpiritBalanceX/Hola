import { Box, Slider, Switch } from "@mui/material";
import { IAccountRagersProps } from "./TypesAccountForm";
import { translate } from "@i18n";
import "./AccountForm.scss";

const AccountRagers = ({
  distance,
  global_search,
  min_age,
  max_age,
  setValue,
}: IAccountRagersProps) => {
  const { t } = translate("translate", { keyPrefix: "accountSettings" });

  const handleChangeDistance = (e: Event) => {
    const field = e.target as HTMLInputElement;
    setValue("max_distance", Number(field.value));
  };

  const handleChangeGlobalSearch = () => {
    setValue("global_search", !global_search);
  };

  const handleChangeAgeRange = (e: Event) => {
    const field = e.target as HTMLInputElement;
    const values = field.value as unknown as number[];
    setValue("min_age", values[0]);
    setValue("max_age", values[1]);
  };

  return (
    <>
      <Box className="distanceBox">
        <Box className="distanceTitleBox">
          <p>{t("maxDistance")}</p>
          <p>
            {distance} {t("km")}
          </p>
        </Box>
        <Slider
          value={typeof distance === "number" ? distance : 0}
          onChange={handleChangeDistance}
          max={200}
          className="distanceSlider"
        />
      </Box>
      <Box className="globalSearchBox">
        <p>{t("globalSearch")}</p>
        <Switch
          checked={global_search}
          onChange={handleChangeGlobalSearch}
          className="globalSearchSwitcher"
        />
      </Box>
      <p className="titleGlobalSearch">{t("titleGlobalSearch")}</p>
      <Box className="ageRangeBox">
        <Box className="titlesAgeRageBox">
          <p>{t("ageRange")}</p>
          <p>
            {min_age}-{max_age}
          </p>
        </Box>
        <Slider
          value={[min_age, max_age]}
          min={18}
          max={65}
          className="ageRangeSlider"
          onChange={handleChangeAgeRange}
        />
      </Box>
    </>
  );
};

export default AccountRagers;
