function spinWords(string) {
  let words = null;
  
  if(string.length >= 5) {
    words = string.split("").reverse().join("");
  } else if (string.length <= 4) {
    words = string;
  }

  return words;

}

module.exports = spinWords;
