const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.listTitles = function(){
  const result = this.films.map((film) => {
    return film.title
  });
  return result;
};

Cinema.prototype.findByTitle = function (searchTitle) {
  const result = this.films.find((film) => {
    return (searchTitle === film.title);
  });
  return result;
};

Cinema.prototype.findByGenre = function (searchGenre) {
  const result = this.films.filter((film) => {
    return (searchGenre === film.genre);
  });
  return result;
};

Cinema.prototype.findByYear = function (searchYear) {
  const result = this.films.filter((film) => {
    return (searchYear === film.year);
  });
  return result;
};

Cinema.prototype.noFilmsByYear = function (searchYear) {
  const result = this.films.filter((film) => {
    return (searchYear !== film.year);
  });
  return result;
};

Cinema.prototype.checkLength = function (lengthCheck) {
  const result = this.films.every((film) => {
    return (lengthCheck < film.length);
  });
  return result;
};

Cinema.prototype.totalLength = function () {
  const result = this.films.reduce((runningTotal, film) => {
    return runningTotal + film.length;
  }, 0);
  return result;
};

module.exports = Cinema;
