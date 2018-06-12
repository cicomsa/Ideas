const lastMultipleSentences = require('./lastMultipleSentences')

let sentence = "Yesterday. Today! Tomorrow! Hello!"

test('sentence contains !', () => {
    expect(lastMultipleSentences(sentence)).toEqual(["Today!", "Tomorrow!", "Hello!"]
);
});