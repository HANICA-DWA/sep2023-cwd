import moment from "moment";

const DataAPI = {
  /*
    All delays are stored in an array with the following schema:
      [
        {
          id: 3,
          date: "2018-09-17",
          dateHuman: "Mon 17 Sep 2018",
          from: "Arnhem",
          to: "Amsterdam",
          minutes: 17,
          minutesHuman: "17 minutes"
        },
        {...}
      ]

    NOTE: The `dateHuman` and `minutesHuman` fields are just there to make
          it easier for the clientside code; eg. you don't have to do the
          conversion anymore in React components, so less clutter in the
          example clientside code. This is not an adviced pattern.
  */

  getAllDelays: () => DELAYS,

  getDelaysOnDate: date => DELAYS.filter(delay => delay.date === date),

  getDelaysOnLocation: location =>
    DELAYS.filter(
      delay =>
        location.toLowerCase() === delay.from.toLowerCase() ||
        location.toLowerCase() === delay.to.toLowerCase()
    ),

  /*
      Returns a list with all the distinct dates of all the delays.

      The returned value has the following schema:
        [
          {
            date: "2018-09-17",
            dateHuman: "Mon 17 Sep 2018",
          },
          {...}
        ]
  */
  getDistinctDates: () =>
    DELAYS.reduce((result, { date, dateHuman }) => {
      if (!result.find(item => item.date === date)) {
        result.push({ date, dateHuman });
      }
      return result;
    }, []),

  addDelay: (date, from, to, minutes) => {
    const id = getNewID();

    // convert `date` to be used as an ID (eg. in URL's)
    const dateID = moment(date).format("YYYY-MM-DD");

    // convert `date` to be a human readable string (eg. to display)
    const dateHuman = moment(date).calendar(null, {
      sameDay: "[Today]",
      nextDay: "[Tomorrow]",
      nextWeek: "dddd",
      lastDay: "[Yesterday]",
      lastWeek: "[Last] dddd",
      sameElse: "ddd D MMM YYYY"
    });

    // convert `minutes` to be a human readable string (eg. to display)
    const minutesHuman = moment.duration(minutes, "minutes").humanize();

    // add new delay to the global list of all delays
    DELAYS.push({
      id,
      date: dateID,
      dateHuman,
      from,
      to,
      minutes,
      minutesHuman
    });

    // keep the list of delays in descending order by date
    DELAYS.sort(
      (a, b) => (a.date < b.date ? -1 : a.date > b.date ? 1 : 0)
    ).reverse();
  },

  removeDelay: id => {
    const idx = DELAYS.findIndex(delay => delay.id === id);
    if (idx >= 0) {
      DELAYS.splice(idx, 1);
    }
  }
};

export default DataAPI;

// get a new unique id
const getNewID = () => LAST_ID++;
let LAST_ID = 1;

// the global list of all delays
const DELAYS = [];

// insert some testdata for delays
DataAPI.addDelay(moment(), "Zutphen", "Arnhem", 1);
DataAPI.addDelay(moment(), "Amsterdam", "Almere", 18);
DataAPI.addDelay(moment(), "Zutphen", "Arnhem", 120);
DataAPI.addDelay(moment().subtract(5, "days"), "Nijmegen", "Utrecht", 12);
DataAPI.addDelay(moment().subtract(7, "days"), "Nijmegen", "Roosendaal", 2);
DataAPI.addDelay(moment().subtract(2, "days"), "Arnhem", "Zutphen", 8);
DataAPI.addDelay(moment().subtract(2, "days"), "Utrecht", "Arnhem", 14);
DataAPI.addDelay(moment().subtract(1, "days"), "Amsterdam", "Den Haag", 1);
DataAPI.addDelay(moment("2018-01-01"), "Zwolle", "Gronnigen", 10);
DataAPI.addDelay(moment("2018-06-16"), "Zutphen", "Brummen", 7);

// uncomment next line to see an example of delays in the console
// console.table(DELAYS);
