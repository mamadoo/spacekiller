module.exports = function spacekiller(string) {
  if (typeof string !== "string") throw new TypeError("Spacekiller wants a string!");
  return string.replace(/\s/g, "");
};
