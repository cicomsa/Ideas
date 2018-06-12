const inJoinedInMultipleSentences = require('./inJoinedInMultipleSentences')

let sentence = "Yesterday. Today! Tomorrow!"

test('sentence contains !', () => {
    expect(inJoinedInMultipleSentences(sentence)).toBe("Today! Tomorrow!");
});