const handlerFilterByOrigin = (data, origin = "All") => {
    const regexDataBase = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
    try {
        if (origin === "All") { return data }
        if (origin === "API") {
            console.log(data.filter(({ id }) => isNaN(id)))
            return data.filter(({ id }) => !isNaN(id))
        }
        if (origin === "DB") {
            console.log("DB")
            return data.filter(({ id }) => regexDataBase.test(id))
        }
    } catch (error) {
        throw Error(error.message)
    }
}

export default handlerFilterByOrigin