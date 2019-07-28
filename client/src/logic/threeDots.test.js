const threeDots = require('./threeDots')

let sentence = "Another one... Maybe, today! Tomorrow. Hello! another? me!"

test('sentence contains !', () => {
    expect(threeDots(sentence)).toEqual(["Maybe, today!", "Hello!", "me!"]
);
});
