module.exports = function spacekiller(string) {
  let targetString = string;
  if (typeof string !== "string") {
    if (typeof string === "number") {
      targetString = string.toString();
    } else {
      throw new TypeError("Spacekiller wants a string!");
    }
  }

  return targetString.replace(/\s/g, "");
};
