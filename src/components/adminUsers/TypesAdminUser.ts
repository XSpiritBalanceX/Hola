export interface IUserItemProps {
  id: number;
  name: string;
  age: number;
  photo: string;
  email: string;
  acc_type: string;
  cbHandleSelectedUser: (id: number) => void;
}

interface IUserInformation {
  id: number;
  user_status: string;
  name: string;
  age: number;
  email: string;
  acc_type: string;
  avatar: string;
  photos: string[];
  description: string;
  subscription: {
    start_date: string;
    end_date: string;
    last_payment: string;
    card: string;
  };
  matches: { name: string; age: number; email: string; photo: string }[];
}

export interface ISelectedUserProps {
  information: IUserInformation;
}
