import React, { useState } from 'react'
import StyledIncomeExpenseItem from '../styles/StyledIncomeExpenseItem'

const IncomeItem = ({ incomeName, incomeAmount, editIncome, id, deleteIncome }) => {
    const [state, setState] = useState({ id, incomeName, incomeAmount })
    const [isEditing, setIsEditing] = useState(false)

    const handleEdit = () => {
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
    const handleDelete = () => {
        return deleteIncome(id)
    }
    const handleCancel = () => {
        setIsEditing(false)
    }
    return (
        !isEditing ? (
            <StyledIncomeExpenseItem>
                <div className="item-container">
                    <div>{incomeName}</div>
                    <div>{incomeAmount}</div>
                </div>
                <div className="edit-delete-btn">
                    <button onClick={handleEdit}>E</button>
                    <button onClick={handleDelete}>D</button>
                </div>
            </StyledIncomeExpenseItem>
        ) : (
                <form onSubmit={handleSubmit}>
                    <StyledIncomeExpenseItem>
                        <input name="incomeName" type="text" value={state.incomeName} onChange={handleChange} />
                        <input name="incomeAmount" type="number" value={state.incomeAmount} onChange={handleChange} />
                        <div>
                            <button type="submit" onClick={handleSubmit}>K</button>
                            <button onClick={handleCancel}>X</button>
                        </div>
                    </StyledIncomeExpenseItem>
                </form>
            )
    )
}

export default IncomeItem
