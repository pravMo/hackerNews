const saveSearch = (state = [], action) => {
    switch (action.type) {
      case 'ADD_QUERY':
        return [
          ...state,
          {
            id: action.id,
            text: action.text
          }
        ]
      default:
        return state
    }
  }
  
  export default saveSearch