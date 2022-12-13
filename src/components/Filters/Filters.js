import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from '../../redux/actions/FilterActions'

import s from './Filters.module.scss'

const Filters = ({ filtersArr, toggleFilterAll, toggleFilter }) => {
  const toggleFilterHandler = (filter) => {
    if (filter === 'all') {
      toggleFilterAll()
    } else if (filtersArr.length === 3 && !filtersArr.includes(filter)) {
      toggleFilterAll()
    } else if (filter !== 'all' && filtersArr.length > 4) {
      toggleFilter(filter)
      toggleFilter('all')
    } else {
      toggleFilter(filter)
    }
  }

  const filters = [
    { name: 'Все', param: 'all' },
    { name: 'Без пересадок', param: 0 },
    { name: '1 пересадка', param: 1 },
    { name: '2 пересадки', param: 2 },
    { name: '3 пересадки', param: 3 },
  ].map((filterEl) => {
    const { name, param } = filterEl
    return (
      <li key={name} className={s.filters__item}>
        <label className={s.filters__label}>
          <input
            className={s.filters__input}
            type="checkbox"
            onChange={() => toggleFilterHandler(param)}
            checked={filtersArr.includes(param)}
          />
          <span className={s.filters__checkbox}>
            <svg
              className={s.filters__unchecked}
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.28571 8L0 4.16123L1.20857 3.0787L4.28571 5.82726L10.7914 0L12 1.09021L4.28571 8Z"
                fill="#2196F3"
              />
            </svg>{' '}
          </span>
          {name}
        </label>
      </li>
    )
  })

  return (
    <aside className={s.filters}>
      <h2 className={s.filters__title}>Количество пересадок</h2>
      <ul className={s.filters__list}>{filters}</ul>
    </aside>
  )
}
const mapStateToProps = ({ filters }) => {
  console.log()
  return {
    filtersArr: filters,
  }
}

const mapDispatchToProps = (dispatch) => {
  const { toggleFilterAll, toggleFilter } = bindActionCreators(actions, dispatch)
  return {
    toggleFilterAll,
    toggleFilter,
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Filters)
