//version 8
const endWith = (sentence) => {

    let signAtChar = sentence.charAt(sentence.length -1) === ('!') && !sentence.includes('. ')

    if (signAtChar)  {
        return signAtChar 
     } else { 
        let text = sentence.split('. ')
        return text.filter(text=>text.includes('!')).join('')
    }

}

module.exports = endWith


