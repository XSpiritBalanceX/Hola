import { Navigate } from "react-router-dom";
import { useAppSelector } from "@store/hook";
import * as holaSelectors from "@store/selectors";

interface IProtectedRouterProps {
  children: JSX.Element;
}

const ProtectedRouter = ({ children }: IProtectedRouterProps) => {
  const token = localStorage.getItem("hola_access_token");
  const isLogin = useAppSelector(holaSelectors.isLoginSelect);
  //TODO: replace by real logic for user from token
  const isUser = true;
  if (!token || !isLogin) {
    return <Navigate to={"/login"} replace />;
  } else if (!isUser) {
    return <Navigate to={"/admin/users/all/1"} replace />;
  }
  return children;
};

export default ProtectedRouter;
