
export const  getPollWidgetDataFromLocalStorage = (key) => {
    if (localStorage.getItem(key)) {
      try {
        return JSON.parse(localStorage.getItem(key))
      } catch (error) {
        return {}
      }
    }
    return {}
  }