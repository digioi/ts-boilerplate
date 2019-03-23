import { getMovie } from '../src/movie-api/movies_api';
import "axios"

it("should fetch movie", async () => {
  const { data } = await getMovie("tt0076759");
  expect(data.imdbID).toEqual("tt0076759")
  expect(data.Title).toEqual('Star Wars: Episode IV - A New Hope')
});

it("if invalid should throw error and catchd", async () => {
  try {
    await getMovie("12341");
    expect(true).toEqual(false)
  } catch (error) {
    expect(true).toEqual(true)
  }
  
});