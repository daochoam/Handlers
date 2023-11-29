
const handlerFilterByFieldOrder = (dataToFilter, field, order = 'all') => {
    try {
        if (order === 'all') return data
        if (order === 'up') {
            if (typeof field === 'number')
                return data.sort((a, b) => a[field] - b[field]);
            if (typeof field === 'string')
                return data.sort((a, b) => a[field].localeCompare(b[field]))
        }
        if (order === 'down') {
            if (typeof field === 'number')
                return data.sort((a, b) => b[field] - a[field]);
            if (typeof field === 'string')
                return data.sort((a, b) => b[field].localeCompare(a[field]))
        }
        return data
    } catch (error) {
        throw Error(error.message)
    }
}

export default handlerFilterByFieldOrder
