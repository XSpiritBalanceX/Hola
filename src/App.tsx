import { useEffect } from "react";
import { translate } from "@i18n";
import { useAppSelector } from "@store/hook";
import * as holaSelectors from "@store/selectors";

const App = () => {
  const locale = useAppSelector(holaSelectors.localeSelect);
  const { i18n, t } = translate("translate");

  useEffect(() => {
    i18n.changeLanguage(locale);
    // eslint-disable-next-line
  }, []);
  return <div>{t("welcome")}</div>;
};

export default App;
