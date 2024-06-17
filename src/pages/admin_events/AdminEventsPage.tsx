import { useState } from "react";
import { Container, Box } from "@mui/material";
import AdminMenu from "@components/adminMenu/AdminMenu";
import { translate } from "@i18n";
import { useParams } from "react-router-dom";
import AdminPublicationsMenu from "@components/adminPublicationsMenu/AdminPublicationsMenu";
import AdminEventsMenu from "./AdminEventsMenu";
import AdminEventActive from "@components/adminEvents/AdminEventActive";
import AdminEventsArchive from "@components/adminEvents/AdminEventsArchive";
import "./AdminEventsPage.scss";

export type TEvent = {
  id: number;
  photo: string;
  category: number;
  name: string;
  date_start: string;
  date_end: string;
  place: string;
};

const AdminEventsPage = () => {
  const { t } = translate("translate", { keyPrefix: "adminEventsPage" });

  const [editEvent, setEditEvent] = useState<null | TEvent>(null);

  const { part } = useParams();

  const handleEditEvent = (data: TEvent) => {
    setEditEvent(data);
  };

  return (
    <Container className="adminEventsContainer">
      <AdminMenu />
      <Box className="adminEventsContent">
        <p className="titleEvents">{t("publications")}</p>
        <Box className="adminEventsBox">
          <AdminPublicationsMenu />
          {part === "new" ? (
            <p className="newEventTitle">{t("newEvent")}</p>
          ) : part === "edit" ? (
            <p className="newEventTitle">{t("changeEvent")}</p>
          ) : (
            <AdminEventsMenu />
          )}
          {part === "active" && (
            <AdminEventActive cbHandleEditEvent={handleEditEvent} />
          )}
          {part?.includes("archive") && <AdminEventsArchive />}
        </Box>
      </Box>
    </Container>
  );
};

export default AdminEventsPage;
