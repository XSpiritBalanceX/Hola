import { useState, useRef, useEffect, useCallback } from "react";
import Draggable from "react-draggable";
import { Box } from "@mui/material";
import { translate } from "@i18n";
import useResizeObserver from "use-resize-observer";
import { IDraggableTextProps } from "./TypesUsersStories";
import BucketIcon from "@components/icons/BucketIcon";
import "./UserStories.scss";

const DraggableText = ({ textColor, cbHandleAddText }: IDraggableTextProps) => {
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
      checkIfDroppingOnDropZone(e);
    },
    // eslint-disable-next-line
    []
  );

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setText(e.target.value);
    },
    []
  );

  const checkIfDroppingOnDropZone = useCallback((e: any) => {
    const draggableElement = e.target as HTMLElement;
    const dropZone = document.getElementById("dropZone");
    if (draggableElement && dropZone) {
      const draggableRect = draggableElement.getBoundingClientRect();
      const dropZoneRect = dropZone.getBoundingClientRect();
      const isOverlapping =
        draggableRect.left < dropZoneRect.right &&
        draggableRect.right > dropZoneRect.left &&
        draggableRect.top < dropZoneRect.bottom &&
        draggableRect.bottom > dropZoneRect.top;

      if (isOverlapping) {
        cbHandleAddText(false);
      }
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
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
      {isDragging && (
        <Box id="dropZone">
          <BucketIcon fill="#ffffff" />
        </Box>
      )}
    </>
  );
};

export default DraggableText;
