const inFirstAndLastSentence = require('./inFirstAndLastSentence')

let sentence = "Another! Yesterday. Today! Tomorrow. Hello! another. me!"

test('sentence contains !', () => {
    expect(inFirstAndLastSentence(sentence)).toEqual(["Another!","Today!", "Hello!", "me!"]
);
});