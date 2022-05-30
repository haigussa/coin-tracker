import React, { useState } from "react";
import IncomeList from "./components/income/IncomeList";
import IncomeContextProvider from "./components/income/IncomeContext";
import AddCoinForm from "./AddCoinForm";
import { Box, Button, Card, CssBaseline, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { FormModal } from "./components/FormModal";
import { Add } from "@mui/icons-material";

const App = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <Box
      sx={{
        backgroundColor: "#FBFBFF",
        minHeight: "100vh",
        minWidth: { sx: "100vw", md: "70vw" },
      }}
    >
      <CssBaseline />
      <Container sx={{minHeight:'100vh', display:'flex', flexDirection:'column'}}>
        <Typography variant="h1" align="center" mb={"4rem"} pt={"3rem"}
          sx={{fontSize: { xs: "3rem", md: "5rem", } }} >
          Coin Tracker
        </Typography>
        <IncomeContextProvider>
          <Box component="main">
            {isFormOpen ? (
              <FormModal
                isFormOpen={isFormOpen}
                handleClose={() => setIsFormOpen(false)}
              >
                <AddCoinForm setIsFormOpen={setIsFormOpen} />
              </FormModal>
            ) : (
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Card>
                  <IncomeList />
                </Card>

                <Button
                  variant="contained"
                  onClick={() => setIsFormOpen(true)}
                  sx={{ margin: "15px auto", alignItems: "cen" }}
                  startIcon={<Add />}
                >
                  Add Income or Expense
                </Button>
              </Box>
            )}
          </Box>
        </IncomeContextProvider>
      </Container>
    </Box>
  );
};

export default App;
