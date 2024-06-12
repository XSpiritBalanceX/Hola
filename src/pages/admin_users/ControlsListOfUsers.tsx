import { Box, Button } from "@mui/material";
import { translate } from "@i18n";
import { useNavigate } from "react-router-dom";
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

  const navigate = useNavigate();

  const handleChooseFilter = (e: React.MouseEvent<HTMLButtonElement>) => {
    cbHandleFilter(e.currentTarget.name);
    navigate(`/admin/users/${e.currentTarget.name}/1`);
  };

  const handleNavigate = () => {
    navigate("/admin/users/create_admin");
  };

  const filterButtons = [
    { label: t("all"), value: "all" },
    { label: "Premium", value: "premium" },
    { label: "Premium Student", value: "student" },
    { label: "Free", value: "free" },
    { label: t("blocked"), value: "blocked" },
  ];

  return (
    <Box className="filterButtonsBox">
      <Box className="filtersBox">
        {filterButtons.map((el, ind) => (
          <Button
            key={ind}
            type="button"
            name={el.value}
            onClick={handleChooseFilter}
            className={`filterButton ${
              selectedFilter === el.value ? "selectedButton" : ""
            }`}
          >
            {el.label}
          </Button>
        ))}
      </Box>
      <Box className="createAdminButtonBox">
        <Button type="button" onClick={handleNavigate}>
          + {t("createAdmin")}
        </Button>
      </Box>
    </Box>
  );
};

export default ControlsListOfUsers;
