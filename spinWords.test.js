const spinWords = require('./spinWords');

describe('spinWords', () => {
  it('outputs the string unchanged if a single word, of four letters or less', () => {
    expect(spinWords('test')).toBe('test');
  })

  it('outputs the string reversed if a single word, of five letters or more', () => {
    expect(spinWords("Welcome")).toBe("emocleW");
  })

  it("outputs the string unchanged if all words are four letters or less", () => {
    expect(spinWords("This is a test")).toBe("This is a test");
  });

  it("outputs the words reversed in the string for all words of five letters or more", () => {
    expect(spinWords("Hey fellow warriors")).toBe("Hey wollef sroirraw");
  });

    it("outputs the words reversed in the string for all words of five letters or more", () => {
    expect(spinWords("You are almost to the last test")).toBe(
      "You are tsomla to the last test"
    );
  });

  it("outputs the words reversed in the string for all words of five letters or more", () => {
    expect(spinWords("Just kidding there is still one more")).toBe(
      "Just gniddik ereht is llits one more"
    );
  });

  it("outputs the words reversed in the string for all words of five letters or more", () => {
    expect(spinWords("Seriously this is the last one")).toBe(
      "ylsuoireS this is the last one"
    );
  });
})
