export const minutesToHours = (totalMinutes) => {
  if (totalMinutes > 60) {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return { hours, minutes };
  } else if (totalMinutes === 60) {
    return { hours: 1, minutes: 0 };
  }
  return { hours: 0, minutes: totalMinutes };
};

export const searchMovies = (movies, query, isShort) => {
  return movies.filter((movie) => {
    if (!isShort) {
      return (
        movie.nameRU.toLowerCase().indexOf(query) >= 0 ||
        movie.nameEN?.toLowerCase().indexOf(query) >= 0
      );
    } else {
      return (
        (movie.nameRU.toLowerCase().indexOf(query) >= 0 ||
          movie.nameEN?.toLowerCase().indexOf(query) >= 0) &&
        movie.duration <= 40
      );
    }
  });
};

export const calculateOffset = () => {
  const resolution = window.screen.availWidth;
  let offset = 3;
  if (resolution > 480 && resolution <= 768) {
    offset = 2;
  } else if (resolution >= 320 && resolution <= 480) {
    offset = 5;
  }
  return offset;
};
