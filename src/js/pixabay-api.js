export { getQuery };
// =================================
function getQuery(value, page) {
  const params = new URLSearchParams({
    key: '44351431-da99bbc5aa576d6c36cc46a59',
    q: value,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: 20,
    page: page,
  });
  const URL = `https://pixabay.com/api/?${params}`;

  return fetch(URL).then(data => data.json());
}
