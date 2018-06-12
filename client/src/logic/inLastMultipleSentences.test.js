const inLastMultipleSentences = require('./inLastMultipleSentences')

let sentence = "Yesterday. Today! Tomorrow! Hello!"

test('sentence contains !', () => {
    expect(inLastMultipleSentences(sentence)).toEqual(["Today!", "Tomorrow!", "Hello!"]
);
});