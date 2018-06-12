// version 3
const inJoinedInMultipleSentences = (sentence) => {
    let splitText = sentence.split('. ')
    let textIncludes = splitText.filter(text=>text.includes('!'))
     //array might work. to check on front-end side
    //  console.log(textIncludes)
    let joinedText = textIncludes.join('')
      
    return joinedText
}

module.exports = inJoinedInMultipleSentences