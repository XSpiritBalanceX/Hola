import { Navigate } from "react-router-dom";
import { useAppSelector } from "@store/hook";
import * as holaSelectors from "@store/selectors";

interface IProtectedAdminRouterProps {
  children: JSX.Element;
}

const ProtectedAdminRouter = ({ children }: IProtectedAdminRouterProps) => {
  const token = localStorage.getItem("hola_access_token");
  const isLogin = useAppSelector(holaSelectors.isLoginSelect);
  //TODO: replace by real logic for admin from token
  const isAdmin = true;
  if (!token || !isLogin) {
    return <Navigate to={"/login"} replace />;
  } else if (!isAdmin) {
    return <Navigate to={"/profile"} replace />;
  }
  return children;
};

export default ProtectedAdminRouter;
