//version 8
const endWith = (sentence) => {
    if (!sentence.includes('. ')) {
        return sentence
    } else {
        let splitText = sentence.split('. ')
        let filteredText =  splitText.filter(text=>text.includes('!')).join('')
        return filteredText             
    }
}

module.exports = endWith


