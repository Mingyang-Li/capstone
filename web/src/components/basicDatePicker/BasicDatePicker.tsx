import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useState } from "react";
import { heartRateDateVar } from "../../graphql/Store";
import { useReactiveVar } from "@apollo/client";

export default function BasicDatePicker() {
  const d = useReactiveVar(heartRateDateVar);
  const [value, setValue] = useState<Date>(d);
  const [disableBtn, setDisableBtn] = useState(true);

  const updateheartRateDate = (date: any) => {
    setValue(date);
    setDisableBtn(false);
  };

  const applyDateRangeFilter = () => {
    heartRateDateVar(value);
    setDisableBtn(true);
  };

  return (
    <Stack direction="row" spacing={2}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="Date"
          value={value}
          minDate={new Date("2019-10-31")}
          maxDate={new Date("2020-03-31")}
          onChange={(newValue) => {
            updateheartRateDate(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      <Button
        variant="contained"
        onClick={applyDateRangeFilter}
        disabled={disableBtn}
      >
        Apply
      </Button>
    </Stack>
  );
}
