import { useRef, useState } from "react";
import { Button, Box } from "@mui/material";
import { translate } from "@i18n";
import CameraIcon from "@components/icons/CameraIcon";

interface ITakePhotoButtonProps {
  cbCloseModal: () => void;
  cbHandleSnapshot: (photo: string) => void;
}

const TakePhotoButton = ({
  cbCloseModal,
  cbHandleSnapshot,
}: ITakePhotoButtonProps) => {
  const { t } = translate("translate", { keyPrefix: "modals.profilePhoto" });

  const [isClickOnButton, setIsClickOnButton] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);

  const handleTakePhoto = async () => {
    try {
      setIsClickOnButton(true);
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
        videoRef.current.play();
      }
    } catch (error) {
      console.error("Failed to open camera:", error);
    }
  };

  const handleTakeSnapshot = () => {
    if (videoRef.current) {
      const canvas = document.createElement("canvas");
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      const context = canvas.getContext("2d");
      if (context) {
        context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
        const snapshotUrl = canvas.toDataURL("image/png");
        cbHandleSnapshot(snapshotUrl);
        cbCloseModal();
      }
    }
  };

  return (
    <>
      {isClickOnButton && (
        <Box className="videoFrameBox">
          <video ref={videoRef} className="videoFrame" />
          <Button
            type="button"
            onClick={handleTakeSnapshot}
            className="takePhotoButton"
          >
            <CameraIcon fill="#554cb6" />
          </Button>
        </Box>
      )}
      <Button type="button" onClick={handleTakePhoto}>
        <CameraIcon fill="black" />
        {t("takePhoto")}
      </Button>
    </>
  );
};

export default TakePhotoButton;
