// // // 
// // // import * as React from 'react';
// // // import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
// // // import { LocalizationProvider } from '@mui/x-date-pickers-pro/LocalizationProvider';
// // // import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
// // // import { DateRangeCalendar } from '@mui/x-date-pickers-pro/DateRangeCalendar';

// // // export default function DateRangeCalendarCalendarsProp() {
// // //   return (
// // //     <>
// // //     <LocalizationProvider dateAdapter={AdapterDayjs}>
// // //       {/* <DemoContainer components={['DateRangeCalendar', 'DateRangeCalendar']}> */}
// // //         {/* <DemoItem label="1 calendar"> */}
// // //           <DateRangeCalendar calendars={1} />
// // //         {/* </DemoItem> */}
// // //         {/* <DemoItem label="2 calendars">
// // //           <DateRangeCalendar calendars={2} />
// // //         </DemoItem> */}
// // //       {/* </DemoContainer> */}
// // //     </LocalizationProvider>
// // //     </>
// // //   );
// // // }

// // import * as React from 'react';
// // import dayjs from 'dayjs';
// // import Badge from '@mui/material/Badge';
// // import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// // import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// // import { PickersDay } from '@mui/x-date-pickers/PickersDay';
// // import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
// // import { DayCalendarSkeleton } from '@mui/x-date-pickers/DayCalendarSkeleton';

// // import { DateRangeCalendar } from '@mui/x-date-pickers-pro/DateRangeCalendar';

// // //מרנדר מספר
// // // function getRandomNumber(min, max) {
// // //   return Math.round(Math.random() * (max - min) + min);
// // // }

// // /**
// //  * Mimic fetch with abort controller https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort
// //  * ⚠️ No IE11 support
// //  */
// // // function fakeFetch(date, { signal }) {
// // //   return new Promise((resolve, reject) => {
// // //     const timeout = setTimeout(() => {
// // //       const daysInMonth = date.daysInMonth();
// // //       const daysToHighlight = [1, 2, 3].map(() => getRandomNumber(1, daysInMonth));

// // //       resolve({ daysToHighlight });
// // //     }, 500);

// // //     signal.onabort = () => {
// // //       clearTimeout(timeout);
// // //       reject(new DOMException('aborted', 'AbortError'));
// // //     };
// // //   });
// // // }

// // // const initialValue = dayjs('2022-04-17');

// // function ServerDay(props) {
// //   const { highlightedDays = [], day, outsideCurrentMonth, ...other } = props;

// //   // const isSelected =
// //   //   !props.outsideCurrentMonth && highlightedDays.indexOf(props.day.date()) >= 0;

// //   return (
// //     <Badge
// //       key={props.day.toString()}
// //       overlap="circular"
// //       //תנאי
// //       badgeContent={'🌚'}
// //     >
// //       <PickersDay {...other} outsideCurrentMonth={outsideCurrentMonth} day={day} />
// //     </Badge>
// //   );
// // }

// // export default function DateCalendarServerRequest() {

// //   const [highlightedDays, setHighlightedDays] = React.useState();

// //   return (
// //     <LocalizationProvider dateAdapter={AdapterDayjs}>
// //       {/* <DateRangeCalendar calendars={1} /> */}
  

// //       <DateRangeCalendar
// //      badgeContent={'🌚'}
// //         dateAdapter={AdapterDayjs}
// //         renderLoading={() => <DayCalendarSkeleton />}
// //         // slots={{
// //         //   day: ServerDay,
// //         // }}
// //         // slotProps={{
// //         //   day: {
// //         //     highlightedDays,
// //         //   },
// //         // }}
// //       />

// //     </LocalizationProvider>
// //   );
// // }
// // import * as React from 'react';
// // import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// // import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// // import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// // import { TimePicker } from '@mui/x-date-pickers/TimePicker';
// // import { renderTimeViewClock } from '@mui/x-date-pickers/timeViewRenderers';

// // export default function TimePickerViewRenderers() {
// //   return (
// //     <LocalizationProvider dateAdapter={AdapterDayjs}>
// //       <DemoContainer components={['TimePicker']}>
// //         <TimePicker
// //           label="With Time Clock"
// //           viewRenderers={{
// //             hours: renderTimeViewClock,
// //             minutes: renderTimeViewClock,
// //             seconds: renderTimeViewClock,
// //           }}
// //         />
// //       </DemoContainer>
// //     </LocalizationProvider>
// //   );
// // }

// import * as React from 'react';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';

// export default function SelectAutoWidth() {
//   // const [age, setAge] = React.useState('');

//   // const handleChange = (event) => {
//   //   setAge(event.target.value);
//   // };

//   return (
//     <div>
//       <FormControl sx={{ m: 1, minWidth: 80 }}>
//         <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
//         <Select
//           // labelId="demo-simple-select-autowidth-label"
//           // id="demo-simple-select-autowidth"
//           // value={age}
//           // onChange={handleChange}
//           // autoWidth
//           // label="Age"
//         >
//           <MenuItem value="">
//             <em>None</em>
//           </MenuItem>
//           <MenuItem value={20}>Twenty</MenuItem>
//           <MenuItem value={21}>Twenty one</MenuItem>
//           <MenuItem value={22}>Twenty one and a half</MenuItem>
//         </Select>
//       </FormControl>
//     </div>
//   );
// }