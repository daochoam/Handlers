const handlerFilterByName = (data, keyword) => {

    try {
        if (keyword === undefined || keyword === null || keyword === '') { return data }
        const filterNames = data.filter(({ name }) => name.toLowerCase().includes(keyword.toLowerCase()));
        if (filterNames.length === 0) { return data }
        else return filterNames

    } catch (error) {
        throw Error(error.message)
    }
}

export default handlerFilterByName