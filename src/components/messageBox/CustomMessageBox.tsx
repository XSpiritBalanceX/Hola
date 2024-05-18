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
}

const CustomMessageBox = (props: ICustomMessageBoxProps) => {
  return (
    <MessageBox
      {...(props as any)}
      onReplyClick={() => props.onReplyClick(props.id)}
      className={props.classNameMessage}
      notch={false}
    />
  );
};

export default CustomMessageBox;
