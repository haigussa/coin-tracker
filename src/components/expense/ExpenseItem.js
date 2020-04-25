import React from 'react'

const ExpenseItem = ({expenseName, expenseAmount}) => {
    return (
        <li>
            <span className="expense-name">{expenseName}: </span>
            <span className="expense-amount">{expenseAmount}</span>
          
        </li>
    )
}

export default ExpenseItem
