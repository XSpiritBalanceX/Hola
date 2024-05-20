interface IEmojiIconProps {
  fill: string;
}

const EmojiIcon = ({ fill }: IEmojiIconProps) => {
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
        d="M7.37 9.85C7.81 9.85 8.23 9.67 8.54 9.36C8.85 9.05 9.02 8.63 9.02 8.2C9.02 7.76 8.85 7.34 8.54 7.03C8.23 6.72 7.81 6.55 7.37 6.55C6.93 6.55 6.51 6.72 6.2 7.03C5.89 7.34 5.72 7.76 5.72 8.2C5.72 8.63 5.89 9.05 6.2 9.36C6.51 9.67 6.93 9.85 7.37 9.85ZM17.27 8.2C17.27 8.63 17.1 9.05 16.79 9.36C16.48 9.67 16.06 9.85 15.62 9.85C15.18 9.85 14.76 9.67 14.45 9.36C14.14 9.05 13.97 8.63 13.97 8.2C13.97 7.76 14.14 7.34 14.45 7.03C14.76 6.72 15.18 6.55 15.62 6.55C16.06 6.55 16.48 6.72 16.79 7.03C17.1 7.34 17.27 7.76 17.27 8.2ZM-0.06 4.9L-0.06 18.1C-0.06 19.41 0.47 20.67 1.39 21.6C2.32 22.52 3.58 23.05 4.89 23.05L13.77 23.05C13.81 23.05 13.86 23.05 13.9 23.04C13.99 23.05 14.08 23.04 14.17 23.02C14.9 22.93 15.58 22.6 16.1 22.08L22.08 16.1C22.6 15.58 22.93 14.9 23.02 14.17C23.04 14.08 23.05 13.99 23.04 13.9C23.04 13.86 23.04 13.82 23.04 13.77L23.04 4.9C23.04 3.58 22.52 2.32 21.59 1.39C20.67 0.47 19.41 -0.05 18.09 -0.05L4.89 -0.05C3.58 -0.05 2.32 0.47 1.39 1.39C0.47 2.32 -0.06 3.58 -0.06 4.9ZM21.39 4.9L21.39 13.15L17.68 13.15C15.69 13.15 13.99 14.43 13.39 16.22C12.77 16.37 12.13 16.45 11.5 16.45C9.99 16.45 8.87 16.07 8.15 15.71C7.87 15.57 7.6 15.4 7.35 15.22C7.27 15.16 7.2 15.1 7.13 15.04L7.12 15.03C6.97 14.88 6.76 14.79 6.54 14.79C6.32 14.79 6.11 14.88 5.96 15.04C5.8 15.19 5.72 15.4 5.72 15.62C5.72 15.84 5.81 16.05 5.96 16.2L5.96 16.21L5.97 16.21L5.98 16.22L6 16.24C6.12 16.35 6.24 16.44 6.36 16.54C6.6 16.72 6.95 16.95 7.41 17.18C8.34 17.64 9.7 18.1 11.5 18.1C12.09 18.1 12.64 18.05 13.14 17.96L13.14 21.4L4.89 21.4C4.02 21.4 3.18 21.05 2.56 20.43C1.94 19.81 1.59 18.97 1.59 18.1L1.59 4.9C1.59 4.02 1.94 3.18 2.56 2.56C3.18 1.94 4.02 1.6 4.89 1.6L18.09 1.6C18.97 1.6 19.81 1.94 20.43 2.56C21.05 3.18 21.39 4.02 21.39 4.9ZM14.94 20.91C14.89 20.96 14.84 21 14.79 21.04L14.79 17.68C14.79 16.09 16.09 14.8 17.68 14.8L21.04 14.8C21 14.84 20.96 14.89 20.91 14.94L14.94 20.91Z"
        fill={fill}
        fillOpacity="1.000000"
        fillRule="nonzero"
      />
    </svg>
  );
};

export default EmojiIcon;
