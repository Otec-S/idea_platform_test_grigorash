import Box from "@mui/material/Box";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";

// TODO: вынести?
type State = {
  [key: string]: boolean;
  "0-stops": boolean;
  "1-stop": boolean;
  "2-stops": boolean;
  "3-stops": boolean;
  "all-flights": boolean;
};

// TODO: вынести?
const options = [
  { label: "Без пересадок", name: "0-stops" },
  { label: "1 пересадка", name: "1-stop" },
  { label: "2 пересадки", name: "2-stops" },
  { label: "3 пересадки", name: "3-stops" },
  { label: "Все рейсы", name: "all-flights" },
];

export default function StopsCheckBoxes() {
  const [state, setState] = useState<State>({
    "0-stops": false,
    "1-stop": false,
    "2-stops": false,
    "3-stops": false,
    "all-flights": false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.checked,
    }));
  };

  return (
    <Box sx={{ display: "flex" }}>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel component="legend">Количество пересадок</FormLabel>
        <FormGroup>
          {options.map((option) => (
            <FormControlLabel
              key={option.name}
              control={
                <Checkbox
                  checked={state[option.name]}
                  onChange={handleChange}
                  name={option.name}
                />
              }
              label={option.label}
            />
          ))}
        </FormGroup>
      </FormControl>
    </Box>
  );
}
