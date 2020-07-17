import React, { useContext } from 'react'
import IncomeItem from './IncomeItem'
import { IncomeContext } from '../income/IncomeContext'
import StyledList, { ListHeading } from '../styles/StyledList'

const IncomeList = () => {
    const { incomes, totalIncome, editIncome, deleteIncome } = useContext(IncomeContext)
    const incomeElements = incomes.map(inc => <IncomeItem key={inc.id} id={inc.id} incomeName={inc.incomeName} incomeAmount={inc.incomeAmount} editIncome={editIncome} deleteIncome={deleteIncome} />)

    return (
        incomes.length ?
            <StyledList containerType="income">
                <ListHeading>
                    <h2>IncomeList</h2>
                    {incomeElements}
                    <p className="total-income">Total Income: {totalIncome}</p>
                </ListHeading>
            </StyledList> :
            <StyledList>
                <h2>No Income</h2>
            </StyledList>
    )

}
export default IncomeList
