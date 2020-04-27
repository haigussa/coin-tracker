import React, { useState, useContext } from 'react'
import { v4 } from 'uuid'
import { IncomeContext } from './components/income/IncomeContext'
import { ExpenseContext } from './components/expense/ExpenseContext'
import StyledAddCoinForm from './components/styles/StyledAddCoinForm'

const AddCoinForm = () => {

    const { addIncome } = useContext(IncomeContext)
    const { addExpense } = useContext(ExpenseContext)
    const [inputName, setInputName] = useState("")
    const [inputAmount, setInputAmount] = useState("")

    const [isIncome, setIsIncome] = useState("")

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
            // setIsIncome(null)
        } else if (isIncome === false) {

            inputName !== "" && inputAmount !== "" &&
                addExpense(inputName, inputAmount, v4())
            setInputName("")
            setInputAmount("")
            // setIsIncome(null)
        }
        else if (isIncome === null) {
            alert("All fields are mandatory")
        }
    }

    return (
        <StyledAddCoinForm>
            <form onSubmit={handleSubmit}>
                <label htmlFor="addCoinForm" />
                <div className="type-selector">
                    <select name="income-expense" id="income-expense" onChange={handleTypeChange} defaultValue={"choose"}>
                        <option value="choose" disabled >Choose</option>
                        <option value="incomeValue">Income</option>
                        <option value="expenseValue">Expense</option>
                    </select>
                </div>
                <div className="input-container">

                    <div className="input-item input-name-container">
                        <label htmlFor="inputName"></label>
                        <input name="inputName" id="inputName" type="text" value={inputName} placeholder="e.g. Electricity" onChange={handleNameChange} />
                    </div>
                    <div className="input-item input-amount-container">
                        <label htmlFor="inputAmount"></label>
                        <input name="inputAmount" id="inputAmount" type="number" value={inputAmount} onChange={handleAmountChange} placeholder="e.g. 200" required />

                    </div>
                </div>

                <button type="submit" onClick={handleSubmit}>{isIncome ? "Add Income": isIncome===false ? "Add Expense" : "Add"}</button>

            </form>

        </StyledAddCoinForm>
    )
}
export default AddCoinForm
