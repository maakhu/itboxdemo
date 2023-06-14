import React, { useEffect, useState } from "react";
import fetchRentsByDate from "../../api/fetchRentsByDate";



const Component = () => {
  const [data, setData] = useState();

  useEffect(() => {
    // fetch data
    const dataFetch = async () => {
      const data = await (
        await fetch(
          "http://127.0.0.1:8080/berbeadottak/2014-12-31",
          {
            method: "GET",
            mode: "no-cors",
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
      ).json();

      // set state when the data received
      setData(data);
    };

    dataFetch();
  }, []);

  return (
    <div>
      <h1>Result of the query:</h1>
        <div>
          <p>{data}</p>
        </div>
     
    </div>
  );
}
export default Component;