import { Box, Button, InputBase, Paper } from "@mui/material";
import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";

const IncomeItem = ({ incomeName, incomeAmount, editIncome, id, deleteIncome, }) => {

  const [state, setState] = useState({ id, incomeName, incomeAmount });
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editIncome(state.id, state.incomeName, state.incomeAmount);
    setIsEditing(false);
  };

  const handleDelete = () => {
    console.log(id)
    return deleteIncome(id);
  };

  const handleCancel = (e) => {
    setIsEditing(false);
  };

  return !isEditing ? (
    <Box sx={{ display: "flex", alignItems: "center", margin: '3px auto', backgroundColor: incomeAmount>0 ?'#c8e6c9':'#ffcdd2'}}>
      <Paper
        sx={{
          flex: 1,
          padding: 2,
          display: "flex",
          justifyContent: "space-between",
          margin: 2,
          backgroundColor: incomeAmount > 0 ? "#c8e6c9" : "#ffcdd2",
        }}
      >
        <Box variant="span">{incomeName}</Box>
        <Box variant="span">{incomeAmount}</Box>
      </Paper>

      <Box sx={{  }}>
        <Button onClick={handleEdit}>
          <EditIcon />
        </Button>
        <Button onClick={handleDelete}>
          <DeleteIcon />
        </Button>
      </Box>

    </Box>
  ) : (
    <Box variant="form" onSubmit={handleSubmit}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "#eaeaea",
          padding: '10px',
          margin: '20px auto',
          border: '1px solid red'
          
        }}
      >
        <InputBase
        flex='3'
          name="incomeName"
          type="text"
          value={state.incomeName}
          onChange={handleChange}
        />
        <InputBase
          name="incomeAmount"
          type="number"
          value={state.incomeAmount}
          onChange={handleChange}
        />
        <Box >
          <Button type="submit" onClick={handleSubmit}>
            <CheckIcon />
          </Button>
          <Button onClick={handleCancel}>
            <CloseIcon />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default IncomeItem;
