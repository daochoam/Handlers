class LocalStorage {
  constructor(local_name, key_name = null) {
    this.local_name = local_name
    this.key_name = key_name
    this.local_storage = null
    this.key_storage = null

    if (this.local_name) {
      this.setKeyName()
      this.setLocalStorage()
      this.setKeyStorage()
    }
  }

  getPathName = () => {
    const path_name = window.location.pathname.split('/').filter(item => item !== '')
    return path_name
  }

  getKeyStorage = () => this.getStorage(this.key_name)

  getLocalStorage = () => {
    const local_storage = localStorage.getItem(this.local_name)
    this.local_storage = local_storage ? JSON.parse(local_storage) : null
    return this.local_storage
  }

  getStorage = name => {
    this.getLocalStorage()
    if (this.local_storage && Object.prototype.hasOwnProperty.call(this.local_storage, name)) {
      return JSON.parse(this.key_storage)
    }
    return null
  }

  setKeyName = () => {
    this.key_name = this.getPathName().join('-')
  }

  setLocalStorage = () => {
    try {
      const local_storage = this.getLocalStorage(this.local_name)
      if (!local_storage) {
        localStorage.setItem(this.local_name, JSON.stringify({}))
        this.local_storage = {}
      }
    } catch (error) {
      console.error('Error setting session storage:', error)
    }
  }

  setKeyStorage = key_storage => {
    this.getLocalStorage()
    if (this.local_storage) {
      this.key_storage = key_storage || null
      this.local_storage = { ...this.local_storage, [this.key_name]: this.key_storage }
    }
    return localStorage.setItem(this.local_name, JSON.stringify(this.local_storage))
  }

  isEmptyKeyStorage = () => {
    this.getLocalStorage()
    return this.key_storage && Object.keys(this.key_storage).length === 0
  }
}

export default LocalStorage
