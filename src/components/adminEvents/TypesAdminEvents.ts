import { TEvent } from "@pages/admin_events/AdminEventsPage";

export interface IAdminEventActiveProps {
  cbHandleEditEvent: (data: TEvent) => void;
}
