interface IPrivacyIconProps {
  fill: string;
}

const PrivacyIcon = ({ fill }: IPrivacyIconProps) => {
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
        <clipPath id="clip0_3960">
          <rect
            id="carbon:security"
            width="24.000000"
            height="24.000000"
            fill="white"
            fillOpacity="0"
          />
        </clipPath>
      </defs>
      <rect
        id="carbon:security"
        width="24.000000"
        height="24.000000"
        fill="#FFFFFF"
        fillOpacity="0"
      />
      <g clipPath="url(#clip0_3960)">
        <path
          id="Vector"
          d="M10.5 12.44L8.55 10.5L7.5 11.55L10.5 14.55L16.5 8.55L15.44 7.5L10.5 12.44Z"
          fill={fill}
          fillOpacity="1.000000"
          fillRule="nonzero"
        />
        <path
          id="Vector"
          d="M12 22.5L7.36 20.03C6.04 19.32 4.94 18.27 4.17 16.99C3.4 15.71 2.99 14.24 3 12.75L3 3C3 2.6 3.15 2.22 3.43 1.93C3.72 1.65 4.1 1.5 4.5 1.5L19.5 1.5C19.89 1.5 20.27 1.65 20.56 1.93C20.84 2.22 20.99 2.6 21 3L21 12.75C21 14.24 20.59 15.71 19.82 16.99C19.05 18.27 17.95 19.32 16.63 20.03L12 22.5ZM4.5 3L4.5 12.75C4.49 13.97 4.83 15.17 5.46 16.22C6.09 17.27 6.99 18.13 8.07 18.7L12 20.79L15.92 18.7C17 18.13 17.9 17.27 18.53 16.22C19.16 15.17 19.5 13.97 19.5 12.75L19.5 3L4.5 3Z"
          fill={fill}
          fillOpacity="1.000000"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
};

export default PrivacyIcon;
