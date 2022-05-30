import React, { useState, useContext } from "react";
import { v4 } from "uuid";
import { IncomeContext } from "./components/income/IncomeContext";
import { Box, Button, MenuItem, TextField } from "@mui/material";
import { green, red } from "@mui/material/colors";
import { Add, Remove } from "@mui/icons-material";


const AddCoinForm = ({ setIsFormOpen }) => {
  const { addIncome } = useContext(IncomeContext);
  const [inputName, setInputName] = useState("");
  const [inputAmount, setInputAmount] = useState("");

  const [type, setType] = useState("Income");

  const handleNameChange = (e) => {
    setInputName(e.target.value);
  };
  const handleAmountChange = (e) => {
    setInputAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputAmount || !inputName) return;

    if (type === "Income") {
      addIncome(inputName, parseInt(inputAmount), v4());
      setInputName("");
      setInputAmount("");
    } else if (type === "Expense") {
      addIncome(inputName, -1 * parseInt(inputAmount), v4());
      setInputName("");
      setInputAmount("");
    } else if (type === null) {
      alert("Please choose Income or Expense");
    }
    setIsFormOpen(false);
  };

  return (
    <Box sx={{  borderRadius: 5, padding:5}}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        validate
        autoComplete="off"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "100%", maxWidth: 600 },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          // backgroundColor: "#666666",p:5
         
         
        }}
      >
        <TextField
          id="income-expense"
          select
          value={type}
          label="Type" //   onChange={handleTypeChange}
          onChange={(e) => setType(e.target.value)}
          required
        >
          <MenuItem value={"Income"}>Income</MenuItem>
          <MenuItem value={"Expense"}>Expense</MenuItem>
        </TextField>

        <TextField
          required
          id="outlined-required"
          label="Name"
          placeholder="e.g. Electricity"
          value={inputName}
          onChange={handleNameChange}
        />
        <TextField
          required
          id="outlined-required"
          label="Amount"
          placeholder="e.g. 200"
          value={inputAmount}
          onChange={handleAmountChange}
          type="number"
        />

        <Button
          variant="contained"
          type="submit"
          onClick={handleSubmit}
          startIcon={type === "Income" ? <Add/> : <Remove/>}
          sx={{
            mt: 3,
            backgroundColor: type === "Income" ? "#c8e6c9" : "#ffcdd2",
            color:'inherit', 
            '&:hover':{
              backgroundColor: type==='Income'? green[300]: red[300]
            }
          }}
        >
          {type === "Income"
            ? "Add Income"
            : type === "Expense"
            ? "Add Expense"
            : "Add"}
        </Button>
      </Box>
    </Box>
  );
};
export default AddCoinForm;
