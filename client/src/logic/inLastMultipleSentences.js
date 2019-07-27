// version 4
const inLastMultipleSentences = (sentence) => {
    // let splitText = sentence.split('. ')
    // let textIncludes = splitText.filter(text=>text.includes('!'))
    // let joinedText = textIncludes.join('')
    // let anotherSplitText = joinedText.split(' ')
    //
    // return anotherSplitText

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

module.exports = inLastMultipleSentences
