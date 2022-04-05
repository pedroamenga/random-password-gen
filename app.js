const generatePassword = (hasUppercase = false, hasLowercase = true, hasNumbers = false, hasSymbols = false, size = 8) => {
    let password = [];
    let characters = "";

    if(hasUppercase) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(hasLowercase) characters += "abcdefghijklmnopqrstuvwxyz";
    if(hasNumbers) characters += "0123456789";
    if(hasSymbols) characters += "?+%_$#.''";

    let i = 0;
    while( i < size){
        password.push(characters.charAt(Math.floor(Math.random() * characters.length)))
        i++;
    }

    return password.join('');
}

console.log(generatePassword(true, false, true, false, 18));