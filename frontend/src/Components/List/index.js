import React, { useContext, useState } from "react";
import { Context } from "../../App/context";
import {
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  Chip,
  TableRow,
  TableCell,
  Paper,
  Toolbar,
  Table,
  TableHead,
  TableBody,
  TableContainer,
  InputAdornment,
  Typography,
} from "@material-ui/core";
import { FaMars, FaVenus, FaSearch } from "react-icons/fa";

export default () => {
  const [filters, setFilters] = useState({ text: "", sexo: "" });
  const [size, setSize] = useState(null);
  const { users } = useContext(Context);

  return (
    <Paper>
      <Toolbar style={{ justifyContent: "space-between" }}>
        <Typography variant="h5">Lista com Filtro</Typography>
        <Typography variant="h6">{size}</Typography>
        <TextField
          placeholder="Procurar..."
          onChange={({ target }) =>
            setFilters({ ...filters, text: target.value })
          }
          value={filters.text}
          InputProps={{
            endAdornment: (
              <InputAdornment>
                <FaSearch />
              </InputAdornment>
            ),
          }}
        />
        <RadioGroup
          onChange={({ target }) =>
            setFilters({ ...filters, sexo: target.value })
          }
          value={filters.sexo}
          style={{ flexDirection: "row" }}
        >
          <FormControlLabel label={<FaMars />} value="M" control={<Radio />} />
          <FormControlLabel label={<FaVenus />} value="F" control={<Radio />} />
          <FormControlLabel label="Todos" value="" control={<Radio />} />
        </RadioGroup>
      </Toolbar>
      <TableContainer>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>Sexo</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users
              .filter((user) =>
                filters.sexo.length
                  ? user.nome.toLowerCase().includes(filters.text) &&
                    user.sexo === filters.sexo
                  : user.nome.includes(filters.text)
              )
              .map((user, indice) => (
                <TableRow key={indice}>
                  <TableCell>{user.nome}</TableCell>
                  <TableCell>
                    <Chip
                      size="small"
                      variant="outlined"
                      icon={user.sexo === "M" ? <FaMars /> : <FaVenus />}
                      label={user.sexo === "M" ? "Homem" : "Mulher"}
                      color={user.sexo === "M" ? "primary" : "secondary"}
                    />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};
