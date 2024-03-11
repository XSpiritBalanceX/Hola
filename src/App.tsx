import { translate } from "@i18n";

const App = () => {
  const { t } = translate("translate");
  return <div>{t("welcome")}</div>;
};

export default App;
