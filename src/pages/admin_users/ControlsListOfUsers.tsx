import { Box, Button } from "@mui/material";
import { translate } from "@i18n";
import "./AdminUsersPage.scss";

interface IControlsListOfUsersProps {
  selectedFilter: string;
  cbHandleFilter: (name: string) => void;
}

const ControlsListOfUsers = ({
  selectedFilter,
  cbHandleFilter,
}: IControlsListOfUsersProps) => {
  const { t } = translate("translate", { keyPrefix: "adminUsersPage" });

  const handleChooseFilter = (e: React.MouseEvent<HTMLButtonElement>) => {
    cbHandleFilter(e.currentTarget.name);
  };

  const filterButtons = ["all", "new", "suspended"];

  return (
    <Box className="filterButtonsBox">
      {filterButtons.map((el, ind) => (
        <Button
          key={ind}
          type="button"
          name={el}
          onClick={handleChooseFilter}
          className={`filterButton ${
            selectedFilter === el ? "selectedButton" : ""
          }`}
        >
          {t(el)}
        </Button>
      ))}
    </Box>
  );
};

export default ControlsListOfUsers;
