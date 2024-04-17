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
import NewCard from "@components/userBankCard/NewBankCard";
import SearchPage from "@pages/search/SearchPage";
import UserProfilePage from "@pages/user_profile/UserProfilePage";

const RouterComponent = () => {
  const appRoutesUnauth = [
    { path: "/login", element: <AuthPage /> },
    { path: "/registration/info", element: <AuthPage /> },
    { path: "/registration/interests", element: <AuthPage /> },
    { path: "/registration/photos", element: <AuthPage /> },
  ];

  const appRoutesAuth = [
    { path: "/profile", element: <ProfilePage /> },
    { path: "/profile/edit", element: <EditProfilePage /> },
    { path: "/profile/edit/:step", element: <EditProfilePage /> },
    { path: "/profile/settings", element: <ProfileSettingsPage /> },
    { path: "/settings/account", element: <AccountSettingsPage /> },
    { path: "/reset_password/:step", element: <ResetPasswordPage /> },
    { path: "/forgot_password/:step", element: <ResetPasswordPage /> },
    { path: "/privacy", element: <PrivacyPage /> },
    { path: "/subscription", element: <SubscriptionPage /> },
    { path: "/plan/:id", element: <PlanPage /> },
    { path: "/plan/user_plan", element: <UserPlanPage /> },
    { path: "/plan/new_card", element: <NewCard /> },
    { path: "/search", element: <SearchPage /> },
    { path: "/search/:category", element: <SearchPage /> },
    { path: "/search/user/:id", element: <UserProfilePage /> },
  ];

  return (
    <Routes>
      {appRoutesUnauth.map((el, ind) => (
        <Route
          key={ind}
          path={el.path}
          element={
            <ProtectedRouterForLogged>{el.element}</ProtectedRouterForLogged>
          }
        />
      ))}
      {appRoutesAuth.map((el, ind) => (
        <Route
          key={ind}
          path={el.path}
          element={<ProtectedRouter>{el.element}</ProtectedRouter>}
        />
      ))}
      <Route path="*" element={<Navigate to={"/login"} />} />
    </Routes>
  );
};

export default RouterComponent;
