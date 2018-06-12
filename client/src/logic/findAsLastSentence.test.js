const findAsLastSentence = require('./findAsLastSentence')

let sentence = "Yesterday. Today!"

test('sentence contains !', () => {
    expect(findAsLastSentence(sentence)).toBe("Today!");
});