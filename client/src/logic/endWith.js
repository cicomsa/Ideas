//version 8
const endWith = (sentence) => {
          
    if (sentence.includes('. ')) {
        let splitText = sentence.split('. ')
        let filteredText = splitText
            .filter(text=>text.includes('!'))
            .join('')
        return filteredText             
    }
    
    return sentence
}

module.exports = endWith


