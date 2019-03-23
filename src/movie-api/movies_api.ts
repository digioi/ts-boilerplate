import axios from "axios"

let MovieApiGateway = axios.create({
  baseURL: 'http://www.omdbapi.com',
  method: "get"
});

export const setApiKey = (apikey: String) => 
  MovieApiGateway.defaults.params.apiKey = apikey 

export function getMovie(imdbId: String) {
  return MovieApiGateway.get("/", {
    ...MovieApiGateway.defaults,
    params: {
      ...MovieApiGateway.defaults.params,
      i: imdbId
    }})
}
