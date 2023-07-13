/** @param time  default: 100 */
export default (time = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(time), time);
  });
};
