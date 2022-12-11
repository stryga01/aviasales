import React from 'react'

import { getTime } from '../../utils/getTime'

import s from './TicketItem.module.scss'

const TicketItem = ({ ticket }) => {
  const { price, carrier, segments } = ticket
  const segmentList = segments.map(({ origin, destination, duration, date, stops }) => {
    const time = getTime(date, duration)
    return (
      <div key={duration + date} className={s.ticket__row}>
        <span className={s.ticket__title}>
          {origin} - {destination}
        </span>
        <span className={s.ticket__title}>В пути</span>
        <span className={s.ticket__title}>
          {stops.length ? stops.length : 'Без'} пересад{stops.length === 1 ? 'ка' : stops.length === 0 ? 'ок' : 'ки'}
        </span>
        <span className={s.ticket__content}>
          {time.originHours}:{time.originMin} - {time.destHours}:{time.destMin}
        </span>
        <span className={s.ticket__content}>
          {Math.floor(duration / 60)}ч {Math.floor(duration % 60)}м
        </span>
        <span className={s.ticket__content}>
          {destination}, {origin}
        </span>
      </div>
    )
  })
  return (
    <li className={s.ticket}>
      <div className={s.ticket__header}>
        <span className={s.ticket__price}>{new Intl.NumberFormat('ru-RU').format(price)} P</span>
        <a href="#">
          <img src={`https://pics.avs.io/99/36/${carrier}.png`} />
        </a>
      </div>
      <div className={s.ticket__info}>{segmentList}</div>
    </li>
  )
}

export default TicketItem
