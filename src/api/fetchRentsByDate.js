export async function fetchInRentByDate(date) {
  const response = await fetch("/berbeadottak/" + date);
  const itemsData = await response.json();
  return itemsData;
}
export default fetchInRentByDate