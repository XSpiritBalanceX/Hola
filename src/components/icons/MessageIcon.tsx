interface IMessageIconProps {
  fill: string;
}

const MessageIcon = ({ fill }: IMessageIconProps) => {
  return (
    <svg
      width="27.000000"
      height="25.000000"
      viewBox="0 0 27 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs />
      <path
        id="Vector"
        d="M2.73 17.64C1.23 15.36 0.69 12.66 1.2 10.04C1.72 7.41 3.25 5.06 5.52 3.39C7.8 1.73 10.65 0.89 13.55 1.01C16.45 1.13 19.21 2.21 21.31 4.05C23.4 5.9 24.7 8.38 24.95 11.03C25.2 13.68 24.39 16.33 22.68 18.47C20.96 20.62 18.45 22.12 15.61 22.7C12.78 23.28 9.81 22.9 7.26 21.62L1 23L2.73 17.64Z"
        stroke={fill}
        strokeOpacity="1.000000"
        strokeWidth="2.000000"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MessageIcon;
