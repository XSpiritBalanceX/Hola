export interface IPasswordsFormProps {
  cbHandleSavePassword: () => void;
}

export interface IResetPasswordInfo {
  current_password: string;
  new_password: string;
  confirm_password: string;
}

export interface IEmailInformation {
  email: string;
}
