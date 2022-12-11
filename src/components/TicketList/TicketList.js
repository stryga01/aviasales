/*eslint-disable*/
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../redux/actions/TicketActions'
import { Spin } from 'antd'
import { v4 as uuidv4 } from 'uuid'

import TicketItem from '../TicketItem/TicketItem'
import Sort from '../Sort/Sort'
import Filters from '../Filters/Filters'

import s from './TicketList.module.scss'
import Loader from '../Loader/Loader'

const TicketList = ({
  getSearchIdAction,
  getTicketsAction,
  showMoreTickets,
  searchId,
  tickets,
  stop,
  countTicketsOnPage,
  filters,
}) => {
  useEffect(() => {
    getSearchIdAction()
  }, [])

  useEffect(() => {
    if (!searchId) return
    getTicketsAction(searchId, stop)
  }, [searchId, stop])

  const sortArr = tickets.sort((a, b) => {
    return a.price - b.price
  })

  let ticketList
  if (tickets.length) {
    ticketList = sortArr.map((ticket, idx) => {
      if (idx >= countTicketsOnPage) return
      return <TicketItem key={uuidv4()} ticket={ticket} />
    })
  }
  return (
    <div className={s.wrapper}>
      <div className={s.tickets}>
        <Filters />
        <Sort />
        {tickets.length && !stop ? <Loader /> : null}
        <ul className={s.tickets__list}>{tickets.length ? ticketList : <Spin size="large" />}</ul>
        {tickets.length ? (
          <button onClick={showMoreTickets} className={s.tickets__button}>
            Показать еще 5 билетов!
          </button>
        ) : null}
      </div>
    </div>
  )
}

const mapStateToProps = ({ tickets, filters }) => {
  return {
    tickets: tickets.tickets,
    searchId: tickets.searchId,
    countTicketsOnPage: tickets.countTicketsOnPage,
    stop: tickets.stop,
    filters,
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
