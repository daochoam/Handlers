
export const id = {
    // Numbers:
    numbers: /\d/,
}

export const name = {
    // Special Characters:
    specialCharacters: /[!-/:-@\[-`\{-~¿¡°]/,
    // Numbers:
    numbers: /\d/,
    // Multi-Space characters:
    multiSpace: /[\s]{2,}/,
}

export const email = {
    // Check Email Address: (Gmail rules) + include dash, underscore.
    pattern: /^((?!^[._-])(?![-_.]{2,})[a-zñ0-9._-]){5,29}[a-zñ0-9]+@(([\w-]+\.)+[\w-]{2,4})$/,
    // Check include one @.
    symbol: /@/,
    // MailUserNameM (Gmail rules): Gmail!! + include dash, underscore.
    userName: /^((?!^[._-])(?![-_.]{2,})[a-zñ0-9._-]){5,29}[a-zñ0-9](?=@)/,
    // MailDomain: Check the email domain structure.
    domain: /(?<=@)(([\w-]+\.)+[\w-]{2,4})$/,
    // Special Characters:
    specialCharacters: /([!-,\/:-@\[-\^`\{-~¿¡°])(?=@)/,
    // Space Characters:
    spaces: /\s+/,
    // Init Special Characters:
    initSCharacter: /^([!-/:-@\[-`\{-~¿¡°])/,
    // Consecutive Special Characters:
    multiSCharacter: /[_.-]{2,}/,
    // Capital Letter - No Accent:
    capitaLetter: /[A-ZÑ]/,
    // Username don't finish special character
    charArroba: /([ -/:-@\[-`\{-~¿¡°])(?=@)/, // /[\x20-\x2f\x3a-\x40\x5b-\x60\x7b-\x81](?=@)/  <-- HEXA
    // Accent Characters:
    accentCharacters: /[À-ÆÈ-ÏÒ-ÖÙ-Ýà-æè-ïò-öù-ýÿ]/
}

export const password = {
    // Check Password:
    pattern: /^[A-Za-z!-/:-@\[-`\{-~Ññ¿¡°\d]{8,32}$/,
    // Space Characters:
    spaces: /\s+/,
    // Accent Characters:
    accentCharacters: /[À-ÆÈ-ÏÒ-ÖÙ-Ýà-æè-ïò-öù-ýÿ]/,
    // Capital Letter - No Accent:
    capitaLetter: /[A-ZÑ]/,
    // Lowercase Letter - No Accent:
    lowercaseLetter: /[a-zñ]/,
    // Special Characters:
    specialCharacters: /[!-/:-@\[-`\{-~¿¡°]/,
    // Numbers:
    numbers: /\d/,
}

export const phone = {
    phoneCol: /^((60[1-8])|3(0[0-5]|1[0-9]|2[0-4]|33|5[0-1]))\d{7}/, // Phone numbers in Colombia
    // Numbers:
    numbers: /\d/,
    // No Spaces
    noSpaces: /[^\s]/,
}

export const maritalState = {
    status: /(SOLTER(O|A)|CASAD(O|A)|SEPARAD(O|A)|DIVORCIAD(O|A)|VIUD(O|A))/i,
    // Multi-Space characters:
    multiSpace: /[\s]{2,}/,
    // Numbers:
    numbers: /\d/,
    // Special Characters:
    specialCharacters: /[!-/:-@\[-`\{-~¿¡°]/,
    // Accent Characters:
    accentCharacters: /[À-ÿ]/,
}

export const creditCard = {
    VISA: /^4[0-9]{3}-?[0-9]{4}-?[0-9]{4}-?[0-9]{4}$/,
    MASTERCARD: /^5[1-5][0-9]{2}-?[0-9]{4}-?[0-9]{4}-?[0-9]{4}$/,
    AMEX: /^3[47][0-9-]{16}$/,
    CABAL: /^(6042|6043|6044|6045|6046|5896){4}[0-9]{12}$/,
    NARANJA: /^(589562|402917|402918|527571|527572|0377798|0377799)[0-9]*$/,
}
