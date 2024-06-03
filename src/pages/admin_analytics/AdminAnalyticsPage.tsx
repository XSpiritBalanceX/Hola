import { useState } from "react";
import {
  Box,
  Container,
  TextField,
  MenuItem,
  InputAdornment,
} from "@mui/material";
import AdminMenu from "@components/adminMenu/AdminMenu";
import { translate } from "@i18n";
import InsertInvitationRoundedIcon from "@mui/icons-material/InsertInvitationRounded";
import "./AdminAnalyticsPage.scss";

const mockData = {
  today: { active: 29219, premium: 17987, online: 20654, matches: 24986 },
  month: { active: 87657, premium: 53961, online: 103270, matches: 124930 },
};

const AdminAnalyticsPage = () => {
  const { t } = translate("translate", { keyPrefix: "adminAnalyticsPage" });

  const [currentView, setCurrentView] = useState("today");

  const handleChangeView = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentView(e.target.value);
  };

  const typesOfUsers = [
    {
      value:
        currentView === "today" ? mockData.today.active : mockData.month.active,
      label: "activeUsers",
      color: "#C0D2D8",
    },
    {
      value:
        currentView === "today"
          ? mockData.today.premium
          : mockData.month.premium,
      label: "premiumUsers",
      color: "#5F57B3",
    },
    {
      value:
        currentView === "today" ? mockData.today.online : mockData.month.online,
      label: "onlineUsers",
      color: "#ACD2ED",
    },
    {
      value:
        currentView === "today"
          ? mockData.today.matches
          : mockData.month.matches,
      label: "matches",
      color: "#D7B7FF",
    },
  ];

  const formatNumber = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  return (
    <Container className="adminAnalyticsContainer">
      <AdminMenu />
      <Box className="analyticsContent">
        <Box className="controlViewBox">
          <p>{t("analytics")}</p>
          <TextField
            select={true}
            defaultValue={""}
            value={currentView}
            onChange={handleChangeView}
            className="viewField"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <InsertInvitationRoundedIcon />
                </InputAdornment>
              ),
            }}
          >
            <MenuItem value={"today"}>{t("today")}</MenuItem>
            <MenuItem value={"month"}>{t("month")}</MenuItem>
          </TextField>
        </Box>
        <Box className="typesUsersContainer">
          {typesOfUsers.map((el, ind) => (
            <Box
              key={ind}
              style={{ backgroundColor: el.color }}
              className="itemTypesUsers"
            >
              <p className="numberOfUsers">{formatNumber(el.value)}</p>
              <p className="itemLabel">{t(el.label)}</p>
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default AdminAnalyticsPage;
