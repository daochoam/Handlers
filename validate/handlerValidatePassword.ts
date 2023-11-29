import { password } from "./patternsValidate"
type Validate = 'Save' | 'Load'

/*****************************************************************************************/
/*****************************       PASSWORD VALIDATE       *****************************/
/*****************************************************************************************
 * ValidatePassword: validate Password field
 * @param Password string
 * @param Validate 'save' || 'load' (default)
 * @returns { state: boolean, message: string }
 * state: false (error) || true (success)
 * message: "<error description>" (state:false) || "" (state:true)
 */
const handlerValidatePassword = (Password: string, Validate: Validate = 'Load'): String => {
    // This field is required.
    if (Password.trim() == "" || Password.trim() == null || Password.trim() == undefined) {
        return "The Password is required."
    }
    else {
        if (Validate == 'Load') {
            if (password.pattern.test(Password.trim()) == false) {
                return "The Password entered is invalid.";
            }
        }
        else if (Validate == 'Save') {
            // The field contain spaces.
            if (password.spaces.test(Password.trim()) == true) {
                return "The password mustn't contain spaces.";
            }

            // The field contain accent characters.
            if (8 > Password.trim().length || Password.trim().length > 20) {
                return "The password must be between 8 to 20 characters.";
            }

            // The field contain accent characters.
            if (password.accentCharacters.test(Password.trim()) == true) {
                return "The password mustn't contain accent characters.";
            }

            // The field contain 1 capital letter.
            if (password.capitaLetter.test(Password.trim()) == false) {
                return "The password must have at least 1capital letter."
            }

            // The field contain 1 lowercase letter.
            if (password.lowercaseLetter.test(Password.trim()) == false) {
                return "The password must have at least 1 lowercase letter."
            }

            // The field contain 1 number.
            if (password.numbers.test(Password.trim()) == false) {
                return "The password must have at least 1 number."
            }

            // The field contain 1 special character.
            if (password.specialCharacters.test(Password.trim()) == false) {
                return "The password must have at least 1 special character."
            }
        }
    }
    return ''
}

export default handlerValidatePassword