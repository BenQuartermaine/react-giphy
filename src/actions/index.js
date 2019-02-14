// Setting the selected Gif action
export function setGif(id) {
  return {
    type: 'SET_GIF',
    payload: id
  }
 } 
 
// Calling the API and populating the gif list state
export function gifList(query) { 
  const apiKey = 'vYS3kwDnk3EQFMPtucA1tmfY6gXSVFwi';
  const giphyApi = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}&limit=20`;

  const promise = fetch(giphyApi)
    .then(response => {
        return response.json();
    })
    .then(json => {
      return json.data;
    })
    .catch(err => console.log(err));

      console.log(promise)

  return {
    type: 'GIF_LIST',
    payload: promise
  }
}
