import React, { createContext, useState } from 'react'
import { v4 } from 'uuid'

export const ExpenseContext = createContext()

const ExpenseContextProvider = ({ children }) => {

    const [expenses, setExpenses] = useState([
        { id: v4(), expenseName: "Coffee", expenseAmount: 200 },
        { id: v4(), expenseName: "Plane", expenseAmount: 100 },
        { id: v4(), expenseName: "Car", expenseAmount: 300 },
        { id: v4(), expenseName: "Rent", expenseAmount: 600 }
    ])

    const totalExpense = expenses.reduce((acc, curr) => {
        return acc += curr.expenseAmount
    }, 0)

    const addExpense = (expenseName, expenseAmount, id)=>{
        setExpenses([
            ...expenses,
            {expenseName, expenseAmount, id}
        ])
    }

    return (
        <ExpenseContext.Provider value={{expenses, totalExpense, addExpense}}>
            {children}
        </ExpenseContext.Provider>
    )
}

export default ExpenseContextProvider
