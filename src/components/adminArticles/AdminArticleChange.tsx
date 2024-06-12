import { Box, Button } from "@mui/material";
import { translate } from "@i18n";
import { IAdminArticleChangeProps } from "./TypesAdminArticles";
import "./AdminArticles.scss";

const AdminArticleChange = ({ article }: IAdminArticleChangeProps) => {
  const { t } = translate("translate", { keyPrefix: "adminArticlesPage" });

  return <Box>AdminArticleChange</Box>;
};

export default AdminArticleChange;
