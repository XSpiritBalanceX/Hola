interface ILikeFilledIconProps {
  fill: string;
}

const LikeFilledIcon = ({ fill }: ILikeFilledIconProps) => {
  return (
    <svg
      width="24.000000"
      height="24.000000"
      viewBox="0 0 28 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs />
      <path
        id="Vector"
        d="M20.69 0.01C15.98 0.01 14 3.28 14 3.28C14 3.28 12.01 0 7.3 0C3.33 0.01 0 3.28 0 7.19C0 16.15 14 23.33 14 23.33C14 23.33 28 16.15 28 7.19C28 3.28 24.66 0.01 20.69 0.01Z"
        fill={fill}
        fillOpacity="1.000000"
        fillRule="nonzero"
      />
    </svg>
  );
};

export default LikeFilledIcon;
