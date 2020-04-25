import React, { createContext, useState } from 'react'
import {v4} from 'uuid'

export const  IncomeContext = createContext()

const IncomeContextProvider = ({ children }) => {

    const [incomes, setIncomes] = useState([
        { id: v4(), incomeName: "Salary", incomeAmount: 2200 },
        { id: v4(), incomeName: "Tip", incomeAmount: 200 },
        { id: v4(), incomeName: "Bonus", incomeAmount: 500 },
        { id: v4(), incomeName: "Garage Sale", incomeAmount: 600 }
    ])

    const totalIncome = incomes.reduce((acc, curr) => {
        return acc += curr.incomeAmount;
    }, 0)
    const addIncome = (incomeName, incomeAmount, id)=>{
        setIncomes([
            ...incomes,
            { incomeName, incomeAmount, id}

        ])
    }

    return (
        <IncomeContext.Provider value={{incomes, totalIncome, addIncome}}>
            {children}
        </IncomeContext.Provider>
    )
}

export default IncomeContextProvider
