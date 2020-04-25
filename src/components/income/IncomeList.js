import React, { useState, useContext } from 'react'
import IncomeItem from './incomeItem'
import { IncomeContext } from '../income/IncomeContext'

const IncomeList = () => {
    const {incomes, totalIncome } = useContext(IncomeContext)
    const incomeElements = incomes.map(inc => <IncomeItem key={inc.id} incomeName={inc.incomeName} amount={inc.incomeAmount} />)

    return (
        <ul>
            <h2>IncomeList</h2>
            {incomeElements}
            <p className="total-income">Total Income: {totalIncome}</p>

        </ul>
    )
}

export default IncomeList
