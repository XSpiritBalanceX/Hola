export interface IPasswordsFormProps {
  cbHandleSavePassword: () => void;
}

export interface IResetPasswordInfo {
  current_password: string;
  new_password: string;
  confirm_password: string;
  confirmation_code: string;
}

export interface IForgotPasswordInfo {
  new_password: string;
  confirm_password: string;
  confirmation_code: string;
}

export interface IEmailInformation {
  email: string;
}
