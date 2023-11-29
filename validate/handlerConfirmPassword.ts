/*****************************************************************************************/
/**************************    CONFIRM PASSWORD VALIDATE     *****************************/
/*************************************************************************************
 * ValidateConfirmPassword: Validate Password field == ConfirmPassword field.
 * @param ConfirmPassword string
 * @param Password string
 * @returns { state: boolean, message: string }
 * state: false (error) || true (success)
 * message: "<error description>" (state:false) || "" (state:true)
 */
const ValidateConfirmPassword = (ConfirmPassword: string, Password: string): String => {
    // This field is required.
    if (ConfirmPassword.trim() == "" || ConfirmPassword.trim() == null || ConfirmPassword.trim() == undefined) {
        return "Retype your Password."
    }
    else if (ConfirmPassword != Password) {
        return "Passwords did not match"
    } else {
        return ""
    }
}