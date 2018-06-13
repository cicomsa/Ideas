const endWith = require('./endWith')

let sentence = "Yesterday. Today!"

let sentence1 = "Yesterday! Today!"

test('sentence contains !', () => {
    expect(endWith(sentence)).toBe("Today!");
});

test('sentence contains', () => {
    expect(endWith(sentence1)).toBe("Yesterday! Today!");
});