const sentenceAsMiddle = require('./sentenceAsMiddle')

let sentence = "Yesterday. Today! Tomorrow"

test('sentence middle !', () => {
    expect(sentenceAsMiddle(sentence)).toBe("Today!");
});