import React from 'react'

import TicketList from '../TicketList/TicketList'
import Logo from '../../assets/img/Form.svg'

import s from './App.module.scss'

const App = () => {
  return (
    <div className={s.wrapper}>
      <header className={s.header}>
        <img src={Logo} alt="logo" />
      </header>
      <div className={s.container}>
        <TicketList />
      </div>
    </div>
  )
}

export default App
