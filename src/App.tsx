import { useEffect } from "react";
import { translate } from "@i18n";
import { useAppSelector, useAppDispatch } from "@store/hook";
import * as holaSelectors from "@store/selectors";
import ScrollToTop from "@components/scrollToTop/ScrollToTop";
import RouterComponent from "@components/router/RouterComponent";
import { axiosAPI } from "@axiosApi/axiosAPI";
import { loginUser } from "@store/holaSlice";

axiosAPI.setGetItem((key) => localStorage.getItem(key));
axiosAPI.setSetItem((key, value) => localStorage.setItem(key, value));

const App = () => {
  const locale = useAppSelector(holaSelectors.localeSelect);
  const { i18n } = translate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    i18n.changeLanguage(locale);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    axiosAPI.setLogout(() =>
      dispatch(
        loginUser({
          isLogin: false,
          token: "",
          expiresIn: 0,
          email: "",
          refreshToken: "",
        })
      )
    );
  }, [dispatch]);

  return (
    <>
      <ScrollToTop />
      <RouterComponent />
    </>
  );
};

export default App;
