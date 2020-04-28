import React, { createContext, useState } from 'react'
import { v4 } from 'uuid'

export const IncomeContext = createContext()

const IncomeContextProvider = ({ children }) => {

    const [incomes, setIncomes] = useState([
        { id: v4(), incomeName: "Salary", incomeAmount: 2200 },
        { id: v4(), incomeName: "Tip", incomeAmount: 200 },
        { id: v4(), incomeName: "Bonus", incomeAmount: 500 },
        { id: v4(), incomeName: "Garage Sale", incomeAmount: 600 }
    ])

    const totalIncome = incomes.reduce((acc, cur) => {
        return acc += cur.incomeAmount;
    }, 0)
    
    const addIncome = (incomeName, incomeAmount, id) => {
        setIncomes([
            ...incomes,
            { incomeName, incomeAmount, id }
        ])
    }

    const editIncome = (id, entryName, entryAmount) => {
        const updatedIncome = incomes.map(inc => {
            if (id === inc.id) {
                return {...inc, incomeName: entryName, incomeAmount: parseInt(entryAmount) }
            } else {
                return inc
            }
        })
        setIncomes(updatedIncome)
    }

  const deleteIncome=(id)=>{
      const IncomeAfterDelete = incomes.filter(inc=>{
          if(id!==inc.id){
              return inc
          }
          return null;
      })
      setIncomes(IncomeAfterDelete)
  }

    return (
        <IncomeContext.Provider value={{ incomes, totalIncome, addIncome, editIncome, deleteIncome }}>
            {children}
        </IncomeContext.Provider>
    )
}

export default IncomeContextProvider
