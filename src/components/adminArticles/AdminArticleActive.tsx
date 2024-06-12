import { Box, Button } from "@mui/material";
import { translate } from "@i18n";
import ControlsPhotoActiveArticle from "./ControlsPhotoActiveArticle";
import "./AdminArticles.scss";

const mockData = {
  photo:
    /*  "https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" */ "",
  title: "Lorem ipsum dolor sit amet",
  text: "",
};

const AdminArticleActive = () => {
  const { t } = translate("translate", { keyPrefix: "adminArticlesPage" });

  const isEmptyData = Object.values(mockData).every((el) => el === "");

  return (
    <>
      {isEmptyData && <Box className="emptyDataBox">{t("emptyArticle")}</Box>}
      {!isEmptyData && (
        <Box className="activeArticleContent">
          <ControlsPhotoActiveArticle photo={mockData.photo} />
        </Box>
      )}
    </>
  );
};

export default AdminArticleActive;
