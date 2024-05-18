import { MessageBox } from "react-chat-elements";
import "./CustomMessageBox.scss";
import "react-chat-elements/dist/main.css";

interface ICustomMessageBoxProps {
  id: number;
  position: string;
  type: string;
  text: string;
  date: Date;
  replyButton: boolean;
  removeButton: boolean;
  dateString: string;
  onReplyClick: (id: number) => void;
  classNameMessage: string;
  cbHandleClickMessage: (id: number) => void;
}

const CustomMessageBox = (props: ICustomMessageBoxProps) => {
  const handleReplyMessage = () => {
    props.onReplyClick(props.id);
  };

  const handleClickMessage = () => {
    props.cbHandleClickMessage(props.id);
  };

  return (
    <MessageBox
      {...(props as any)}
      onReplyClick={handleReplyMessage}
      className={props.classNameMessage}
      notch={false}
      removeButton={false}
      onClick={handleClickMessage}
    />
  );
};

export default CustomMessageBox;
