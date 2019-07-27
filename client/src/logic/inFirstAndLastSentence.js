// version 5

let sentence = "Another! Yesterday. Today! Tomorrow. Hello! another. me!"

const inFirstAndLastSentence = (sentence) => {

    /*version 1
    let splitText = sentence.split('. ')
    let asLastChar = splitText.filter(text=> text.charAt(text.length-1) === '!')
    let asMiddleChar = splitText.filter(text=> text.charAt(text.length-1) !== '!')
    let splitAsMiddleChar = asMiddleChar.map(text=>text.split('! ')[0]+'!')
    let result = splitAsMiddleChar.concat(asLastChar)*/


    // let result = []
    // let splitText = sentence.split('! ')
    // //get the phrases that ended up with '!' and do not include '.'
    // let noDot = splitText.filter(text=> !text.includes('.'))
    // result.push(noDot +'!')
    //
    // //get the phrases that ended up with '!' and include '.'
    // let dotIn = splitText.filter(text=> text.includes('.'))
    // let splitDot = dotIn.map(text=>text.split('. '))
    // let splitEx = splitDot.map(text=>text[1])
    // //if no '!', add '!' back
    // splitEx.map(text=> text.includes('!')? result.push(text):result.push(text+'!'))
    //
    // return result

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

module.exports = inFirstAndLastSentence
