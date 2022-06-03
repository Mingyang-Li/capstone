import * as React from "react";
import TextField from "@mui/material/TextField";
import {
  DateRangePicker,
  DateRange,
} from "@mui/x-date-pickers-pro/DateRangePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import Box from "@mui/material/Box";
import { useReactiveVar } from "@apollo/client";
import { startDateVar, endDateVar } from "../../graphql/Store";
import { Stack } from "@mui/material";
import { addDays } from "date-fns";

export default function BasicDateRangePicker() {
  const s = useReactiveVar(startDateVar);
  const e = useReactiveVar(endDateVar);
  const [value, setValue] = React.useState<DateRange<Date>>([
    new Date(s),
    new Date(e),
  ]);

  const updateDateRange = (dateRange: any) => {
    setValue(dateRange);
  };

  const applyDateRangeFilter = () => {
    startDateVar(addDays(value[0] as Date, 1));
    endDateVar(addDays(value[1] as Date, 1));
  };

  const checkToDisable = () => {
    return (value[0] as Date) === s && (value[1] as Date) === e;
  };

  const disabled = checkToDisable();

  const disableInvalidDates = (date: Date) => {
    return !(new Date("2019-10-10") < date && date < new Date("2020-04-01"));
  };

  return (
    <Stack direction="row" spacing={2}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateRangePicker
          inputFormat={"yyyy-MM-dd"}
          shouldDisableDate={disableInvalidDates}
          startText="Start date"
          endText="End date"
          value={value}
          onChange={(newValue) => {
            updateDateRange(newValue);
          }}
          renderInput={(startProps, endProps) => (
            <React.Fragment>
              <TextField {...startProps} />
              <Box sx={{ mx: 2 }}> to </Box>
              <TextField {...endProps} />
            </React.Fragment>
          )}
        />
      </LocalizationProvider>
      <button
        className={
          !disabled
            ? "h-12 px-6 text-indigo-100 transition-colors duration-350 bg-green-600 rounded-lg focus:shadow-outline hover:bg-yellow-500"
            : "h-12 px-6 text-indigo-100 bg-gray-500 rounded-lg focus:shadow-outline"
        }
        onClick={applyDateRangeFilter}
        disabled={disabled}
      >
        Apply filter
      </button>
    </Stack>
  );
}
