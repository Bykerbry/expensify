import React from 'react'
import { Link } from 'react-router-dom'

const ExpenseListItem = ({id, description, amount, createdAt}) => (
    <div>
        <p>Description: {description}, Amount: {amount}, Created At: {createdAt}</p>
        <Link to={`/edit/${id}`}>
            Edit
        </Link>
    </div>
)


export default ExpenseListItem
