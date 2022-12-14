import TicketsService from '../../service/TicketService'
const { getSearchId, getTickets } = new TicketsService()

export const getTicketsAction = (value) => {
  return async (dispatch) => {
    while (value) {
      try {
        const { tickets, stop } = await getTickets(value)
        if (stop) {
          dispatch({ type: 'SET_STOP' })
          return
        }
        dispatch({ type: 'GET_TICKETS', value: tickets })
      } catch (err) {
        console.log(err)
      }
    }
  }
}

export const getSearchIdAction = () => {
  return (dispatch) => {
    getSearchId().then(({ searchId }) => {
      dispatch({ type: 'GET_SEARCH_ID', value: searchId })
    })
  }
}

export const showMoreTickets = () => {
  return { type: 'SHOW_MORE_TICKETS' }
}
