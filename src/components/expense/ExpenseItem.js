import React, { useState } from 'react'
import StyledIncomeExpenseItem from '../styles/StyledIncomeExpenseItem'

const ExpenseItem = ({ id, expenseName, expenseAmount, editExpense, deleteExpense }) => {
    const [state, setState] = useState({
        id:id, expenseName:expenseName, expenseAmount:expenseAmount
    })
    const [isEditing, setIsEditing] = useState(false)

    const handleEdit = () => {
        setIsEditing(true)
    }
    const handleChange =(e)=>{
        setState({...state, [e.target.name]:e.target.value})
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
            <StyledIncomeExpenseItem style={{backgroundColor:"#FF5470"}}>
            <div className="item-container">

                <div className="expense-name">{expenseName}</div>
                <div className="expense-amount">{expenseAmount}</div>
            </div>
                <div className="edit-delete-btn">
                    <button onClick={handleEdit}>E</button>
                    <button onClick={handleDelete}>D</button>
                </div>
            </StyledIncomeExpenseItem> :
            <form onSubmit={handleSubmit}>
                <StyledIncomeExpenseItem>
                    <div className="expense-name" ><input name ="expenseName" value={state.expenseName} onChange={handleChange} type="text" /> </div>
                    <div className="expense-amount"><input name ="expenseAmount" value={state.expenseAmount} onChange={handleChange} type="number" /></div>
                    <div>
                        <button type="submit" onClick={handleSubmit}>S</button>
                        <button onClick={handleCancel}>C</button>
                    </div>
                </StyledIncomeExpenseItem>
            </form>

    )
}

export default ExpenseItem
