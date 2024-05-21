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
  classNameMessage: string;
  cbHandleClickMessage: (id: number) => void;
}

const CustomMessageBox = (props: ICustomMessageBoxProps) => {
  const handleClickMessage = () => {
    props.cbHandleClickMessage(props.id);
  };

  return (
    <MessageBox
      {...(props as any)}
      replyButton={false}
      className={props.classNameMessage}
      notch={false}
      removeButton={false}
      onClick={handleClickMessage}
    />
  );
};

export default CustomMessageBox;
