interface ICardIconProps {
  fill: string;
}

const CardIcon = ({ fill }: ICardIconProps) => {
  return (
    <svg
      width="24.000000"
      height="24.000000"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect
        id="solar:card-linear"
        width="24.000000"
        height="24.000000"
        fill={fill}
        fillOpacity="0"
      />
      <g clipPath="url(#clip85_2683)">
        <path
          d="M2 10L22 10"
          stroke={fill}
          strokeOpacity="1.000000"
          strokeWidth="1.500000"
        />
        <path
          id="Vector"
          d="M3.17 5.17C4.34 4 6.22 4 10 4L14 4C17.77 4 19.65 4 20.82 5.17C22 6.34 22 8.22 22 12C22 15.77 22 17.65 20.82 18.82C19.65 20 17.77 20 14 20L10 20C6.22 20 4.34 20 3.17 18.82C2 17.65 2 15.77 2 12C2 8.22 2 6.34 3.17 5.17Z"
          stroke={fill}
          strokeOpacity="1.000000"
          strokeWidth="1.500000"
        />
        <path
          id="Vector"
          d="M10 16L6 16M14 16L12.5 16M2 10L22 10"
          stroke={fill}
          strokeOpacity="1.000000"
          strokeWidth="1.500000"
        />
      </g>
    </svg>
  );
};

export default CardIcon;
