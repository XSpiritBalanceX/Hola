import { Container } from "@mui/material";
import { useGetChatsQuery } from "@store/requestApi/chatApi";
import Loader from "@components/loader/Loader";
import CustomError from "@components/error/CustomError";

const ChatPage = () => {
  const { data, error, isLoading } = useGetChatsQuery();

  console.log(data);
  return (
    <>
      <Loader isLoading={isLoading} />
      {error && !data && <CustomError />}
      {!error && data && <Container>ChatPage</Container>}
    </>
  );
};

export default ChatPage;
