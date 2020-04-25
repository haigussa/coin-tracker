import React from 'react'

const incomeItem = ({incomeName, amount}) => {
    return (
        <div>
            <li>
                <span>{incomeName}: </span>
                <span>{amount}</span>
            </li>
            
        </div>
    )
}

export default incomeItem
