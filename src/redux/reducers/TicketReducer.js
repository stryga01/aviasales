const initialState = {
  tickets: [],
  searchId: undefined,
  countTicketsOnPage: 5,
  stop: false,
}
export const TicketReducer = (state = initialState, { type, value }) => {
  switch (type) {
    case 'GET_TICKETS': {
      return { ...state, tickets: [...state.tickets, ...value] }
    }
    case 'GET_SEARCH_ID': {
      return { ...state, searchId: value }
    }
    case 'SHOW_MORE_TICKETS': {
      return { ...state, countTicketsOnPage: state.countTicketsOnPage + 5 }
    }
    case 'SET_STOP': {
      return { ...state, stop: true }
    }
    default: {
      return { ...state }
    }
  }
}
