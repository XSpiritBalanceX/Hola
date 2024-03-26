import moment from "moment";
import { useState, useEffect } from "react";
import Picker from "react-mobile-picker";
import { Box } from "@mui/material";
import { IDates, IDatePicker } from "./TypesAccountForm";

const DatePicker = ({ date_of_birth, locale, setValue }: IDatePicker) => {
  const userDayOfBirth = date_of_birth
    ? date_of_birth
    : moment().format("DD/MM/YYYY");

  const currentYear = moment().year();

  const [dates, setDates] = useState<IDates>({
    day: Array.from({ length: 31 }, (_, index) => (index + 1).toString()),
    month: moment.months(),
    year: Array.from({ length: 80 }, (_, index) =>
      (currentYear - index).toString()
    ),
  });

  const [pickerValue, setPickerValue] = useState({
    day: userDayOfBirth.split("/")[0],
    month: moment()
      .month(Number(userDayOfBirth.split("/")[1]) - 1)
      .format("MMMM"),
    year: userDayOfBirth.split("/")[2],
  });

  useEffect(() => {
    setDates({ ...dates, month: moment.months() });
    // eslint-disable-next-line
  }, [locale]);

  const handleChangeDate = (value: {
    day: string;
    month: string;
    year: string;
  }) => {
    setPickerValue(value);
    setValue(
      "date_of_birth",
      `${value.day}/${moment().month(value.month).format("MM")}/${value.year}`
    );
  };

  return (
    <Box className="containerPicker">
      <Picker
        value={pickerValue}
        onChange={handleChangeDate}
        wheelMode="normal"
        className="datePicker"
      >
        {Object.keys(dates).map((name) => (
          <Picker.Column key={name} name={name}>
            {dates[name as keyof IDates].map((option) => (
              <Picker.Item key={option} value={option}>
                {({ selected }) => (
                  <p
                    className={`${
                      selected ? "selectedItemPicker" : "itemPicker"
                    }`}
                  >
                    {option}
                  </p>
                )}
              </Picker.Item>
            ))}
          </Picker.Column>
        ))}
      </Picker>
    </Box>
  );
};

export default DatePicker;
