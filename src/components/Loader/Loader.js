import React from 'react'

import s from './Loader.module.scss'
const Loader = () => {
  return (
    <div className={s.loader}>
      <span className={s.loader__title}>Идет поиск билетов...</span>
      <div className={s.cssload__jumping}>
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  )
}

export default Loader
