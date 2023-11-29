import { phone } from "./patternsValidate"
/*****************************************************************************************/
/**************************         PHONE VALIDATE           *****************************/
/*************************************************************************************
 * ValidatePhone: Validate Phone Colombia.
 * @param Phone string | number
 * @returns { state: boolean, message: string }
 * state: false (error) || true (success)
 * message: "<error description>" (state:false) || "" (state:true)
 */
const handlerValidatePhone = (Phone: string): String => {

    if (Phone.trim() == "" || Phone.trim() == null || Phone.trim() == undefined) {
        return 'The Phone is required.'
    }
    else {
        if (!phone.numbers.test(Phone.trim()) == true) {
            return "Remove non-Numeric characters."
        }
    }

    return ''
}