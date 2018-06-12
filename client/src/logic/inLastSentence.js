// 1st version
const inLastSentence = (sentence) => {
    let splitText = sentence.split('. ')
    let result = splitText.filter(text=>text.includes('!'))
    // console.log(same)
    return result[0]
}

module.exports = inLastSentence