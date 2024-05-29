import { Box } from "@mui/material";
import moment from "moment";
import "./DashboardPage.scss";

interface IEventDashboardProps {
  label: string;
  name: string;
  place: string;
  date_start: string;
  date_end: string;
  image: string;
}

const EventDashboard = ({
  label,
  name,
  place,
  date_start,
  date_end,
  image,
}: IEventDashboardProps) => {
  return (
    <Box className="eventContainer">
      <Box className="eventGeneralInformation">
        <p className="eventLabel">{label}</p>
        <Box className="eventInformation">
          <p className="eventName">{name}</p>
          <p className="eventPlace">{place}</p>
          {date_end ? (
            <p className="eventDate">{`${moment(
              date_start,
              "YYYY-MM-DD"
            ).format("MMM DD")} - ${moment(date_end, "YYYY-MM-DD").format(
              "MMM DD"
            )}`}</p>
          ) : (
            <p className="eventDate">
              {moment(date_start, "YYYY-MM-DD").format("MMMM DD")}
            </p>
          )}
        </Box>
      </Box>
      <Box
        className="eventImageBox"
        style={{ backgroundImage: `url(${image})` }}
      />
    </Box>
  );
};

export default EventDashboard;
