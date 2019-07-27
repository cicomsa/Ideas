//version 8
const endWith = (sentence) => {
    // if (sentence.includes('. ')) {
    //     let splitText = sentence.split('. ')
    //     let filteredText = splitText
    //         .filter(text=>text.includes('!'))
    //         .join('')
    //     return filteredText
    // }
    //
    // return sentence

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

module.exports = endWith
