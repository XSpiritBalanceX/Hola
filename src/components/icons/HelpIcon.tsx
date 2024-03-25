interface IHelpIconProps {
  fill: string;
}

const HelpIcon = ({ fill }: IHelpIconProps) => {
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
        <clipPath id="clip0_3966">
          <rect
            id="tabler:help"
            width="24.000000"
            height="24.000000"
            fill="white"
            fillOpacity="0"
          />
        </clipPath>
      </defs>
      <rect
        id="tabler:help"
        width="24.000000"
        height="24.000000"
        fill="#FFFFFF"
        fillOpacity="0"
      />
      <g clipPath="url(#clip0_3966)">
        <path
          id="Vector"
          d="M12 13.5C11.98 13.17 12.06 12.85 12.24 12.58C12.42 12.31 12.69 12.1 13 12C13.37 11.85 13.71 11.62 13.98 11.33C14.25 11.03 14.45 10.67 14.56 10.29C14.68 9.9 14.7 9.49 14.62 9.1C14.55 8.7 14.39 8.33 14.15 8.01C13.9 7.68 13.59 7.42 13.23 7.24C12.87 7.06 12.48 6.97 12.07 6.97C11.67 6.97 11.27 7.06 10.91 7.24C10.55 7.41 10.24 7.67 10 7.67"
          stroke={fill}
          strokeOpacity="1.000000"
          strokeWidth="1.500000"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <path
          id="Vector"
          d="M3.68 15.44C4.13 16.53 4.8 17.52 5.63 18.36C6.47 19.19 7.46 19.86 8.55 20.31C9.64 20.76 10.81 21 12 21C13.18 21 14.35 20.76 15.44 20.31C16.53 19.86 17.52 19.19 18.36 18.36C19.19 17.52 19.86 16.53 20.31 15.44C20.76 14.35 21 13.18 21 12C21 10.81 20.76 9.64 20.31 8.55C19.86 7.46 19.19 6.47 18.36 5.63C17.52 4.8 16.53 4.13 15.44 3.68C14.35 3.23 13.18 3 12 3C10.81 3 9.64 3.23 8.55 3.68C7.46 4.13 6.47 4.8 5.63 5.63C4.8 6.47 4.13 7.46 3.68 8.55C3.23 9.64 3 10.81 3 12C3 13.18 3.23 14.35 3.68 15.44ZM12 17L12 16"
          stroke={fill}
          strokeOpacity="1.000000"
          strokeWidth="1.500000"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
};

export default HelpIcon;
