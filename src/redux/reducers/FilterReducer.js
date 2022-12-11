export const FilterReducer = (state = [], { type, value }) => {
  switch (type) {
    case 'TOGGLE_FILTER_ALL': {
      if (state.includes('Все')) {
        return []
      } else {
        return ['Все', 'Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки']
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
