export const SortReducer = (state = { name: 'Самый дешевый', param: 'price' }, { type, value }) => {
  switch (type) {
    case 'TOGGLE_SORT': {
      return value
    }
    default: {
      return state
    }
  }
}
