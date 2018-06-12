const lastMultipleSentences = (sentence) => {
    let splitText = sentence.split('. ')
    let textIncludes = splitText.filter(text=>text.includes('!'))
    let joinedText = textIncludes.join('')
    let anotherSplitText = joinedText.split(' ')
console.log(anotherSplitText)
    return anotherSplitText
}

module.exports = lastMultipleSentences