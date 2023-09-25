import React from "react";

import DataAPI from "../api/DataAPI";

export const Delays = () => (
  <div className="page columns">
    <DelaysList />
  </div>
);

const DelaysList = () => {
  const delayDates = DataAPI.getDistinctDates();

  return (
    <div className="sidebar">
      {delayDates.map(({ date, dateHuman }) => (
        <a key={date}>{dateHuman}</a>
      ))}
    </div>
  );
};
