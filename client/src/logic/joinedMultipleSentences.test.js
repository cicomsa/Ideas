const joinedMultipleSentences = require('./joinedMultipleSentences')

let sentence = "Yesterday. Today! Tomorrow!"

test('sentence contains !', () => {
    expect(joinedMultipleSentences(sentence)).toBe("Today! Tomorrow!");
});