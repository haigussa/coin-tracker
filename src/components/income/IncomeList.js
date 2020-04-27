import React, { useContext } from 'react'
import IncomeItem from './IncomeItem'
import { IncomeContext } from '../income/IncomeContext'
import StyledIncomeList from '../styles/StyledIncomeList'

const IncomeList = () => {
    const { incomes, totalIncome, editIncome, deleteIncome } = useContext(IncomeContext)
    const incomeElements = incomes.map(inc => <IncomeItem key={inc.id} id={inc.id} incomeName={inc.incomeName} incomeAmount={inc.incomeAmount} editIncome={editIncome} deleteIncome={deleteIncome} />)

    return (
        <StyledIncomeList>
            <h2>IncomeList</h2>
            {incomeElements}
            <p className="total-income">Total Income: {totalIncome}</p>
        </StyledIncomeList>
    )
}

export default IncomeList
