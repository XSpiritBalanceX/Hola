import { Route, Routes, Navigate } from "react-router-dom";
import AuthPage from "@pages/auth/AuthPage";

const RouterComponent = () => {
  return (
    <Routes>
      <Route path="/login" element={<AuthPage />} />
      <Route path="/registration" element={<AuthPage />} />
      <Route path="*" element={<Navigate to={"/login"} />} />
    </Routes>
  );
};

export default RouterComponent;
