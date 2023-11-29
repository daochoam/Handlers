const handlerTexts = (text, realTime = false) => {
    if (realTime === true) {
        let long = text.length
        if (long === 0) return text
        if (long === 1 && /[a-z]/.test(text)) return text[0].toUpperCase()
        if (long >= 2) {
            if (/\s{2}$/.test(text)) return text.slice(0, -1)
            if (/\.\s{2}$/.test(text)) return text.slice(0, -2)
            if (/\.\s[a-zñ]$/.test(text)) return text.slice(0, -1) + text[long - 1].toUpperCase()
            if (/\.[a-zñ]$/.test(text)) return `${text.slice(0, -1)} ${text[long - 1].toUpperCase()}`
        }
    }
}
export default handlerTexts