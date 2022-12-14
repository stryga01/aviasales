export const FilterReducer = (state = ['all', 0, 1, 2, 3], { type, value }) => {
  switch (type) {
    case 'TOGGLE_FILTER_ALL': {
      if (state.includes('all')) {
        return []
      } else {
        return ['all', 0, 1, 2, 3]
      }
    }
    case 'TOGGLE_FILTER': {
      if (state.includes(value)) {
        const idx = state.findIndex((el) => el === value)
        return [...state.slice(0, idx), ...state.slice(idx + 1)]
      } else {
        return [...state, value]
      }
    }
    default: {
      return [...state]
    }
  }
}
