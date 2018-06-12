const inLastSentence = require('./inLastSentence')

let sentence = "Yesterday. Today!"

test('sentence contains !', () => {
    expect(inLastSentence(sentence)).toBe("Today!");
});