// version 2
const inTheMiddleOneSentence = (sentence) => {
   
    let text = sentence.split('. ').pop().split('!').shift() + '!';
    return text
}

module.exports = inTheMiddleOneSentence