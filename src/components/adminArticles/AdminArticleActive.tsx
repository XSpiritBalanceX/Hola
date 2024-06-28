import { Box, Button } from "@mui/material";
import { translate } from "@i18n";
import ControlsPhotoActiveArticle from "./ControlsPhotoActiveArticle";
import EditIcon from "@components/icons/EditIcon";
import { useNavigate } from "react-router-dom";
import BucketIcon from "@components/icons/BucketIcon";
import { IAdminArticleActiveProps } from "./TypesAdminArticles";
import "./AdminArticles.scss";

const mockData = {
  id: 10,
  photo:
    /*  "https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" */ "",
  title: "Lorem ipsum dolor sit amet",
  text: "Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.\n Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.\n Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.\n Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos...",
};

const AdminArticleActive = ({
  cbHandleEditArticle,
}: IAdminArticleActiveProps) => {
  const { t } = translate("translate", { keyPrefix: "adminArticlesPage" });

  const navigate = useNavigate();

  const isEmptyData = Object.values(mockData).every((el) => el === "");

  const handleNavigate = () => {
    cbHandleEditArticle(mockData);
    navigate("/admin/articles/edit");
  };

  const handleDeleteArticle = () => {
    console.log("delete article");
  };

  return (
    <>
      {isEmptyData && <Box className="emptyDataBox">{t("emptyArticle")}</Box>}
      {!isEmptyData && (
        <Box className="activeArticleContent">
          <ControlsPhotoActiveArticle photo={mockData.photo} />
          <Box className="activeArticleTitleBox">
            <p>{mockData.title}</p>
            <Button type="button" onClick={handleNavigate}>
              <EditIcon fill={"#554CB6"} />
              {t("editArticle")}
            </Button>
          </Box>
          <Box className="activeArticleText">{mockData.text}</Box>
          <Button
            type="button"
            onClick={handleDeleteArticle}
            className="deleteArticleButton"
          >
            <BucketIcon fill="#B50000" />
            {t("deleteArticle")}
          </Button>
        </Box>
      )}
    </>
  );
};

export default AdminArticleActive;
