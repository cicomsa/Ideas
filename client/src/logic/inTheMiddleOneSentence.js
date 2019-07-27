// version 2

let sentence = "Yesterday. Today! Tomorrow."

const inTheMiddleOneSentence = string => {
    // let text = sentence.split('. ').pop().split('!').shift() + '!';

    // let text = sentence.match(/\.(.*?)\!/)[1].trim() + '!'
    // return text

    const splitText = sentence.split('!')
    const text = []
    splitText
      .filter(sentence => sentence !== '' && sentence[sentence.length - 1] !== '.')
      .map(sentence => {
      if (sentence.includes('.')) {
        const leftToSplit = sentence.split('. ').pop()
        text.push('§' + leftToSplit + '!')
      } else {
        text.push('§' + sentence.trim() + '!')
      }
    })

    const result = text.join('').split('§').filter(sentence => sentence !== '')

    return result
}

module.exports = inTheMiddleOneSentence
