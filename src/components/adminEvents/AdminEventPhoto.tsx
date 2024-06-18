import { Box, Button, FormLabel } from "@mui/material";
import { translate } from "@i18n";
import { IAdminEventPhotoProps } from "./TypesAdminEvents";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import "./AdminEvents.scss";

const AdminEventPhoto = ({
  currentEventPhoto,
  cbHandleEventPhoto,
}: IAdminEventPhotoProps) => {
  const { t } = translate("translate", { keyPrefix: "adminEventsPage" });

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    const newPhoto = files && files[0];
    newPhoto && cbHandleEventPhoto(newPhoto);
  };

  return (
    <Box className="eventPhotoBox">
      <FormLabel className={"labelEventPhoto"}>{t("cover")}</FormLabel>
      <Box className="eventPhotoControlsBox">
        {currentEventPhoto && (
          <img
            src={
              currentEventPhoto instanceof File
                ? URL.createObjectURL(currentEventPhoto)
                : currentEventPhoto
            }
            alt="event"
          />
        )}
        {!currentEventPhoto && (
          <Box>
            <label htmlFor={`file-input`} className="uploadEventPhotoLabel">
              <FileUploadOutlinedIcon />
              {t("upload")}
            </label>
            <input
              type="file"
              id={`file-input`}
              onChange={handlePhotoUpload}
              style={{ display: "none" }}
            />
          </Box>
        )}
        {currentEventPhoto && (
          <Box className="controlsEventButtonsBox">
            <label htmlFor={`file-input`} className="uploadPhotoEventButton">
              {t("upload")}
            </label>
            <input
              type="file"
              id={`file-input`}
              onChange={handlePhotoUpload}
              style={{ display: "none" }}
            />
            <Button type="button" className="deletePhotoEventButton">
              {t("delete")}
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default AdminEventPhoto;
