import GroupIcon from "@components/icons/GroupIcon";
import PaymentIcon from "@components/icons/PaymentIcon";
import AnalyticsIcon from "@components/icons/AnalyticsIcon";
import SupportIcon from "@components/icons/SupportIcon";
import SettingFillIcon from "@components/icons/SettingFillIcon";
import AddArticleIcon from "@components/icons/AddArticleIcon";
import { useLocation } from "react-router-dom";
import { translate } from "@i18n";
import { NavLink } from "react-router-dom";
import "./AdminMenu.scss";

const AdminMenuLinks = () => {
  const { t } = translate("translate", { keyPrefix: "adminMenu" });

  const { pathname } = useLocation();
  return (
    <>
      <NavLink
        to={"/admin/users/all/1"}
        className={() =>
          pathname.includes("users") ||
          pathname.includes("chat") ||
          pathname.includes("user")
            ? "nav-link active"
            : "nav-link"
        }
      >
        <GroupIcon
          fill={
            pathname.includes("users") ||
            pathname.includes("chat") ||
            pathname.includes("user")
              ? "#554cb6"
              : "#bfc3cf"
          }
        />
        {t("users")}
      </NavLink>
      <NavLink
        to={"/admin/articles/active"}
        className={() =>
          pathname.includes("articles") || pathname.includes("events")
            ? "nav-link active"
            : "nav-link"
        }
      >
        <AddArticleIcon
          fill={
            pathname.includes("articles") || pathname.includes("events")
              ? "#554cb6"
              : "#bfc3cf"
          }
        />
        {t("publications")}
      </NavLink>
      <NavLink to={"/admin/payments/all"} className="nav-link">
        <PaymentIcon
          fill={pathname.includes("payments") ? "#554cb6" : "#bfc3cf"}
        />
        {t("payments")}
      </NavLink>
      <NavLink to={"/admin/analytics"} className="nav-link">
        <AnalyticsIcon
          fill={pathname.includes("analytics") ? "#554cb6" : "#bfc3cf"}
        />
        {t("analytics")}
      </NavLink>
      <NavLink to={"/admin/support"} className="nav-link">
        <SupportIcon
          fill={pathname.includes("support") ? "#554cb6" : "#bfc3cf"}
        />
        {t("supportRequests")}
      </NavLink>
      <NavLink
        to={"/admin/settings/general"}
        className={() =>
          pathname.includes("settings") ? "nav-link active" : "nav-link"
        }
      >
        <SettingFillIcon
          fill={pathname.includes("settings") ? "#554cb6" : "#bfc3cf"}
        />
        {t("settings")}
      </NavLink>
    </>
  );
};

export default AdminMenuLinks;
