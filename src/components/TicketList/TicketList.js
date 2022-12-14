import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { v4 as uuidv4 } from 'uuid'

import * as actions from '../../redux/actions/TicketActions'
import TicketItem from '../TicketItem/TicketItem'
import Sort from '../Sort/Sort'
import Filters from '../Filters/Filters'
import Loader from '../Loader/Loader'

import s from './TicketList.module.scss'

const TicketList = ({
  getSearchIdAction,
  getTicketsAction,
  showMoreTickets,
  searchId,
  tickets,
  stop,
  countTicketsOnPage,
  sort,
  filters,
}) => {
  useEffect(() => {
    getSearchIdAction()
  }, [])

  useEffect(() => {
    if (!searchId) return
    getTicketsAction(searchId)
  }, [searchId])

  const sortTickets = (tickets, param) => {
    return tickets.sort((a, b) => {
      if (param === 'price') {
        return a.price - b.price
      } else if (param === 'duration') {
        return a.segments[0].duration + a.segments[1].duration - (b.segments[0].duration + b.segments[1].duration)
      }
    })
  }

  const filterTickets = (tickets, filters) => {
    if (filters.length === 0) return []
    return tickets.filter((ticket) => {
      const { segments } = ticket
      if (segments[0].stops.length === segments[1].stops.length) {
        return filters.includes(segments[0].stops.length)
      }
      return false
    })
  }
  const filteredTickets = filterTickets(tickets, filters)
  const ticketList = sortTickets(filteredTickets, sort.param).map((ticket, idx) => {
    if (idx >= countTicketsOnPage) return
    return <TicketItem key={uuidv4()} ticket={ticket} />
  })

  return (
    <div className={s.wrapper}>
      <div className={s.tickets}>
        <Filters />
        <Sort />
        {!stop ? <Loader /> : null}
        <ul className={s.tickets__list}>
          {!filteredTickets.length && stop ? (
            <span className={s.tickets__alert}>Билетов, подходящих под выбранные фильтры не найдено</span>
          ) : (
            ticketList
          )}
        </ul>
        {filteredTickets.length ? (
          <button onClick={showMoreTickets} className={s.tickets__button}>
            Показать еще {countTicketsOnPage} билетов!
          </button>
        ) : null}
      </div>
    </div>
  )
}

const mapStateToProps = ({ tickets, filters, sort }) => {
  return {
    tickets: tickets.tickets,
    searchId: tickets.searchId,
    countTicketsOnPage: tickets.countTicketsOnPage,
    stop: tickets.stop,
    filters,
    sort,
  }
}

const mapDispatchToProps = (dispatch) => {
  const { getTicketsAction, getSearchIdAction, showMoreTickets } = bindActionCreators(actions, dispatch)
  return {
    getTicketsAction,
    getSearchIdAction,
    showMoreTickets,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TicketList)
