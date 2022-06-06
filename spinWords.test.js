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
})