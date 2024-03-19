import { Route, Routes, Navigate } from "react-router-dom";
import ProtectedRouter from "./ProtectedRouter";
import ProtectedRouterForLogged from "./ProtectedRouterForLogged";
import AuthPage from "@pages/auth/AuthPage";
import ProfilePage from "@pages/profile/ProfilePage";

const RouterComponent = () => {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <ProtectedRouterForLogged>
            <AuthPage />
          </ProtectedRouterForLogged>
        }
      />
      <Route
        path="/registration/info"
        element={
          <ProtectedRouterForLogged>
            <AuthPage />
          </ProtectedRouterForLogged>
        }
      />
      <Route
        path="/registration/interests"
        element={
          <ProtectedRouterForLogged>
            <AuthPage />
          </ProtectedRouterForLogged>
        }
      />
      <Route
        path="/registration/photos"
        element={
          <ProtectedRouterForLogged>
            <AuthPage />
          </ProtectedRouterForLogged>
        }
      />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="*" element={<Navigate to={"/login"} />} />
    </Routes>
  );
};

export default RouterComponent;
