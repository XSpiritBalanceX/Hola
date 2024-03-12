import { useLocation } from "react-router-dom";

const AuthPage = () => {
  const { pathname } = useLocation();

  return (
    <>
      {pathname === "/login" && <div>Login</div>}
      {pathname === "/registration" && <div>Registration</div>}
    </>
  );
};

export default AuthPage;
