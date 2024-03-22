interface IUserIconProps {
  fill: string;
}

const UserIcon = ({ fill }: IUserIconProps) => {
  return (
    <svg
      width="24.000000"
      height="24.000000"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs />
      <path
        id="Vector"
        d="M12 12C13.59 12 15.11 11.36 16.24 10.24C17.36 9.11 18 7.59 18 6C18 4.4 17.36 2.88 16.24 1.75C15.11 0.63 13.59 0 12 0C10.4 0 8.88 0.63 7.75 1.75C6.63 2.88 6 4.4 6 6C6 7.59 6.63 9.11 7.75 10.24C8.88 11.36 10.4 12 12 12ZM16 6C16 7.06 15.57 8.07 14.82 8.82C14.07 9.57 13.06 10 12 10C10.93 10 9.92 9.57 9.17 8.82C8.42 8.07 8 7.06 8 6C8 4.93 8.42 3.92 9.17 3.17C9.92 2.42 10.93 2 12 2C13.06 2 14.07 2.42 14.82 3.17C15.57 3.92 16 4.93 16 6ZM24 22C24 24 22 24 22 24L2 24C2 24 0 24 0 22C0 20 2 14 12 14C22 14 24 20 24 22ZM22 21.99C21.99 21.5 21.69 20.02 20.33 18.66C19.03 17.36 16.57 16 12 16C7.42 16 4.96 17.36 3.66 18.66C2.3 20.02 2 21.5 2 21.99L22 21.99Z"
        fill={fill}
        fillOpacity="1.000000"
        fillRule="nonzero"
      />
    </svg>
  );
};

export default UserIcon;
