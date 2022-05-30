import React, { useContext } from "react";
import IncomeItem from "./IncomeItem";
import { IncomeContext } from "../income/IncomeContext";
import { Paper, Typography } from "@mui/material";

const IncomeList = () => {
  const { incomes, totalIncome, editIncome, deleteIncome } =
    useContext(IncomeContext);

  const incomeElements = incomes.map((inc) => (
    <IncomeItem
      key={inc.id}
      id={inc.id}
      incomeName={inc.incomeName}
      incomeAmount={inc.incomeAmount}
      editIncome={editIncome}
      deleteIncome={deleteIncome}
    />
  ));

  return incomes.length ? (
    <Paper sx={{ padding: "2rem" }}>
      <Typography
        variant="h4"
        align="center"
        borderRadius
        sx={{
          color: "black",
          textAlign: "center",
          margin: "0 auto 2rem",
          maxWidth: "fit-content",
          padding: "1rem",
          backgroundColor: totalIncome > 0 ? "#c8e6c9" : "#ffcdd2",
        }}
      >
        Balance: {totalIncome}
      </Typography>
      {incomeElements}
    </Paper>
  ) : (
    ""
  );
};
export default IncomeList;
