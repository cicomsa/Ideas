const threeDots = sentence => {

    const splitText = sentence.split('!')
    const text = []
    splitText
      .filter(sentence => sentence !== '' && sentence[sentence.length - 1] !== '.')
      .map(sentence => {
      if (sentence.includes('.')) {
        const leftToSplit = sentence.split('. ').pop()
        text.push('§' + leftToSplit + '!')
      } else if (sentence.includes('?')) {
        const leftToSplit = sentence.split('? ').pop()
        text.push('§' + leftToSplit + '!')
      } else {
        text.push('§' + sentence.trim() + '!')
      }

      return sentence
    })

    const result = text.join('').split('§').filter(sentence => sentence !== '')

    return result
}

module.exports = threeDots
