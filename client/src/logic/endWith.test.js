const endWith = require('./endWith')

let sentence = "Yesterday. Today!"

test('sentence contains !', () => {
    expect(endWith(sentence)).toBe("Today!");
});