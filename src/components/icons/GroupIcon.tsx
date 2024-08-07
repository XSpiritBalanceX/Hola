interface IGroupIconProps {
  fill: string;
}

const GroupIcon = ({ fill }: IGroupIconProps) => {
  return (
    <svg
      width="24.000000"
      height="24.000000"
      viewBox="0 0 24 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path
        id="Vector"
        d="M12 5.55C13.36 5.55 14.54 4.32 14.54 2.73C14.54 1.16 13.36 0 12 0C10.63 0 9.45 1.19 9.45 2.75C9.45 4.32 10.63 5.55 12 5.55ZM4.67 5.69C5.85 5.69 6.88 4.62 6.88 3.24C6.88 1.87 5.85 0.86 4.67 0.86C3.48 0.86 2.44 1.9 2.45 3.25C2.45 4.62 3.48 5.69 4.67 5.69L4.67 5.69ZM19.32 5.69C20.51 5.69 21.54 4.62 21.54 3.25C21.54 1.9 20.51 0.86 19.32 0.86C18.14 0.86 17.11 1.87 17.11 3.24C17.11 4.62 18.14 5.69 19.32 5.69ZM1.12 11.44L5.95 11.44C5.29 10.48 6.1 8.54 7.47 7.49C6.76 7.02 5.85 6.67 4.66 6.67C1.79 6.67 0 8.79 0 10.55C0 11.12 0.31 11.44 1.12 11.44ZM22.87 11.44C23.68 11.44 24 11.12 24 10.55C24 8.79 22.2 6.67 19.33 6.67C18.14 6.67 17.23 7.02 16.52 7.49C17.89 8.54 18.7 10.48 18.04 11.44L22.87 11.44ZM7.99 11.44L15.99 11.44C16.99 11.44 17.35 11.15 17.35 10.59C17.35 8.95 15.29 6.69 11.99 6.69C8.69 6.69 6.63 8.95 6.63 10.59C6.63 11.15 6.99 11.44 7.99 11.44Z"
        fill={fill}
        fillOpacity="1.000000"
        fillRule="nonzero"
      />
    </svg>
  );
};

export default GroupIcon;
