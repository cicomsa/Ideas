const sentenceAsMiddle = (sentence) => {
    let splitText = sentence.split('. ')
    let textIncludes = splitText.filter(text=>text.includes('!'))
    let joinedText = textIncludes.join('')
    let result = joinedText.split("!")[0] + "!"
    return result
}

module.exports = sentenceAsMiddle