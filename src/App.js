import React from 'react';
import StyledApp from './components/styles/StyledApp.js';
import IncomeList from './components/income/IncomeList';
import ExpenseList from './components/expense/ExpenseList'
import IncomeContextProvider from './components/income/IncomeContext';
import Balance from './Balance';
import AddCoinForm from './AddCoinForm';
import ExpenseContextProvider from './components/expense/ExpenseContext';
import StyledMain from './components/styles/StyledMain.js';


const App = () => {
  return (
    <StyledApp className="App">
      <h1>CoinTracker</h1>
      <IncomeContextProvider>
        <ExpenseContextProvider>
          <AddCoinForm />
          <Balance />
          <StyledMain>
            <div className="income-wrapper">
              <IncomeList />
            </div>
            <div className="expense-wrapper">
              <ExpenseList />
            </div>
          </StyledMain>
        </ExpenseContextProvider>
      </IncomeContextProvider>
    </StyledApp>
  )
}
export default App;
