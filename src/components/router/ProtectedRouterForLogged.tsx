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
  if (isLogin) {
    return <Navigate to={"/profile"} replace />;
  }
  return children;
};

export default ProtectedRouterForLogged;
