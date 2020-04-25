import React from 'react'
import StyledExpenseItem from '../styles/StyledExpenseItem'

const ExpenseItem = ({ expenseName, expenseAmount }) => {
    return (
        <StyledExpenseItem>
            <div className="expense-name">{expenseName}: </div>
            <div className="expense-amount">{expenseAmount}</div>
        </StyledExpenseItem>
    )
}

export default ExpenseItem
