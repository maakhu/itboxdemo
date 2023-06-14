export async function fetchInRentByDate(date) {
  const response = await fetch("http://127.0.0.1:8080/berbeadottak/" + date);
  const itemsData = await response.json();
  return itemsData;
}
export default fetchInRentByDate