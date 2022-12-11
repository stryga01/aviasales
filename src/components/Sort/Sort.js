import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from '../../redux/actions/SortActions'

import s from './Sort.module.scss'

const Sort = ({ sort, toggleSort }) => {
  const sortList = ['Самый дешевый', 'Самый быстрый', 'Оптимальный'].map((el) => {
    return (
      <li key={el} className={s.sort__item}>
        <label>
          <input
            className={s.sort__input}
            type="radio"
            name="sort"
            checked={el === sort}
            onChange={() => toggleSort(el)}
          />
          <span className={s.sort__title}>{el}</span>
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
