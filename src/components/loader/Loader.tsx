import { Backdrop, CircularProgress } from "@mui/material";

interface ILoaderProps {
  isLoading: boolean;
}

const Loader = ({ isLoading }: ILoaderProps) => {
  return (
    <Backdrop
      open={isLoading}
      sx={{
        color: "#554cb6",
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default Loader;
