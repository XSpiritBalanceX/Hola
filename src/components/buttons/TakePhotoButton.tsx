import { useRef, useState } from "react";
import { Button, Box } from "@mui/material";
import { translate } from "@i18n";
import CameraIcon from "@components/icons/CameraIcon";
import { useUploadAvatarMutation } from "@store/profileInformationApi";

interface ITakePhotoButtonProps {
  cbCloseModal: () => void;
}

const TakePhotoButton = ({ cbCloseModal }: ITakePhotoButtonProps) => {
  const { t } = translate("translate", { keyPrefix: "modals.profilePhoto" });

  const [uploadAvatar] = useUploadAvatarMutation();

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
        convertToFile(snapshotUrl);
      }
    }
  };

  const convertToFile = (data: string) => {
    fetch(data)
      .then((res) => res.blob())
      .then((blob) => {
        const file = new File([blob], "File name", { type: "image/png" });
        uploadPhoto(file);
      });
  };

  const uploadPhoto = (file: File) => {
    const formData = new FormData();
    formData.append("avatar", file);
    uploadAvatar(formData)
      .unwrap()
      .then(() => {
        cbCloseModal();
      })
      .catch((err: any) => console.log(err));
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
