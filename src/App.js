import React, { useContext } from 'react';
import './App.css';
import IncomeList from './components/income/IncomeList';
import ExpenseList from './components/expense/ExpenseList'
import IncomeContextProvider from './components/income/IncomeContext';
import Balance from './Balance';
import AddCoinForm from './AddCoinForm';
import ExpenseContextProvider from './components/expense/ExpenseContext';


const App = () => {
  return (
    <div className="App">
      <h1>CoinTracker</h1>
      <IncomeContextProvider>
        <ExpenseContextProvider>
          <div className="balance-row">
            <Balance />
          </div>
          <AddCoinForm />
          <div style={{ display: "flex" }}>
            <div className="income-wrapper">
              <IncomeList />
            </div>
            <div className="expense-wrapper">
              <ExpenseList />
            </div>
          </div>
        </ExpenseContextProvider>
      </IncomeContextProvider>
    </div>
  )
}


export default App;
