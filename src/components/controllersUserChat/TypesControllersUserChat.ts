import { TNewMessage } from "@pages/user_chat/TypesUserChat";

export interface IControllersMessageProps {
  cbHandleAddMessage: (new_message: TNewMessage) => void;
}

export interface IControllersInHeaderProps {
  cbHandleIsSelectedMessage: (value: boolean) => void;
  countOfMessages: number;
}
