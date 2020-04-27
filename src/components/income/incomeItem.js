import React, { useState } from 'react'
import StyledIncomeItem from '../styles/StyledIncomeItem'

const IncomeItem = ({ incomeName, incomeAmount, editIncome, id, deleteIncome }) => {
    const [state, setState] = useState({ id, incomeName, incomeAmount })
    const [isEditing, setIsEditing] = useState(false)

    const handleEdit = (e) => {
        setIsEditing(true)

    }
    const handleChange = (e) => {
        console.log(e.target.value)

        setState({
            ...state,
            [e.target.name]: e.target.value
        }
        )

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        editIncome(state.id, state.incomeName, state.incomeAmount)
        setIsEditing(false)
    }
    const handleDelete = (e)=>{
        return deleteIncome(id)

    }
const handleCancel = ()=>{
    setIsEditing(false)
}
    return (
        !isEditing ? (
            <StyledIncomeItem>
                <div>{incomeName}: </div>
                <div>{incomeAmount}</div>
                <div>
                    <button onClick={handleEdit}>E</button>
                    <button onClick={handleDelete}>D</button>
                </div>
            </StyledIncomeItem>
        ) : (
                <form onSubmit={handleSubmit}>
                    <StyledIncomeItem>
                        <input name="incomeName" type="text" value={state.incomeName} onChange={handleChange}></input>
                        <input name="incomeAmount" type="number" value={state.incomeAmount} onChange={handleChange}></input>
                        <div>
                            <button type="submit" onClick={handleSubmit}>K</button>
                            <button onClick={handleCancel}>X</button>
                        </div>
                    </StyledIncomeItem>
                </form>
            )
    )
}

export default IncomeItem
