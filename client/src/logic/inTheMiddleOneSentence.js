// version 2

let sentence = "Yesterday. Today! Tomorrow."

const inTheMiddleOneSentence = (sentence) => {
    // let text = sentence.split('. ').pop().split('!').shift() + '!';
    let text = sentence.match(/\.(.*?)\!/)[1].trim() + '!'
    return text
}

module.exports = inTheMiddleOneSentence
