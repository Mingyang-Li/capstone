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
import { Button, Stack } from "@mui/material";
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

  const disableFilterButton = () => {
    return (value[0] as Date) === s && (value[1] as Date) === e;
  };

  const disabled = disableFilterButton();

  const disableInvalidDates = (date: Date) => {
    return !(new Date("2019-10-30") < date && date < new Date("2020-04-01"));
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
              <TextField disabled {...startProps} />
              <Box sx={{ mx: 2 }}> to </Box>
              <TextField disabled {...endProps} />
            </React.Fragment>
          )}
        />
      </LocalizationProvider>
      <Button
        variant="contained"
        onClick={applyDateRangeFilter}
        disabled={disabled}
      >
        Apply filter
      </Button>
    </Stack>
  );
}
