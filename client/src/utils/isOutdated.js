function isOutdated(date) {
  // if < 1 min
  if (Date.now() - date > 10 * 60 * 100) {
    return true;
  }
  return false;
}
export default isOutdated;
