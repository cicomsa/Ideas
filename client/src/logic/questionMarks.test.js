const questionMarks = require('./questionMarks')

let sentence = "Another? Yesterday. Today! Tomorrow. Hello! another? me!"

test('sentence contains !', () => {
    expect(questionMarks(sentence)).toEqual(["Today!", "Hello!", "me!"]
);
});
