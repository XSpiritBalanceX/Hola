import { Route, Routes, Navigate } from "react-router-dom";
import ProtectedRouter from "./ProtectedRouter";
import ProtectedRouterForLogged from "./ProtectedRouterForLogged";
import AuthPage from "@pages/auth/AuthPage";
import ProfilePage from "@pages/profile/ProfilePage";
import EditProfilePage from "@pages/edit_profile/EditProfilePage";

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
      <Route
        path="/profile"
        element={
          <ProtectedRouter>
            <ProfilePage />
          </ProtectedRouter>
        }
      />
      <Route path="/profile/edit" element={<EditProfilePage />} />
      <Route path="/profile/edit/:step" element={<EditProfilePage />} />
      <Route path="*" element={<Navigate to={"/login"} />} />
    </Routes>
  );
};

export default RouterComponent;
