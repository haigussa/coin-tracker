import React, { useState } from 'react'
import StyledItem from '../styles/StyledItem'
import { FaPen, FaTrash, FaCheck, FaWindowClose } from 'react-icons/fa'

const ExpenseItem = ({ id, expenseName, expenseAmount, editExpense, deleteExpense }) => {
    const [state, setState] = useState({
        id: id, expenseName: expenseName, expenseAmount: expenseAmount
    })
    const [isEditing, setIsEditing] = useState(true)

    const handleEdit = () => {
        setIsEditing(true)
    }
    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
        console.log(state)
    }

    const handleDelete = () => {
        return deleteExpense(id)
    }

    const handleCancel = () => {
        setIsEditing(false)
    }

    const handleSubmit = e => {
        e.preventDefault()
        editExpense(state.id, state.expenseName, state.expenseAmount)
        setIsEditing(false)
    }

    return (
        !isEditing ?
            <StyledItem >
                <div className="item-container">

                    <div className="expense-name">{expenseName}</div>
                    <div className="expense-amount">{expenseAmount}</div>
                </div>
                <div className="fa-btn">
                    <button onClick={handleEdit}><FaPen /></button>
                    <button onClick={handleDelete}><FaTrash /></button>
                </div>
            </StyledItem > :
            <form onSubmit={handleSubmit}>
                <StyledItem >
                    <div className="expense-name" ><input name="expenseName" value={state.expenseName} onChange={handleChange} type="text" /> </div>
                    <div className="expense-amount"><input name="expenseAmount" value={state.expenseAmount} onChange={handleChange} type="number" autoFocus/></div>
                    <div className="fa-btn">
                        <button type="submit" onClick={handleSubmit}><FaCheck/></button>
                        <button onClick={handleCancel}><FaWindowClose/></button>
                    </div>
                </StyledItem>
            </form>

    )
}

export default ExpenseItem
