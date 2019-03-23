const mockAxios: any = jest.genMockFromModule('axios')

const ExampleDatabase: any = {
  "tt0076759": {
    Title: 'Star Wars: Episode IV - A New Hope',
    Year: '1977',
    Rated: 'PG',
    Released: '25 May 1977',
    Runtime: '121 min',
    Genre: 'Action, Adventure, Fantasy, Sci-Fi',
    Director: 'George Lucas',
    Writer: 'George Lucas',
    Actors: 'Mark Hamill, Harrison Ford, Carrie Fisher, Peter Cushing',
    Plot:
      'Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire\'s world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.',
    Language: 'English',
    Country: 'USA',
    Awards: 'Won 6 Oscars. Another 50 wins & 28 nominations.',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    Ratings:
      [{ Source: 'Internet Movie Database', Value: '8.6/10' },
      { Source: 'Rotten Tomatoes', Value: '93%' },
      { Source: 'Metacritic', Value: '90/100' }],
    Metascore: '90',
    imdbRating: '8.6',
    imdbVotes: '1,104,701',
    imdbID: 'tt0076759',
    Type: 'movie',
    DVD: '21 Sep 2004',
    BoxOffice: 'N/A',
    Production: '20th Century Fox',
    Website: 'http://www.starwars.com/episode-iv/',
    Response: 'True'
  }
};


mockAxios.create = jest.fn(() => mockAxios);

(mockAxios.get as jest.Mock).mockImplementation((_, config) => {
  if (ExampleDatabase[config.params.i])
    return Promise.resolve({ data: ExampleDatabase[config.params.i] })
  else
    return Promise.reject({ status: 404 })
});

export default mockAxios;