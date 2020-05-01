import React, { useContext } from 'react'
import { ExpenseContext } from './ExpenseContext'
import ExpenseItem from './ExpenseItem'
import StyledList, { ListHeading } from '../styles/StyledList'


const ExpenseList = () => {
    const { expenses, totalExpense, editExpense, deleteExpense} = useContext(ExpenseContext)
    const expenseElements = expenses.map(exp => <ExpenseItem key={exp.id} id={exp.id} expenseName={exp.expenseName} expenseAmount={exp.expenseAmount} editExpense={editExpense} deleteExpense={deleteExpense} />)
    return (
        expenses.length?
        <StyledList containerType="expense">
            <ListHeading>
            <h2>Expense List</h2>
            {expenseElements}
            <p className="total-income">Total Expense: {totalExpense}</p>
            </ListHeading>
        </StyledList>:
        <StyledList>
            <h2>No Expenses</h2>
        </StyledList>
    )
}

export default ExpenseList
