// version 1
const inLastSentence = (sentence) => {

    let splitText = sentence.split('. ').pop()
    return splitText
}

module.exports = inLastSentence