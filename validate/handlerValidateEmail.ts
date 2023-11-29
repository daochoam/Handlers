import { email } from "./patternsValidate";
type Validate = 'Save' | 'Load'

/*****************************************************************************************/
/?*****************************         EMAIL VALIDATE        *****************************/
/*****************************************************************************************
 * ValidateEmail: Validate email field
 * @param {String} Email string
 * @param {Validate} Validate 'save' || 'load' (default)
 * @returns {String}
 */

const handlerValidateEmail = (Email: string, Validate: Validate = 'Load'): String => {
    var msn: string = ""

    // This field is required.
    if (Email.trim() == "" || Email.trim() == null || Email.trim() == undefined) {
        return 'The Email is required.'
    }
    else {
        if (Validate == 'Load') {
            if (email.pattern.test(Email.trim()) == false) {
                return "The Email entered is invalid."
            }
        }
        else if (Validate == 'Save') {
            // The email must contain @ symbol.
            if (Email.match(email.symbol)?.length != 1) {
                return "The email should only have an @ symbol"
            }

            // Only the use of '._-@' is supported..
            if (email.specialCharacters.test(Email.trim()) == true) {
                return "The username email only supports '._-' characters."
            }

            // The email contain spaces.
            if (email.spaces.test(Email.trim()) == true) {
                return "The email mustn't contain spaces."
            }

            // Only the use of '._-@' is supported..
            if (email.capitaLetter.test(Email.trim()) == true) {
                return "The email mustn't contain capital letters."
            }

            // The email must not start with a special characters.
            if (email.initSCharacter.test(Email.trim()) == true) {
                return "The email should not start with special characters."
            }

            // The email must not end with a period.
            if (email.charArroba.test(Email.trim()) == true) {
                return "The email should not end with special characters."
            }

            // The email must not start with a special characters.
            if (email.multiSCharacter.test(Email.trim()) == true) {
                return "The email must not have consecutive special characters."
            }
        }
    }
    return ''
}

export default handlerValidateEmail