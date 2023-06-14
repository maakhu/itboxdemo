export async function fetchItem(id) {
  const response = await fetch("/api/cikktetelek/" + id);
  const itemsData = await response.json();
  return itemsData;
}
export default fetchItem