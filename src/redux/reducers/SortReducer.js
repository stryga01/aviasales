// const initialState = {
//   currentSort: 'Самый дешевый',
// }

export const SortReducer = (state = 'Самый дешевый', { type, value }) => {
  switch (type) {
    case 'TOGGLE_SORT': {
      return value
    }
    default: {
      return state
    }
  }
}
