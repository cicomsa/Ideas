// version 6 + 7 + 9

const paragraph = (sentence) => {

    // let result = []
    // let splitText = sentence.split('. ')
    //
    // //find what to work with
    // let includesSign = splitText.filter(text=>(text.includes('!') ))
    //
    // let signLastChar = includesSign.filter(text=> text.charAt(text.length-1) === '!' ).join('')
    // result.push( signLastChar)
    //
    // let signMiddleChar = includesSign.filter(text=> text.charAt(text.length-1) !== '!')
    //
    // const splitSignMiddleChar = () => {
    //     if (signMiddleChar)  {
    //         let splitSign = signMiddleChar.map(text=>text.split('!'))
    //         let result = splitSign.map(text=>text[0]+ '!')
    //
    //         return result
    //         }
    // }
    //
    // if (splitSignMiddleChar()) return splitSignMiddleChar().concat(result)

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

module.exports = paragraph
