class SessionStorage {
  #session_name;
  #key_name;
  #result_name;
  #data;
  #session_storage;
  #value_storage;
  #result_storage;

  constructor(session_name, key_name = null, data = null) {
    this.#session_name = session_name
    this.#key_name = key_name
    this.#result_name = null
    this.#data = data
    this.#session_storage = null
    this.#value_storage = null
    this.#result_storage = null

    if (this.#session_name) {
      this.setKeyName()
      this.setSessionStorage()
      this.setValueStorage()
    }
  }
  // ...

  getPathName = () => {
    const path_name = window.location.pathname.split('/').filter(item => item !== '')
    return path_name
  }

  getKeyName = () => this.#key_name

  getData = () => this.#data

  getValueStorage = () => this.getStorage(this.#key_name)

  getResultStorage = () => this.getStorage(this.#result_name)

  getSessionStorage = () => {
    const search = sessionStorage.getItem(this.#session_name)
    this.#session_storage = search ? JSON.parse(search) : null
    return this.#session_storage
  }

  getStorage = name => {
    this.getSessionStorage()
    if (this.#session_storage && Object.prototype.hasOwnProperty.call(this.#session_storage, name)) {
      return this.#session_storage[name]
    }
    return null
  }

  setKeyName = () => {
    this.#key_name = this.#key_name ? this.#key_name : this.getPathName().join('-')
  }

  setResultName = (result_name = null) => {
    this.#result_name = result_name || `result-${this.getPathName().join('-')}`
  }

  setSessionStorage = () => {
    try {
      const sessionData = this.getSessionStorage(this.#session_name)
      if (!sessionData) {
        sessionStorage.setItem(this.#session_name, JSON.stringify({}))
        this.#session_storage = {}
      }
    } catch (error) {
      console.error('Error setting session storage:', error)
    }
  }

  setValueStorage = () => {
    this.getSessionStorage()
    if (this.#session_storage && !Object.prototype.hasOwnProperty.call(this.#session_storage, this.#key_name)) {
      this.#value_storage = {}
      this.#session_storage = { ...this.#session_storage, [this.#key_name]: this.#value_storage }
      sessionStorage.setItem(this.#session_name, JSON.stringify(this.#session_storage))
    }
  }

  setKeyResult = result => {
    this.getSessionStorage()
    if (!Object.prototype.hasOwnProperty.call(this.#session_storage, this.#result_name)) {
      this.setResultName()
    }
    this.#result_storage = result
    this.#session_storage = { ...this.#session_storage, [this.#result_name]: this.#result_storage }
    sessionStorage.setItem(this.#session_name, JSON.stringify(this.#session_storage))
  }

  updateObjectStorage = (objectIn = null) => {
    this.#value_storage = objectIn || this.#data
    this.#session_storage = { ...this.#session_storage, [this.#key_name]: this.#value_storage }
    sessionStorage.setItem(this.#session_name, JSON.stringify(this.#session_storage))
    // }
    return this.#value_storage
  }

  isEqualToStorage = (objectIn = null, keys_exclude = null) => {
    let data = []
    data[0] = this.#cleanAndSortObject(this.getValueStorage())
    data[1] = this.#cleanAndSortObject(objectIn || this.#data)

    if (keys_exclude && Array.isArray(keys_exclude)) {
      data = data.map(object => Object.keys(object).reduce((acc, key) => {
        if (!keys_exclude.includes(key)) {
          acc[key] = object[key]
        }
        return acc
      }, {}))
    }

    return JSON.stringify(data[0]) === JSON.stringify(data[1])
  }

  // const cleanedObject = this.#noNullUndefined(object)
  #cleanAndSortObject = object => {
    if (!object || Object.keys(object).length === 0) return {}
    return Object.keys(object).length && Object.keys(object).sort().reduce((acc, key) => {
      if (object[key] !== null && object[key] !== undefined) {
        acc[key] = object[key]
      }
      return acc
    }, {})
  }

  isEmptyValueStorage = () => {
    this.getValueStorage()
    return this.#value_storage && !Object.keys(this.#value_storage).length === 0
  }
}

export default SessionStorage
