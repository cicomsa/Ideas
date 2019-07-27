// version 1
const inLastSentence = (sentence) => {

    // let splitText = sentence.split('. ').pop()
    // return splitText

    let splitText = sentence.match(/\.(.*?)\!/)[1].trim() + '!'
    return splitText
}

module.exports = inLastSentence
