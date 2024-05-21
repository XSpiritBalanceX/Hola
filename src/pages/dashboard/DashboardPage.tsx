import { Container } from "@mui/material";
import TabMenu from "@components/tabMenu/TabMenu";
import { translate } from "@i18n";
import "./DashboardPage.scss";

const DashboardPage = () => {
  const { t } = translate("translate", { keyPrefix: "dashboardPage" });
  return (
    <Container className="dashboardPageContainer">
      DashboardPage
      <TabMenu />
    </Container>
  );
};

export default DashboardPage;
