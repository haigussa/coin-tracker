import React, { useState } from 'react'
import StyledItem from '../styles/StyledItem'
import { FaPen, FaTrash, FaCheck, FaWindowClose } from 'react-icons/fa'


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
            <StyledItem inputType="incomeRow">
                <div className="item-container">
                    <div>{incomeName}</div>
                    <div>{incomeAmount}</div>
                </div>
                <div className="fa-btn">
                    <button onClick={handleEdit}>
                        <FaPen />
                    </button>
                    <button onClick={handleDelete}>
                        <FaTrash />
                    </button>
                </div>
            </StyledItem>
        ) : (
                <form onSubmit={handleSubmit}>
                    <StyledItem>
                        <input name="incomeName" type="text" value={state.incomeName} onChange={handleChange} />
                        <input name="incomeAmount" type="number" value={state.incomeAmount} onChange={handleChange} />
                        <div className="fa-btn">
                            <button type="submit" onClick={handleSubmit}>
                                <FaCheck />
                            </button>
                            <button onClick={handleCancel}>
                                <FaWindowClose />
                            </button>
                        </div>
                    </StyledItem>
                </form>
            )
    )
}

export default IncomeItem
