export interface IMessagesList {
  id: number;
  message: string;
  time: string;
  read?: boolean;
}

export interface INavigationChatProps {
  online: boolean;
  image: string;
  name: string;
}

export type TNewMessage = {
  id: number;
  message: string;
  time: string;
};
