interface ISupportIconProps {
  fill: string;
}

const SupportIcon = ({ fill }: ISupportIconProps) => {
  return (
    <svg
      width="24.000000"
      height="24.000000"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path
        id="Vector"
        d="M8.5 0C3.81 0 0 3.81 0 8.5C0 13.18 3.81 17 8.5 17L9 17L9 20C13.85 17.66 17 13 17 8.5C17 3.81 13.18 0 8.5 0ZM9.5 14.5L7.5 14.5L7.5 12.5L9.5 12.5L9.5 14.5ZM9.5 11L7.5 11C7.5 7.75 10.5 8 10.5 6C10.5 4.89 9.6 4 8.5 4C7.39 4 6.5 4.89 6.5 6L4.5 6C4.5 3.79 6.29 2 8.5 2C10.71 2 12.5 3.79 12.5 6C12.5 8.5 9.5 8.75 9.5 11Z"
        fill={fill}
        fillOpacity="1.000000"
        fillRule="nonzero"
      />
    </svg>
  );
};

export default SupportIcon;
