import React from 'react'
import StyledIncomeItem from '../styles/StyledIncomeItem'

const IncomeItem = ({ incomeName, amount }) => {
    return (
        <StyledIncomeItem>
            <div>{incomeName}: </div>
            <div>{amount}</div>
        </StyledIncomeItem>
    )
}

export default IncomeItem
