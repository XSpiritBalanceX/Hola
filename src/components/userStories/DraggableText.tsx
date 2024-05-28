import { useState, useRef, useEffect, useCallback } from "react";
import Draggable from "react-draggable";
import { Box } from "@mui/material";
import { translate } from "@i18n";
import useResizeObserver from "use-resize-observer";
import { IDraggableTextProps } from "./TypesUsersStories";
import "./UserStories.scss";

const DraggableText = ({ textColor }: IDraggableTextProps) => {
  const { t } = translate("translate", { keyPrefix: "dashboardPage" });

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [size, setSize] = useState({ width: 180, height: 50 });
  const [text, setText] = useState("");
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const { width, height, ref } = useResizeObserver<HTMLTextAreaElement>();

  useEffect(() => {
    if (inputRef.current && !isDragging) {
      inputRef.current.focus();
    }
  }, [isDragging]);

  useEffect(() => {
    setSize({ width: width || 0, height: height || 0 });
  }, [width, height]);

  const handleDragStart = useCallback(() => {
    setIsDragging(true);
  }, []);

  const handleDragStop = useCallback(
    (e: any, data: { x: number; y: number }) => {
      setPosition({ x: data.x, y: data.y });
      setIsDragging(false);
    },
    []
  );

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setText(e.target.value);
    },
    []
  );

  return (
    <Box className="containerForDraggable">
      <Draggable
        position={{ x: position.x, y: position.y }}
        onStart={handleDragStart}
        onStop={handleDragStop}
      >
        <Box
          ref={ref}
          sx={{
            width: size.width,
            height: size.height,
          }}
          className="containerForDraggableField"
        >
          <textarea
            placeholder={t("yourText")}
            value={text}
            ref={inputRef}
            className="fieldDraggable"
            onChange={handleInputChange}
            style={{
              width: size.width,
              height: size.height,
              color: textColor,
            }}
          />
        </Box>
      </Draggable>
    </Box>
  );
};

export default DraggableText;
