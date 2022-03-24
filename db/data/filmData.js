const createFilm = (
  title,
  country,
  continent,
  language,
  runTime,
  director,
  releaseYear,
  description,
  img
) => {
  return {
    title: title,
    country: country,
    continent: continent,
    language: language,
    runTime: runTime,
    director: director,
    releaseYear: releaseYear,
    description: description,
    img: img,
  };
};

const films = [
  createFilm(
    'Good Morning',
    'Japan',
    'Asia',
    'Japanese',
    94,
    'Yashujiro Ozu',
    1959,
    'Two brothers want a TV.',
    'https://m.media-amazon.com/images/M/MV5BMGI5ZDdlNDItZGRiZi00NjM3LTkxZjktMTRjNDc1OGY2OGNkXkEyXkFqcGdeQXVyNTgzMzU5MDI@._V1_.jpg'
  ),
];

export default films;
