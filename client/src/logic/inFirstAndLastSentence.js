// version 5

let sentence = "Another! Yesterday. Today! Tomorrow. Hello! another. me!"

const inFirstAndLastSentence = (sentence) => {
    let splitText = sentence.split('. ')
    let asLastChar = splitText.filter(text=> text.charAt(text.length-1) === '!')
    let asMiddleChar = splitText.filter(text=> text.charAt(text.length-1) !== '!')
    let splitAsMiddleChar = asMiddleChar.map(text=>text.split('! ')[0]+'!')
    let result = splitAsMiddleChar.concat(asLastChar)

   return result
}

module.exports = inFirstAndLastSentence