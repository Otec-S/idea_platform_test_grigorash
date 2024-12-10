import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from "@mui/material";
import Drawer from "@mui/material/Drawer";
import { useState } from "react";

interface Props {
  open: boolean;
  toggleDrawer: (newOpen: boolean) => () => void;
}

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

export default function StopsMenu({ open, toggleDrawer }: Props) {
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
    <Drawer open={open} onClose={toggleDrawer(false)}>
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
    </Drawer>
  );
}
