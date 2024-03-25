interface ILogOutIconProps {
  fill: string;
}

const LogOutIcon = ({ fill }: ILogOutIconProps) => {
  return (
    <svg
      width="24.000000"
      height="24.000000"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <clipPath id="clip134_9536">
          <rect
            id="tabler_logout"
            width="24.000000"
            height="24.000000"
            fill="white"
            fillOpacity="0"
          />
        </clipPath>
      </defs>
      <g clipPath="url(#clip134_9536)">
        <path
          id="path"
          d="M14 8L14 6C14 5.46 13.78 4.96 13.41 4.58C13.03 4.21 12.53 4 12 4L5 4C4.46 4 3.96 4.21 3.58 4.58C3.21 4.96 3 5.46 3 6L3 18C3 18.53 3.21 19.03 3.58 19.41C3.96 19.78 4.46 20 5 20L12 20C12.53 20 13.03 19.78 13.41 19.41C13.78 19.03 14 18.53 14 18L14 16"
          stroke={fill}
          strokeOpacity="1.000000"
          strokeWidth="1.500000"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <path
          id="path"
          d="M9 12L21 12M18 16L21 12L18 12M40 0"
          stroke={fill}
          strokeOpacity="1.000000"
          strokeWidth="1.500000"
          strokeLinejoin="round"
        />
        <path
          id="path"
          d="M17 8.5L21 12M18 0"
          stroke={fill}
          strokeOpacity="1.000000"
          strokeWidth="1.500000"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default LogOutIcon;
