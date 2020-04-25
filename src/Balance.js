import React, { useContext } from 'react'
import { IncomeContext } from './components/income/IncomeContext'
import { ExpenseContext } from './components/expense/ExpenseContext'


const Balance = () => {
    const { totalIncome } = useContext(IncomeContext)
    const { totalExpense } = useContext(ExpenseContext)
    return (
        <div>
            <h2> Balance: €{(totalIncome - totalExpense).toLocaleString()} </h2>
        </div>
    )
}

export default Balance
