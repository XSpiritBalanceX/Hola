import { useLocation } from "react-router-dom";
import SignIn from "@components/signin/SignIn";
import SignUp from "@components/signup/SignUp";

const AuthPage = () => {
  const { pathname } = useLocation();

  return (
    <>
      {pathname === "/login" && <SignIn />}
      {pathname.includes("/registration") && <SignUp />}
    </>
  );
};

export default AuthPage;
