import * as React from 'react';
import TextField from '@mui/material/TextField';
import DateRangePicker, { DateRange } from '@mui/lab/DateRangePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Box from '@mui/material/Box';
import { startDateVar, endDateVar } from 'graphql/Cache';
import Stack from '@mui/material/Stack';
import DaterangeFilterButton from './ApplyDaterangeFilterButton';
import { useReactiveVar } from '@apollo/client';

export default function BasicDateRangePicker() {
  const s = useReactiveVar(startDateVar);
  const e = useReactiveVar(endDateVar);
  const [value, setValue] = React.useState<DateRange<Date>>([
    new Date(s),
    new Date(e),
  ]);

  // Only update UI date range display - not updating global date range
  const updateDateRange = (dateRange: any) => {
    setValue(dateRange);
  };

  // Updates global date-range store => all reports using global date-range will update
  const applyDateRangeFilter = () => {
    startDateVar(value[0]?.toString());
    endDateVar(value[1]?.toString());
  };

  return (
    <Stack direction="row" spacing={2}>
      <div>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateRangePicker
            startText="Start"
            endText="End"
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
      </div>
      <div onClick={applyDateRangeFilter}>
        <DaterangeFilterButton />
      </div>
    </Stack>
  );
}
