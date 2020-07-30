import React, { createContext, useState, useEffect, } from 'react'

export const ExpenseContext = createContext()

const ExpenseContextProvider = ({ children }) => {

    const [expenses, setExpenses] = useState([])
    
    useEffect(() => {
        let localExpense = localStorage.getItem('expense')
        if(localExpense) {
            setExpenses(JSON.parse(localExpense))
        }
    }, [])
    
        useEffect(() => {
           localStorage.setItem('expense', JSON.stringify(expenses))
        }, [expenses])
    
    const totalExpense = expenses.reduce((acc, cur) => {
        return acc += parseInt(cur.expenseAmount)
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
                return {
                    ...exp,
                    expenseName: expenseName,
                    expenseAmount: parseInt(expenseAmount)
                }
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
        <ExpenseContext.Provider
            value={{
                expenses,
                totalExpense,
                addExpense,
                editExpense,
                deleteExpense
            }}
        >
            {children}
        </ExpenseContext.Provider>
    )
}

export default ExpenseContextProvider
