import Box from "@mui/material/Box";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";

export default function StopsCheckBoxes() {
  const [state, setState] = useState({
    "0-stops": false,
    "1-stop": false,
    "2-stops": false,
    "3-stops": false,
    "all-flights": false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  // const { 0, 1, 2, 3 } = state;
  // const error = [gilad, jason, antoine].filter((v) => v).length !== 2;

  return (
    <Box sx={{ display: "flex" }}>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel component="legend">Количество пересадок</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={state["0-stops"]}
                onChange={handleChange}
                name="0-stops"
              />
            }
            label="Без пересадок"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state["1-stop"]}
                onChange={handleChange}
                name="1-stop"
              />
            }
            label="1 пересадка"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state["2-stops"]}
                onChange={handleChange}
                name="2-stops"
              />
            }
            label="2 пересадки"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state["3-stops"]}
                onChange={handleChange}
                name="3-stops"
              />
            }
            label="3 пересадки"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state["all-flights"]}
                onChange={handleChange}
                name="all-flights"
              />
            }
            label="Все рейсы"
          />
        </FormGroup>
      </FormControl>
      {/* <FormControl
        required
        error={error}
        component="fieldset"
        sx={{ m: 3 }}
        variant="standard"
      > */}
    </Box>
  );
}
