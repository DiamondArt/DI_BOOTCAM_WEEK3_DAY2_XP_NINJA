/***********************************************************************************
 * ---------------------------------------------------------------------------------
 * @author Melissa Kouadio <angemelisk@gmail.com>
 * @description : 
 * Create calculatrice
 * **********************************************************************************/   


/***********************************************************************************
 * @function validEmailWithoutRegex
 * @description : valid email without regex
 * **********************************************************************************/ 
function validEmailWithoutRegex(str) { 
    let parts = str.split('@')
    if (parts.length == 2) {
        let username = parts[0]
        let domainParts = parts[1].split('.')
        if(domainParts.length >= 2) {
            return true
        }
    }
    return false
}

/***********************************************************************************
 * @function validEmailWithRegex
 * @description : valid email with regex
 * **********************************************************************************/ 
function validEmailWithRegex(str) { 
    return /^[a-z0-9+.-]+@[a-z0-9.-]+\.[a-z]+$/i.test(str)
}
document.querySelector('button').onclick = function() {
    let email = document.querySelector('#email').value
    console.log(`isValidEmail1(${email}) :`, isValidEmail1(email))
    console.log(`isValidEmail2(${email}) :`, isValidEmail2(email))
}