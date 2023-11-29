import { name } from "./patternsValidate.js"

type Name = 'Name' | 'Lastname'
/*****************************************************************************************/
/*****************************    NAME & LASTNAME VALIDATE   *****************************/
/*****************************************************************************************
 * ValidateName: Validate the Name or Lastname
 * @param Name String input variable
 * @param Type Type of field to validate: 'Name' (default) || 'Lastname'.
 */
const handlerValidateName = (Name: string, Type: Name = 'Name'): String => {
  // This field is required.
  if (Name.trim() == "" || Name.trim() == null || Name.trim() == undefined) {
    return `The ${Type} is required.`
  }
  else {
    // The field contain many spaces between names.
    if (name.multiSpace.test(Name.trim()) == true) {
      return `The ${Type} mustn't contain multi-spaces between words.`
    }

    // The field must not contain numbers.
    if (name.numbers.test(Name.trim()) == true) {
      return `The ${Type} mustn't contain numbers.`
    }

    // The field must not contain name(s) of more than 15 characters.
    if (Math.max(...Name.trim().split(' ').map(p => p.length)) > 15) {
      return `The ${Type} mustn't have words longer than 15 characters.`
    }

    // The field must not contain name(s) of less than 3 characters.
    if (Math.min(...Name.trim().split(' ').map(p => p.length)) < 2) {
      return `The ${Type} mustn't have words of less than 2 characters`
    }

    // The name must not contain special characters..
    if (name.specialCharacters.test(Name.trim()) == true) {
      return `The ${Type} mustn't have special characters.`
    }
  }
  return ''
}

export default handlerValidateName