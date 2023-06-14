// write a react component that renders a list of items from the database fetch

import React, { useEffect, useState, useCallback } from "react";
import fetchItems from "../../api/fetchItems";
import { useNavigate } from "react-router-dom";

function Items() {
  const [itemsData, setItemsData] = useState([]);

  const [response, setResponse] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchItems().then((response) => {
      setResponse(response.message);
    });
  }, []);

  const getItems = useCallback(async () => {
    fetchItems().then((itemsData) => {
      setItemsData(itemsData.items);
    });
  }, []);

  useEffect(() => {
    getItems();
  }, [getItems]);

  return (
    <div className="itemsPage">
      <section className="itemsContainer">
        <ul className="itemList">
          {itemsData.map((item) => {
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

export default Items;
