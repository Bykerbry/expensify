import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

const store = configureStore()

store.dispatch(addExpense({
    description: 'Water bill',
    note: 'April',
    amount: 5000,
    createdAt: 100000
}))

store.dispatch(addExpense({
    description: 'Gas bill',
    note: 'April',
    amount: 15000,
    createdAt: 250000
}))

store.dispatch(setTextFilter('w'))

const state = store.getState()
const visible = getVisibleExpenses(state.expenses, state.filters)

console.log(visible, 'vis');

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))
