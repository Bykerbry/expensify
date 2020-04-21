import React from 'react'
import { connect } from 'react-redux'
import { removeExpense } from '../actions/expenses'

const ExpenseListItem = ({id, description, amount, createdAt, dispatch}) => (
    <div>
        <p>Description: {description}, Amount: {amount}, Created At: {createdAt}</p>
        <button onClick={() => dispatch(removeExpense({ id }))}>
            Remove
        </button>
    </div>
)

const connectedExpenseListItem = connect()(ExpenseListItem)

export default connectedExpenseListItem


