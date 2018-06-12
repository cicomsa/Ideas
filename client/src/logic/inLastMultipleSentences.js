// version 4
const inLastMultipleSentences = (sentence) => {
    let splitText = sentence.split('. ')
    let textIncludes = splitText.filter(text=>text.includes('!'))
    let joinedText = textIncludes.join('')
    let anotherSplitText = joinedText.split(' ')

    return anotherSplitText
}

module.exports = inLastMultipleSentences