const handlerFilterByObject = (data, attribute = 'name', fieldFilter = []) => {
    try {
        if (fieldFilter.length === 0) return data
        if (!data[0].hasOwnProperty(attribute)) throw Error(`The object does not have the property ${attribute}`)
        return data.filter(data => {
            return fieldFilter.every((filter) => data[attribute].includes(filter))
        });

    } catch (error) {
        throw Error(error.message);
    }

}

export default handlerFilterByObject
