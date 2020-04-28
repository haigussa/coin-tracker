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

    const totalExpense = expenses.reduce((acc, cur) => {
        return acc += cur.expenseAmount
    }, 0)

    const addExpense = (expenseName, expenseAmount, id) => {
        setExpenses([
            ...expenses,
            { expenseName, expenseAmount, id }
        ])
    }

    const editExpense = (id, expenseName, expenseAmount) => {
        const updatedExpense = expenses.map(exp => {
            if (exp.id === id) {
                return { ...exp, expenseName: expenseName, expenseAmount: parseInt(expenseAmount) }
            }
            return exp
        })
        setExpenses(updatedExpense)
    }

    const deleteExpense = (id) => {
        const expenseAfterDelete = expenses.filter(exp => {
            if (id !== exp.id) {
                return exp;
            }
            return null
        })
        setExpenses(expenseAfterDelete)
    }

    return (
        <ExpenseContext.Provider value={{ expenses, totalExpense, addExpense, editExpense, deleteExpense }}>
            {children}
        </ExpenseContext.Provider>
    )
}

export default ExpenseContextProvider
