const spinWords = require('./spinWords');

describe('spinWords', () => {
  it('outputs the string unchanged if a single word, of four letters or less', () => {
    expect(spinWords('test')).toBe('test');
  })
})