import { Route, Routes, Navigate } from "react-router-dom";
import ProtectedRouter from "./ProtectedRouter";
import ProtectedRouterForLogged from "./ProtectedRouterForLogged";
import AuthPage from "@pages/auth/AuthPage";
import ProfilePage from "@pages/profile/ProfilePage";
import EditProfilePage from "@pages/edit_profile/EditProfilePage";
import ProfileSettingsPage from "@pages/profile_settings/ProfileSettingsPage";
import AccountSettingsPage from "@pages/account_settings/AccountSettingsPage";
import ResetPasswordPage from "@pages/reset_password/ResetPasswordPage";
import PrivacyPage from "@pages/privacy/PrivacyPage";
import SubscriptionPage from "@pages/subscription/SubscriptionPage";
import PlanPage from "@pages/plan/PlanPage";
import UserPlanPage from "@pages/plan/UserPlanPage";

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
      <Route
        path="/profile/edit"
        element={
          <ProtectedRouter>
            <EditProfilePage />
          </ProtectedRouter>
        }
      />
      <Route
        path="/profile/edit/:step"
        element={
          <ProtectedRouter>
            <EditProfilePage />
          </ProtectedRouter>
        }
      />
      <Route
        path="/profile/settings"
        element={
          <ProtectedRouter>
            <ProfileSettingsPage />
          </ProtectedRouter>
        }
      />
      <Route
        path="/settings/account"
        element={
          <ProtectedRouter>
            <AccountSettingsPage />
          </ProtectedRouter>
        }
      />
      <Route
        path="/reset_password/:step"
        element={
          <ProtectedRouter>
            <ResetPasswordPage />
          </ProtectedRouter>
        }
      />
      <Route
        path="/privacy"
        element={
          <ProtectedRouter>
            <PrivacyPage />
          </ProtectedRouter>
        }
      />
      <Route
        path="/subscription"
        element={
          <ProtectedRouter>
            <SubscriptionPage />
          </ProtectedRouter>
        }
      />
      <Route
        path="/plan/:id"
        element={
          <ProtectedRouter>
            <PlanPage />
          </ProtectedRouter>
        }
      />
      <Route
        path="/plan/user_plan"
        element={
          <ProtectedRouter>
            <UserPlanPage />
          </ProtectedRouter>
        }
      />
      <Route path="*" element={<Navigate to={"/login"} />} />
    </Routes>
  );
};

export default RouterComponent;
