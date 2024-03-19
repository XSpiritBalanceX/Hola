import { Box, CircularProgress } from "@mui/material";

interface IUserPictureProps {
  photo: string;
}

const UserPicture = ({ photo }: IUserPictureProps) => {
  const gradient = `radial-gradient(ellipse at center, rgba(0, 0, 255, ${40}) 0%, transparent 100%)`;

  const imageStyle = {
    display: "block",
    width: "100px",
    height: "100px",
  };

  return (
    <Box>
      <CircularProgress variant="determinate" value={25} />
      <img src={photo} alt="user" style={imageStyle} />
    </Box>
  );
};

export default UserPicture;
