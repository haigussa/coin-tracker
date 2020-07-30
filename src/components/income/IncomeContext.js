import React, { createContext, useState, useEffect } from 'react'

export const IncomeContext = createContext()

const IncomeContextProvider = ({ children }) => {

    const [incomes, setIncomes] = useState([])

useEffect(() => {
    let localIncome = localStorage.getItem('income')
    if(localIncome) {
        setIncomes(JSON.parse(localIncome))
    }
}, [])

    useEffect(() => {
       localStorage.setItem('income', JSON.stringify(incomes))
    }, [incomes])

    const totalIncome = incomes.reduce((acc, cur) => {
        return acc += cur.incomeAmount;
    }, 0)

    const addIncome = (incomeName, incomeAmount, id) => {
        setIncomes([
            ...incomes,
            {
                incomeName,
                incomeAmount,
                id
            }
        ])
    }

    const editIncome = (id, entryName, entryAmount) => {
        const updatedIncome = incomes.map(inc => {
            if (id === inc.id) {
                return {
                    ...inc,
                    incomeName: entryName,
                    incomeAmount: parseInt(entryAmount)
                }
            } else {
                return inc
            }
        })
        setIncomes(updatedIncome)
    }

    const deleteIncome = (id) => {
        const IncomeAfterDelete = incomes.filter(inc => {
            if (id !== inc.id) {
                return inc
            }
            return null;
        })
        setIncomes(IncomeAfterDelete)
    }

    return (
        <IncomeContext.Provider
            value={{
                incomes,
                totalIncome,
                addIncome,
                editIncome,
                deleteIncome
            }}
        >
            {children}
        </IncomeContext.Provider>
    )
}

export default IncomeContextProvider
