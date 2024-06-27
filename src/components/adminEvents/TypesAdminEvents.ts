import { TEvent } from "@pages/admin_events/AdminEventsPage";

export interface IAdminEventActiveProps {
  cbHandleEditEvent: (data: TEvent) => void;
}

export interface IAdminEventChangeProps {
  event?: TEvent;
}

export interface IChangeEvent {
  category: number;
  name: string;
  date_start: string;
  date_end?: string;
  place: string;
}

export interface IAdminEventPhotoProps {
  currentEventPhoto: string | File | null;
  cbHandleEventPhoto: (photo: File | "") => void;
}
