interface IReplyIconProps {
  fill: string;
}

const ReplyIcon = ({ fill }: IReplyIconProps) => {
  return (
    <svg
      width="24.000000"
      height="24.000000"
      viewBox="0 0 20 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path
        id="Vector"
        d="M-0.15 10.42C3.08 6.83 7.1 6.17 11.28 8.14L11.28 11.57L16.99 5.85L11.28 0.14L11.28 3.57C5.35 3.03 1.54 5.31 -0.15 10.42Z"
        stroke={fill}
        strokeOpacity="1.000000"
        strokeWidth="1.300000"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ReplyIcon;
