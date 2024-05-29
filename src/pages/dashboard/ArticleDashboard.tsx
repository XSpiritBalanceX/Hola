import { Box, Button } from "@mui/material";
import { translate } from "@i18n";
import EastIcon from "@mui/icons-material/East";
import "./DashboardPage.scss";

interface IArticleDashboardProps {
  title: string;
  image: string;
  cbHandleOpenArticle: (value: boolean) => void;
}

const ArticleDashboard = ({
  title,
  image,
  cbHandleOpenArticle,
}: IArticleDashboardProps) => {
  const { t } = translate("translate", { keyPrefix: "dashboardPage" });

  const handleOpenArticle = () => {
    cbHandleOpenArticle(true);
  };
  return (
    <Box className="articleBox">
      <p className="titleArticle">{title}</p>
      <Box
        style={{ backgroundImage: `url(${image})` }}
        className="articleImage"
      />
      <Box className="insertBox">
        <Button
          type="button"
          onClick={handleOpenArticle}
          className="articleButton"
        >
          {t("read")} <EastIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default ArticleDashboard;
