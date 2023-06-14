import React, { useEffect, useState } from "react";
import fetchRentsByDate from "../../api/fetchRentsByDate";

function Result() {
  const [result, setItemsData] = useState([]);

  const [response, setResponse] = useState("");

  useEffect(() => {
    fetchRentsByDate().then((response) => {
      setResponse(response.message);
    });
  }, []);

  return (
    <div className="itemsPage">
      <section className="itemsContainer">
        <ul className="itemList">
          {result.map((item) => {
            return (
              <li className="oneItem" key={item.tetelszam}>
                <div className="itemTitle">
                  <h4 className="itemTitle">{item.cikkszam}</h4>
                </div>
                <div className="transactionDate">
                  <p className="transactionDate">
                    Level: {item.datum}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}

export default Result;
