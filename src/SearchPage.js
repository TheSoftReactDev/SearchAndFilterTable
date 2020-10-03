import React, { useState } from "react";
import { Data } from "./Data";

const SearchPage = () => {
  const [filterName, setFilterName] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  let resultData;
  if (startDate != null && endDate != null && filterName != null) {
    resultData = Data.filter((x) => {
      let tempData =
        x.date >= startDate &&
        x.date <= endDate &&
        x.name.toLowerCase().indexOf(filterName) !== -1;
      return tempData;
    });
  } else if (startDate != null && endDate != null) {
    resultData = Data.filter((x) => {
      let tempData = x.date >= startDate && x.date <= endDate;
      return tempData;
    });
  } else if (filterName != null) {
    resultData = Data.filter((x) => {
      let tempData = x.name.toLowerCase().indexOf(filterName) !== -1;
      return tempData;
    });
  } else {
    resultData = Data;
  }

  const rowData = resultData.map((x) => (
    <tr key={x.id}>
      <td> {x.id} </td>
      <td> {x.name}</td>
      <td> {x.date.substring(0, 10).split("-").reverse().join("/")}</td>
    </tr>
  ));

  return (
    <div>
      Start Date{" "}
      <input type="date" onChange={(e) => setStartDate(e.target.value)} />
      <br />
      <br />
      End Date{" "}
      <input type="date" onChange={(e) => setEndDate(e.target.value)} />
      <br />
      <br />
      Name{" "}
      <input
        type="text"
        onChange={(e) => setFilterName(e.target.value.toLowerCase())}
      />
      <br />
      <br />
      <table>
        <tr>
          <th>Id</th>
          <th>Date</th>
          <th>Name</th>
        </tr>
        {rowData}
      </table>
    </div>
  );
};

export default SearchPage;
