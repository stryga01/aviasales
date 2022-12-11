class TicketService {
  constructor() {
    this._baseUrl = 'https://aviasales-test-api.kata.academy/'
    this.searchId = null
  }

  getResource = async (url) => {
    const res = await fetch(`${this._baseUrl}${url}`)
    if (!res.ok) {
      throw new Error('could not fetch')
    }
    return await res.json()
  }

  getSearchId = async () => {
    const res = await this.getResource('search')
    return res
  }

  getTickets = async (searchId) => {
    const res = await this.getResource(`tickets?searchId=${searchId}`)
    return res
  }
}
export default TicketService
