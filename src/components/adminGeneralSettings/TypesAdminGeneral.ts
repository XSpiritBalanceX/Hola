export interface IAdminPhotoProps {
  admin_photo: string;
}

export interface IAdminGeneralFormProps {
  name: string;
  date_of_birth: string;
  email: string;
}

export type TAdminInformation = {
  name: string;
  date_of_birth: string;
  email: string;
};
