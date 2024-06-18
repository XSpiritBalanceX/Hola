import { useState } from "react";
import {
  Box,
  Button,
  FormLabel,
  FormHelperText,
  TextField,
  MenuItem,
  InputAdornment,
} from "@mui/material";
import { listOfEventCategory } from "@utils/listOfEventCategory";
import { translate } from "@i18n";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Path, useForm } from "react-hook-form";
import { IAdminEventChangeProps, IChangeEvent } from "./TypesAdminEvents";
import moment from "moment";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";
import ControlledInput from "@components/fields/ControlledInput";
import InputMask from "react-input-mask";
import "./AdminEvents.scss";

const AdminEventChange = ({ event }: IAdminEventChangeProps) => {
  const { t } = translate("translate", { keyPrefix: "adminEventsPage" });

  const [eventPhoto, setEventPhoto] = useState<string | File | null>(
    event?.photo || ""
  );

  const validationSchema = Yup.object().shape({
    category: Yup.number().required(t("errorRequiredField")),
    name: Yup.string().required(t("errorRequiredField")),
    date_start: Yup.string()
      .required(t("errorRequiredField"))
      .test("valid-date", t("invalidDate"), (value) => {
        const dob = moment(value, "DD.MM.YYYY");

        return dob.isValid() && dob.isAfter(moment().startOf("day"));
      }),
    date_end: Yup.string().test("valid-date", t("invalidDate"), (value) => {
      if (!value) {
        return true;
      }
      const dob = moment(value, "DD.MM.YYYY");
      return dob.isValid() && dob.isAfter(moment().startOf("day"));
    }),
    place: Yup.string().required(t("errorRequiredField")),
  });

  const currentCategory =
    event && listOfEventCategory.find((el) => el.id === event.category);

  const {
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<IChangeEvent>({
    resolver: yupResolver(validationSchema),
    values: event && {
      category: currentCategory!.id,
      name: event.name,
      date_start: moment(event.date_start).format("DD MM YYYY"),
      date_end: moment(event.date_start).format("DD MM YYYY") || "",
      place: event.place,
    },
  });

  const handleSubmitEvent = (data: IChangeEvent) => {
    console.log(data);
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    const newPhoto = files && files[0];
    setEventPhoto(newPhoto);
  };

  const handleChangeCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue("category", Number(e.target.value));
  };

  const handleDateOfEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setValue(name as Path<IChangeEvent>, value);
  };

  const datesOfEvent = [
    {
      label: "dateStart",
      name: "date_start",
      error: errors && errors.date_start,
    },
    {
      label: "dateEnd",
      name: "date_end",
      error: errors && errors.date_end,
    },
  ];

  return (
    <Box className="eventChangeBox">
      <Box className="eventPhotoBox"></Box>
      <form onSubmit={handleSubmit(handleSubmitEvent)}>
        <Box className="controlsEventBox">
          <FormLabel
            className={`labelEvent ${errors.category ? "errorLabelEvent" : ""}`}
          >
            {t("category")}
          </FormLabel>
          <TextField
            select={true}
            value={watch("category") || ""}
            onChange={handleChangeCategory}
            InputProps={{
              endAdornment: !!errors.category && (
                <InputAdornment position="end" className="errorIcon">
                  <WarningAmberRoundedIcon />
                </InputAdornment>
              ),
            }}
            className={`eventField ${
              watch("category") ? "filledInEventField" : ""
            }`}
          >
            {listOfEventCategory.map((el, ind) => (
              <MenuItem key={ind} value={el.id}>
                {t(el.label)}
              </MenuItem>
            ))}
          </TextField>
          <FormHelperText className="errorMessage">
            {errors && errors.category?.message}
          </FormHelperText>
        </Box>
        <Box className="controlsEventBox">
          <FormLabel
            className={`labelEvent ${errors.name ? "errorLabelEvent" : ""}`}
          >
            {t("title")}
          </FormLabel>
          <ControlledInput
            name="name"
            control={control}
            label=""
            error={errors && errors.name?.message}
            classNameField={`eventField ${
              watch("name") ? "filledInEventField" : ""
            }`}
          />
        </Box>
        {datesOfEvent.map((el, ind) => (
          <Box key={ind} className="controlsEventBox">
            <FormLabel
              className={`labelEvent ${el.error ? "errorLabelEvent" : ""}`}
            >
              {t(el.label)}
            </FormLabel>
            <InputMask
              mask="99.99.9999"
              maskChar={""}
              value={watch(el.name as Path<IChangeEvent>) || ""}
              onChange={handleDateOfEvent}
            >
              {/* @ts-ignore */}
              {() => (
                <TextField
                  className={`eventField ${
                    watch(el.name as Path<IChangeEvent>)
                      ? "filledInEventField"
                      : ""
                  }`}
                  error={!!el.error}
                  name={el.name}
                  InputProps={{
                    endAdornment: !!el.error && (
                      <InputAdornment position="end" className="errorIcon">
                        <WarningAmberRoundedIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            </InputMask>
            <FormHelperText className="errorMessage">
              {el.error?.message}
            </FormHelperText>
          </Box>
        ))}
        <Box className="controlsEventBox">
          <FormLabel
            className={`labelEvent ${errors.place ? "errorLabelEvent" : ""}`}
          >
            {t("place")}
          </FormLabel>
          <ControlledInput
            name="place"
            control={control}
            label=""
            error={errors && errors.place?.message}
            classNameField={`eventField ${
              watch("place") ? "filledInEventField" : ""
            }`}
          />
        </Box>
        <Button type="submit" className="submitEventButton">
          {t("publish")}
        </Button>
      </form>
    </Box>
  );
};

export default AdminEventChange;
