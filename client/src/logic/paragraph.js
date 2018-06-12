// version 6

let sentence = "Another! Yesterday. Today! Tomorrow. Hello, another. me!"

const paragraph = (sentence) => {
  
    
    let splitText = sentence.split('. ')
    //find what to work with 
    let includesSign = splitText.filter(text=>(text.includes('!') ))

    let signLastChar = includesSign.filter(text=> text.charAt(text.length-1) === '!')

    if (signLastChar) {
        return includesSign 
    } else  {
        let splitSign = includesSignToFilter.map(text=>text.split('!'))
        let result = splitSign.map(text=>text[0]+ '!')
        return result
    }
        

   

    
}

module.exports = paragraph