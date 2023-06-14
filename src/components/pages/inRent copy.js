import React, { useEffect, useState } from "react";
import fetchRentsByDate from "../../api/fetchRentsByDate";

function InRent() {
  const [queryData, setQueryData] = useState([]);
  useEffect(() => {
    fetchRentsByDate("2014-12-31")
      .then((queryData) => {
      setQueryData(queryData.res);
    });
  }, []);


  return (
    <div>
      <h1>Result of the query:</h1>
        <div>
          <p>{queryData}</p>
        </div>
     
    </div>
  );
}
export default InRent;
