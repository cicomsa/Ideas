const inTheMiddleOneSentence = require('./inTheMiddleOneSentence')

let sentence = "Yesterday. Today! Tomorrow."

test('sentence middle !', () => {
    expect(inTheMiddleOneSentence(sentence)).toEqual(["Today!"]);
});
