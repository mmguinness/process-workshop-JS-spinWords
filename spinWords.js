function spinWords(string) {
  const words = string.split(" ");

  let output = words.map(function spinOrNot(word) {
    if (word.length >= 5) {
      return word.split("").reverse().join("");
    } else if (word.length <= 4) {
      return word;
    }
  });

  return output.join(" ");
}

module.exports = spinWords;
