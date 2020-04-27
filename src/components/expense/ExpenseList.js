import React, { useContext } from 'react'
import { ExpenseContext } from './ExpenseContext'
import ExpenseItem from './ExpenseItem'
import StyledExpenseList from '../styles/StyledExpenseList'

const ExpenseList = () => {
    const { expenses, totalExpense} = useContext(ExpenseContext)
    const expenseElements = expenses.map(exp => <ExpenseItem key={exp.id} expenseName={exp.expenseName} expenseAmount={exp.expenseAmount} />)
    return (
        <StyledExpenseList>
            <h2>Expense List</h2>
            {expenseElements}
            <p className="total-income">Total Expense: {totalExpense}</p>
        </StyledExpenseList>
    )
}

export default ExpenseList
