import { maritalState } from "./patternsValidate"

type Name = 'Name' | 'Lastname'
type Validate = 'Save' | 'Load'

/*****************************************************************************************/
/?**************************      MARITAL STATUS VALIDATE     *****************************/
/*************************************************************************************
 * ValidateMaritalS: Validate MaritalS.
 * @param MaritalS string
 * @returns { state: boolean, message: string }
 * state: false (error) || true (success)
 * message: "<error description>" (state:false) || "" (state:true)
 */
const handlerValidateMaritalState = (MaritalS: string): String => {

    if (MaritalS.trim() == "" || MaritalS.trim() == null || MaritalS.trim() == undefined) {
        return "The Marital Status is required."
    }
    else {
        // The field contain many spaces between names.
        if (maritalState.multiSpace.test(MaritalS.trim()) == true) {
            return "The Marital Status contain many spaces between nouns."
        }
        // The field must not contain numbers.
        if (maritalState.numbers.test(MaritalS.trim()) == true) {
            return "The Marital Status mustn't contain numbers."
        }
        // The name must not contain special characters..
        if (maritalState.specialCharacters.test(MaritalS.trim()) == true) {
            return "The Marital Status contain special characters."
        }
        // The name must not contain special characters..
        if (maritalState.accentCharacters.test(MaritalS.trim()) == true) {
            return "The Marital Status mustn't contain accent characters."
        }
        // The name must not contain special characters..
        if (maritalState.status.test(MaritalS.trim()) == false) {
            return "The Marital Status value is not correct."
        }
    }
    return ''
}

export default handlerValidateMaritalState