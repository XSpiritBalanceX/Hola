import { Navigate } from "react-router-dom";
import { useAppSelector } from "@store/hook";
import * as holaSelectors from "@store/selectors";

interface IProtectedRouterProps {
  children: JSX.Element;
}

const ProtectedRouter = ({ children }: IProtectedRouterProps) => {
  const token = localStorage.getItem("hola_access_token");
  const isLogin = useAppSelector(holaSelectors.isLoginSelect);
  if (!token || !isLogin) {
    return <Navigate to={"/login"} replace />;
  }
  return children;
};

export default ProtectedRouter;
