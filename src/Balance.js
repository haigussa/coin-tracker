import React, { useContext } from 'react'
import { IncomeContext } from './components/income/IncomeContext'
import { ExpenseContext } from './components/expense/ExpenseContext'
import StyledBalance from './components/styles/StyledBalance'

const Balance = () => {
    const { totalIncome } = useContext(IncomeContext)
    const { totalExpense } = useContext(ExpenseContext)
    const totalBalance = (totalIncome - totalExpense)
    return (
        <StyledBalance spentIndicator={(totalExpense / totalIncome) * 100} balanceStat={totalBalance}>
            {
                totalBalance !== 0 ?
                    <h2> Balance: <span className="balance-amount" >
                        €{totalBalance.toLocaleString()}
                    </span>
                    </h2>
                    : <h2>Please Add Income or Expense</h2>
            }
            <div className="balance-wrapper" >
                <div className="balance">
                </div>
            </div>
        </StyledBalance>

    )
}

export default Balance
