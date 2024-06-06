import { Route, Routes, Navigate } from "react-router-dom";
import ProtectedRouter from "./ProtectedRouter";
import ProtectedRouterForLogged from "./ProtectedRouterForLogged";
import ProtectedAdminRouter from "./ProtectedAdminRouter";
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
import ChatsPage from "@pages/chats/ChatsPage";
import UserChatPage from "@pages/user_chat/UserChatPage";
import DashboardPage from "@pages/dashboard/DashboardPage";
import AdminUsersPage from "@pages/admin_users/AdminUsersPage";
import AdminUsersChat from "@pages/admin_users_chat/AdminUsersChat";
import AdminPaymentsPage from "@pages/admin_payments/AdminPaymentsPage";
import AdminAnalyticsPage from "@pages/admin_analytics/AdminAnalyticsPage";
import AdminSupportPage from "@pages/admin_support/AdminSupportPage";
import AdminSettingsPage from "@pages/admin_settings/AdminSettingsPage";

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
    { path: "/chat", element: <ChatsPage /> },
    { path: "/chat/:id", element: <UserChatPage /> },
    { path: "/dashboard", element: <DashboardPage /> },
  ];

  const appRoutesAdmin = [
    { path: "/admin/users", element: <AdminUsersPage /> },
    { path: "/admin/user/:userID", element: <AdminUsersPage /> },
    {
      path: "/admin/chat/:userID/:companionID",
      element: <AdminUsersChat />,
    },
    { path: "/admin/payments/:paymentType", element: <AdminPaymentsPage /> },
    { path: "/admin/analytics", element: <AdminAnalyticsPage /> },
    { path: "/admin/support", element: <AdminSupportPage /> },
    { path: "/admin/settings/:part", element: <AdminSettingsPage /> },
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
      {appRoutesAdmin.map((el, ind) => (
        <Route
          key={ind}
          path={el.path}
          element={<ProtectedAdminRouter>{el.element}</ProtectedAdminRouter>}
        />
      ))}
      <Route path="*" element={<Navigate to={"/login"} />} />
    </Routes>
  );
};

export default RouterComponent;
