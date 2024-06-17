interface IArticleIconProps {
  fill: string;
}

const ArticleIcon = ({ fill }: IArticleIconProps) => {
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
        id="path"
        d="M8.25 7.5C8.05 7.5 7.86 7.57 7.71 7.71C7.57 7.86 7.5 8.05 7.5 8.25C7.5 8.44 7.57 8.63 7.71 8.78C7.86 8.92 8.05 9 8.25 9L15.75 9C15.94 9 16.13 8.92 16.28 8.78C16.42 8.63 16.5 8.44 16.5 8.25C16.5 8.05 16.42 7.86 16.28 7.71C16.13 7.57 15.94 7.5 15.75 7.5L8.25 7.5ZM8.25 11.25C8.05 11.25 7.86 11.32 7.71 11.46C7.57 11.61 7.5 11.8 7.5 12C7.5 12.19 7.57 12.38 7.71 12.53C7.86 12.67 8.05 12.75 8.25 12.75L12.75 12.75C12.94 12.75 13.13 12.67 13.28 12.53C13.42 12.38 13.5 12.19 13.5 12C13.5 11.8 13.42 11.61 13.28 11.46C13.13 11.32 12.94 11.25 12.75 11.25L8.25 11.25ZM8.25 15C8.05 15 7.86 15.07 7.71 15.21C7.57 15.36 7.5 15.55 7.5 15.75C7.5 15.94 7.57 16.13 7.71 16.28C7.86 16.42 8.05 16.5 8.25 16.5L15.75 16.5C15.94 16.5 16.13 16.42 16.28 16.28C16.42 16.13 16.5 15.94 16.5 15.75C16.5 15.55 16.42 15.36 16.28 15.21C16.13 15.07 15.94 15 15.75 15L8.25 15ZM6.75 3C5.75 3 4.8 3.39 4.09 4.09C3.39 4.8 3 5.75 3 6.75L3 17.25C3 18.24 3.39 19.19 4.09 19.9C4.8 20.6 5.75 21 6.75 21L17.25 21C18.24 21 19.19 20.6 19.9 19.9C20.6 19.19 21 18.24 21 17.25L21 6.75C21 5.75 20.6 4.8 19.9 4.09C19.19 3.39 18.24 3 17.25 3L6.75 3ZM4.5 6.75C4.5 6.15 4.73 5.58 5.15 5.15C5.58 4.73 6.15 4.5 6.75 4.5L17.25 4.5C17.84 4.5 18.41 4.73 18.84 5.15C19.26 5.58 19.5 6.15 19.5 6.75L19.5 17.25C19.5 17.84 19.26 18.41 18.84 18.84C18.41 19.26 17.84 19.5 17.25 19.5L6.75 19.5C6.15 19.5 5.58 19.26 5.15 18.84C4.73 18.41 4.5 17.84 4.5 17.25L4.5 6.75Z"
        fill={fill}
        fillOpacity="1.000000"
        fillRule="nonzero"
      />
    </svg>
  );
};

export default ArticleIcon;