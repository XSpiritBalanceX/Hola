export interface IUserItemProps {
  id: number;
  name: string;
  age: number;
  photo: string;
  email: string;
  acc_type: string;
  cbHandleSelectedUser: (id: number) => void;
}
