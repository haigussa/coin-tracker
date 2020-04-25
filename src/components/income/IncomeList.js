import React, { useState, useContext } from 'react'
import IncomeItem from './IncomeItem'
import { IncomeContext } from '../income/IncomeContext'
import StyledIncomeList from '../styles/StyledIncomeList'

const IncomeList = () => {
    const {incomes, totalIncome } = useContext(IncomeContext)
    const incomeElements = incomes.map(inc => <IncomeItem key={inc.id} incomeName={inc.incomeName} amount={inc.incomeAmount} />)

    return (
            <StyledIncomeList>
            <h2>IncomeList</h2>
            {incomeElements}
            <p className="total-income">Total Income: {totalIncome}</p>
            </StyledIncomeList>
    )
}

export default IncomeList
