import { useState, useEffect } from "react";
import { Box, Pagination } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import ArticleDashboardModal from "@components/modal/ArticleDashboardModal";
import { translate } from "@i18n";
import "./AdminArticles.scss";

const mockData = [
  {
    id: 1,
    photo: "",
    title: "Lorem ipsum dolor sit amet",
    text: "Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos....",
  },
  {
    id: 2,
    photo: "",
    title: "Lorem ipsum dolor sit amet",
    text: "Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos....",
  },
  {
    id: 3,
    photo: "",
    title: "Lorem ipsum dolor sit amet",
    text: "Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos....",
  },
  {
    id: 4,
    photo: "",
    title: "Lorem ipsum dolor sit amet",
    text: "Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos....",
  },
  {
    id: 5,
    photo: "",
    title: "Lorem ipsum dolor sit amet",
    text: "Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos....",
  },
  {
    id: 6,
    photo: "",
    title: "Lorem ipsum dolor sit amet",
    text: "Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos....",
  },
  {
    id: 7,
    photo: "",
    title: "Lorem ipsum dolor sit amet",
    text: "Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos....",
  },
  {
    id: 8,
    photo: "",
    title: "Lorem ipsum dolor sit amet",
    text: "Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos....",
  },
  {
    id: 9,
    photo: "",
    title: "Lorem ipsum dolor sit amet",
    text: "Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos....",
  },
];

const AdminArticlesArchive = () => {
  const { t } = translate("translate", { keyPrefix: "adminArticlesPage" });

  const { part } = useParams();
  const navigate = useNavigate();

  const [isOpenArticle, setIsOpenArticle] = useState(true);
  const [selectedArticle, setSelectedArticle] = useState<null | number>(null);

  const [limit] = useState(5);
  const [articles, setArticles] = useState(mockData.slice(0, limit));
  const [activePage, setActivePage] = useState(1);
  const startIndex = (activePage - 1) * limit;
  const endIndex = startIndex + limit;
  const totalItems = mockData.length;
  const totalPages = Math.ceil(totalItems / limit);

  useEffect(() => {
    const page = parseInt((part as string).replace("archive_", ""));
    setActivePage(page);
    // eslint-disable-next-line
  }, [part]);

  useEffect(() => {
    const newData = mockData.slice(startIndex, endIndex);
    setArticles(newData);
    // eslint-disable-next-line
  }, [startIndex, endIndex]);

  const limitText = 370;

  const handleOpenArticle = (id: number) => {
    setSelectedArticle(id);
    setIsOpenArticle(true);
  };

  const handleNavigate = (_: React.ChangeEvent<unknown>, page: number) => {
    navigate(`/admin/articles/archive_${page}`);
  };

  const handleArticle = (value: boolean) => {
    setIsOpenArticle(value);
    !value && setSelectedArticle(null);
  };

  const handleActivateArticle = () => {
    console.log(selectedArticle);
  };

  return (
    <Box className="archiveArticlesBox">
      <ArticleDashboardModal
        isOpen={isOpenArticle}
        title={articles[0].title}
        image={articles[0].photo}
        text={articles[0].text}
        cbHandleClose={handleArticle}
        labelAdmin={t("publish")}
        cbHandleActivateArticle={handleActivateArticle}
      />
      {articles.map((el) => (
        <Box
          key={el.id}
          className="itemArchiveArticle"
          onClick={() => handleOpenArticle(el.id)}
        >
          {el.photo ? (
            <img src={el.photo} alt="article" />
          ) : (
            <Box className="emptyPhotoArchiveArticle" />
          )}
          <Box className="articleInformationBox">
            <p>{el.title}</p>
            <Box className="articleArchiveText">
              {el.text.length > limitText
                ? `${el.text.slice(0, limitText)}...`
                : el.title}
            </Box>
          </Box>
        </Box>
      ))}
      <Pagination
        count={totalPages}
        shape="rounded"
        onChange={handleNavigate}
        className="archivePagination"
      />
    </Box>
  );
};

export default AdminArticlesArchive;
