import React, { useEffect, useState } from "react";

const FetchItems = () => {
  const [items, setItems] = useState([]);
  // const [error, setError] = useState(null);
  const [loadingData, setLoadingData] = useState(false);

  useEffect(() => {
    async function fetchItems() {
      try {
        await fetch("http://127.0.0.1:8080/cikktetelek", {
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
        }).then((res) => {
          if (res.status === 0) {
            setLoadingData(true);
          } else {
            const newItems = res.data;
            setItems(newItems);
            setLoadingData(false);
          }
        });

        // if (!response.ok) {
        //   throw new Error("Failed to fetch items");
        // }

        // const jsonData = await response.json();
        // console.log(jsonData);
        // setItems(jsonData);
      } catch (err) {
        console.error(err);
        // setError(err);
      }
    }
    fetchItems();
  }, [loadingData, setLoadingData]);

  if (loadingData) {
    return <div>Loading...</div>;
  }
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
