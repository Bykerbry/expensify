import React from 'react'
import { connect } from 'react-redux'

const ExpenseList = (props) => (
    <div>
        {
            props.expenses.map((expense, index) => (
                <p key={index}>{expense.description}</p>
            ))
        }
    </div>
)

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses
    }
}

const ConnectedExpenseList = connect(mapStateToProps)(ExpenseList);

export default ConnectedExpenseList