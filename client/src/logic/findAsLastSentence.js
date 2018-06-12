const findAsLastSentence = (sentence) => {
    let text = sentence.split('. ')
    let same = text.filter(text=>text.includes('!'))
    console.log(same[0])
    return same[0]
}

module.exports = findAsLastSentence