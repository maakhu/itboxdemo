import React, { useEffect, useState } from "react";

function getItems() {
  return fetch(`http://127.0.0.1:8080/cikktetelek`, {
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).then((response) => response.json());
}

const FetchItems = () => {
  const [items, setItems] = useState([]);
  // const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchNewItems() {
      const fetchedItems = await getItems();
      setItems(fetchedItems);
    }
    fetchNewItems();
  }, []);
  // useEffect(() => {
  //   async function fetchItems() {
  //     try {
  //       await fetch("http://127.0.0.1:8080/cikktetelek", {
  //         mode: "no-cors",
  //       }).then((res) => {
  //         if (res.status !== 200) {

  //         } else {
  //           const newItems = res.data;
  //           setItems(newItems);
  //         }
  //       });

  //       // if (!response.ok) {
  //       //   throw new Error("Failed to fetch items");
  //       // }

  //       // const jsonData = await response.json();
  //       // console.log(jsonData);
  //       // setItems(jsonData);
  //     } catch (err) {
  //       console.error(err);
  //       // setError(err);
  //     }
  //   }
  //   fetchItems();
  // }, []);

  return (
    <div>
      <h1>List of Items</h1>
      {items.map((item) => (
        <div key={item.id}>
          <p>{item.datum}</p>
        </div>
      ))}
    </div>
  );
};

export default FetchItems;
