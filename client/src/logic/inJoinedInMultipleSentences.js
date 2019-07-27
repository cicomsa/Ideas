// version 3
const inJoinedInMultipleSentences = (sentence) => {
    // let splitText = sentence.split('. ')
    // let textIncludes = splitText.filter(text=>text.includes('!'))
     //array might work. to check on front-end side
    //  console.log(textIncludes)
    // let joinedText = textIncludes.join('')
    //
    // return joinedText

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

module.exports = inJoinedInMultipleSentences
