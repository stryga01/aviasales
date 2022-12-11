import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from 'redux'
import thunk from 'redux-thunk'

import { FilterReducer } from './reducers/FilterReducer'
import { SortReducer } from './reducers/SortReducer'
import { TicketReducer } from './reducers/TicketReducer'

const reducers = combineReducers({
  filters: FilterReducer,
  sort: SortReducer,
  tickets: TicketReducer,
})

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

export default store
