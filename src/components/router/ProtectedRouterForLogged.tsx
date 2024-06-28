import { Navigate } from "react-router-dom";
import { useAppSelector } from "@store/hook";
import * as holaSelectors from "@store/selectors";

interface IProtectedRouterForLoggedProps {
  children: JSX.Element;
}

const ProtectedRouterForLogged = ({
  children,
}: IProtectedRouterForLoggedProps) => {
  const isLogin = useAppSelector(holaSelectors.isLoginSelect);
  //TODO:replace by real logic for admin and user from token
  /* const isAdmin = true;
  const isUser = false; */
  /*if (isLogin && isUser) {
    return <Navigate to={"/profile"} replace />;
  }  else if (isLogin && isAdmin) {
    return <Navigate to={"/admin/users"} replace />;
  } */
  if (isLogin) {
    return <Navigate to={"/profile"} replace />;
  }
  return children;
};

export default ProtectedRouterForLogged;
