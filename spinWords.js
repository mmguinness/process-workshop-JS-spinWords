function spinWords(string) {
  const words = string.split(" ");

  let output = words.map(function (word) {
    return (word.length > 4) ? word.split("").reverse().join("") : word;
  });

  return output.join(" ");
}

module.exports = spinWords;


