// version 6 + 7

let sentence = "Another! Yesterday. Today! Tomorrow. Hello, another. me!"

const paragraph = (sentence) => {
  
    let result = []
    let splitText = sentence.split('. ')

    //find what to work with 
    let includesSign = splitText.filter(text=>(text.includes('!') ))
   
    let signLastChar = includesSign.filter(text=> text.charAt(text.length-1) === '!' ).join('')
    
    let signMiddleChar = includesSign.filter(text=> text.charAt(text.length-1) !== '!')

    let splitSignMiddleChar = () => {
        if (signMiddleChar)  {
            let splitSign = signMiddleChar.map(text=>text.split('!'))
            let result = splitSign.map(text=>text[0]+ '!')
            return result.join('')
            }
    } 

    splitSignMiddleChar() ? result.push(splitSignMiddleChar(), signLastChar): result.push(signLastChar)
    
    return result  
  
}

module.exports = paragraph