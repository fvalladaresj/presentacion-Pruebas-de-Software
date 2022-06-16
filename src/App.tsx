import React, { useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

export interface IContact {
  name: string;
  lastname1: string;
  lastname2: string;
  email: string;
  phone: string;
}

const App = () => {
  const theme = createTheme();

  const [contactList, setContactList] = React.useState<IContact[]>([
    {
      name: "nombre",
      lastname1: "apellido 1",
      lastname2: "apellido 2",
      email: "email@gmail.com",
      phone: "123456789",
    },
    {
      name: "nombre",
      lastname1: "apellido 1",
      lastname2: "apellido 2",
      email: "email@gmail.com",
      phone: "123456789",
    },
    {
      name: "nombre",
      lastname1: "apellido 1",
      lastname2: "apellido 2",
      email: "email@gmail.com",
      phone: "123456789",
    },
    {
      name: "nombre",
      lastname1: "apellido 1",
      lastname2: "apellido 2",
      email: "email@gmail.com",
      phone: "123456789",
    },
    {
      name: "nombre",
      lastname1: "apellido 1",
      lastname2: "apellido 2",
      email: "email@gmail.com",
      phone: "123456789",
    },
    {
      name: "nombre",
      lastname1: "apellido 1",
      lastname2: "apellido 2",
      email: "email@gmail.com",
      phone: "123456789",
    },
    {
      name: "nombre",
      lastname1: "apellido 1",
      lastname2: "apellido 2",
      email: "email@gmail.com",
      phone: "123456789",
    },
    {
      name: "nombre",
      lastname1: "apellido 1",
      lastname2: "apellido 2",
      email: "email@gmail.com",
      phone: "123456789",
    },
    {
      name: "nombre",
      lastname1: "apellido 1",
      lastname2: "apellido 2",
      email: "email@gmail.com",
      phone: "123456789",
    },
    {
      name: "nombre",
      lastname1: "apellido 1",
      lastname2: "apellido 2",
      email: "email@gmail.com",
      phone: "123456789",
    },
    {
      name: "nombre",
      lastname1: "apellido 1",
      lastname2: "apellido 2",
      email: "email@gmail.com",
      phone: "123456789",
    },
    {
      name: "nombre",
      lastname1: "apellido 1",
      lastname2: "apellido 2",
      email: "email@gmail.com",
      phone: "123456789",
    },
    {
      name: "nombre",
      lastname1: "apellido 1",
      lastname2: "apellido 2",
      email: "email@gmail.com",
      phone: "123456789",
    },
    {
      name: "nombre",
      lastname1: "apellido 1",
      lastname2: "apellido 2",
      email: "email@gmail.com",
      phone: "123456789",
    },
    {
      name: "nombre",
      lastname1: "apellido 1",
      lastname2: "apellido 2",
      email: "email@gmail.com",
      phone: "123456789",
    },
    {
      name: "nombre",
      lastname1: "apellido 1",
      lastname2: "apellido 2",
      email: "email@gmail.com",
      phone: "123456789",
    },
  ]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: "relative",
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Lista de contactos
          </Typography>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="lg" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <TableContainer sx={{ maxHeight: 400 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell>Nombre</TableCell>
                  <TableCell align="right">Primer apellido</TableCell>
                  <TableCell align="right">Segundo apellido</TableCell>
                  <TableCell align="right">Email</TableCell>
                  <TableCell align="right">Teléfono</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {contactList.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.lastname1}</TableCell>
                    <TableCell align="right">{row.lastname2}</TableCell>
                    <TableCell align="right">{row.email}</TableCell>
                    <TableCell align="right">{row.phone}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default App;
