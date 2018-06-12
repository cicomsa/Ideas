// version 2

let sentence = "Yesterday. Today! Tomorrow."

const inTheMiddleOneSentence = (sentence) => {
   
    let text = sentence.split('. ').pop().split('!').shift() + '!';
    
    return text
}

module.exports = inTheMiddleOneSentence