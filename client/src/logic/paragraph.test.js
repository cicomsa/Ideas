const paragraph = require('./paragraph')

let sentence = "So, I thought about something today. And what I saw was that I don't have that content in me. That type of life that my eyes have. My eyes have the life already! They are already happy!"

test('sentence contains !', () => {
    expect(paragraph(sentence)).toEqual([ "My eyes have the life already! They are already happy!"]
);
});