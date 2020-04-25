import React, { useContext } from 'react'
import { ExpenseContext } from './ExpenseContext'
import ExpenseItem from './ExpenseItem'

const ExpenseList = () => {
    const { expenses, totalExpense, addExpense } = useContext(ExpenseContext)
    const expenseElements = expenses.map(exp => <ExpenseItem key={exp.id} expenseName={exp.expenseName} expenseAmount={exp.expenseAmount} />)
    return (

        <ul>
            <h2>Expense List</h2>
            {expenseElements}
            <p className="total-income">Total Expense: {totalExpense}</p>

        </ul>

    )
}

export default ExpenseList
