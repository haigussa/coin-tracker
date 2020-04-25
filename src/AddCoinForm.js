import React, { useState, useContext } from 'react'
import { v4 } from 'uuid'
import { IncomeContext } from './components/income/IncomeContext'
import { ExpenseContext } from './components/expense/ExpenseContext'

const AddCoinForm = () => {

    const { addIncome } = useContext(IncomeContext)
    const { addExpense } = useContext(ExpenseContext)
    const [inputName, setInputName] = useState("")
    const [inputAmount, setInputAmount] = useState("")

    const [isIncome, setIsIncome] = useState(null)


    const handleTypeChange = e => {
        if (e.target.value === "incomeValue") {
            setIsIncome(true)
        } else if (e.target.value === "expenseValue") {
            setIsIncome(false)
        } else {
            // setIsIncome(null)
        }
    }

    const handleNameChange = e => {
        setInputName(e.target.value)
    }
    const handleAmountChange = e => {
        setInputAmount(parseInt(e.target.value))
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (isIncome === true) {
            inputName !== "" && inputAmount !== "" &&
                addIncome(inputName, inputAmount, v4())
            setInputName("")
            setInputAmount("")
            setIsIncome(null)
        } else if (isIncome === false) {
           
            inputName !== "" && inputAmount !== "" &&
                addExpense(inputName, inputAmount, v4())
                setInputName("")
            setInputAmount("")
            setIsIncome(null)
        }
        else if (isIncome === null) {
            alert("All fields are mandatory")
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="addCoinForm" />
                <div className="type-selector">
                    <select name="income-expense" id="income-expense" onChange={handleTypeChange}>
                        <option value="choose" defaultValue>Choose</option>
                        <option value="incomeValue">Income</option>
                        <option value="expenseValue">Expense</option>
                    </select>
                </div>
                <>
                    <label htmlFor="inputName"></label>
                    <input name="inputName" id="inputName" type="text" value={inputName} placeholder="text" onChange={handleNameChange} />
                </>
                <>
                    <label htmlFor="inputAmount"></label>
                    <input name="inputAmount" id="inputAmount" type="number" value={inputAmount} onChange={handleAmountChange} placeholder="200" required />

                </>

                <button type="submit" onClick={handleSubmit}>Add</button>

            </form>
            <h3>Income Amount: {inputAmount}</h3>
            <h3>Income Name: {inputName}</h3>
        </>
    )
}
export default AddCoinForm
