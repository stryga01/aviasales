import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from '../../redux/actions/SortActions'

import s from './Sort.module.scss'

const Sort = ({ sort, toggleSort }) => {
  const sortList = [
    { name: 'Самый дешевый', param: 'price' },
    { name: 'Самый быстрый', param: 'duration' },
    { name: 'Оптимальный', param: 'optim' },
  ].map((el) => {
    const { name, param } = el
    return (
      <li key={name} className={s.sort__item}>
        <label>
          <input
            className={s.sort__input}
            type="radio"
            name="sort"
            checked={param === sort.param}
            onChange={() => toggleSort(el)}
          />
          <span className={s.sort__title}>{name}</span>
        </label>
      </li>
    )
  })
  return <ul className={s.sort}>{sortList}</ul>
}
const mapStateToProps = ({ sort }) => {
  return {
    sort: sort,
  }
}

const mapDispatchToProps = (dispatch) => {
  const { toggleSort } = bindActionCreators(actions, dispatch)
  return {
    toggleSort,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sort)
