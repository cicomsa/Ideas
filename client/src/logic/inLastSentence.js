// version 1
const inLastSentence = (sentence) => {

    // let splitText = sentence.split('. ').pop()
    // return splitText

    // let splitText = sentence.match(/\.(.*?)\!/)[1].trim() + '!'
    // return splitText

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

module.exports = inLastSentence
