/* eslint-disable no-unused-vars */
function caesarCipher(string) {
    const alphabet = ['a',"b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    
    const phrase = string.toLowerCase().split('');
    const result =  phrase.map((element) => {
        
        if (alphabet.indexOf(element) !== -1) {
            if (alphabet.indexOf(element) === alphabet.length - 1) {
                return alphabet[1];
            }
            
            if (alphabet.indexOf(element) === alphabet.length - 2) {
                return alphabet[0];
            }

            return alphabet[alphabet.indexOf(element) + 2]
        
            }
        
        return element;

    }).join('');
    
    return result;

}

exports.caesarCipher = caesarCipher;