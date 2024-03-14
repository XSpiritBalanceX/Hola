import { useEffect } from "react";
import { translate } from "@i18n";
import { useAppSelector } from "@store/hook";
import * as holaSelectors from "@store/selectors";
import ScrollToTop from "@components/scrollToTop/ScrollToTop";
import RouterComponent from "@components/router/RouterComponent";

const App = () => {
  const locale = useAppSelector(holaSelectors.localeSelect);
  const { i18n } = translate();

  useEffect(() => {
    i18n.changeLanguage(locale);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <ScrollToTop />
      <RouterComponent />
    </>
  );
};

export default App;
