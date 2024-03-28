interface ICameraIconProps {
  fill: string;
}

const CameraIcon = ({ fill }: ICameraIconProps) => {
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
        <clipPath id="clip252_10288">
          <rect
            id="solar_camera-linear"
            width="25.000000"
            height="25.000000"
            fill="white"
            fillOpacity="0"
          />
        </clipPath>
      </defs>
      <g clipPath="url(#clip252_10288)">
        <path
          id="path"
          d="M15.62 13.54C15.62 11.81 14.22 10.41 12.5 10.41C10.77 10.41 9.37 11.81 9.37 13.54C9.37 15.26 10.77 16.66 12.5 16.66C14.22 16.66 15.62 15.26 15.62 13.54Z"
          stroke={fill}
          strokeOpacity="1.000000"
          strokeWidth="1.500000"
        />
        <path
          id="path"
          d="M14.81 21.87C18.06 21.87 19.69 21.87 20.85 21.1C21.36 20.77 21.79 20.35 22.13 19.85C22.91 18.7 22.91 17.11 22.91 13.92C22.91 10.72 22.91 9.13 22.13 7.98C21.79 7.48 21.36 7.06 20.85 6.73C20.1 6.23 19.16 6.06 17.73 6C17.04 6 16.45 5.49 16.31 4.82C16.21 4.34 15.95 3.91 15.56 3.6C15.17 3.28 14.69 3.12 14.2 3.12L10.79 3.12C9.76 3.12 8.88 3.83 8.68 4.82C8.54 5.49 7.95 6 7.26 6C5.83 6.06 4.89 6.24 4.14 6.73C3.63 7.06 3.2 7.48 2.86 7.98C2.08 9.13 2.08 10.72 2.08 13.92C2.08 17.11 2.08 18.7 2.86 19.85C3.2 20.35 3.63 20.77 4.14 21.1C5.3 21.87 6.93 21.87 10.18 21.87L14.81 21.87Z"
          stroke={fill}
          strokeOpacity="1.000000"
          strokeWidth="1.500000"
        />
        <path
          id="path"
          d="M18.75 10.41L19.79 10.41"
          stroke="#000000"
          strokeOpacity="1.000000"
          strokeWidth="1.500000"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
};

export default CameraIcon;
