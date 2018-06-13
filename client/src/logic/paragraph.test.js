const paragraph = require('./paragraph')

let sentence = "So, I thought about something today. And what I saw was that I don't have that content in me. That type of life that my eyes have. My eyes have the life already! They are already happy!"

let sentence1 = "So! I thought about something today. And what I saw was that. I don't have that content in me. That type of life that my eyes have. My eyes have the life already! They are already happy!"

let sentence2 = "So! I thought about something today. And what I saw was that. I don't have that content in me! That type of life that my eyes have. My eyes have the life already! They are already happy!"

test('sentence contains', () => {
    expect(paragraph(sentence)).toEqual([ "My eyes have the life already! They are already happy!"]
);
});

test('sentence1 contains', () => {
    expect(paragraph(sentence1)).toEqual(["So!",  "My eyes have the life already! They are already happy!"]
);
});

// test('sentence2 contains', () => {
//     expect(paragraph(sentence1)).toEqual(["So!",  "I don't have that content in me!", "My eyes have the life already! They are already happy!"]
// );
// });