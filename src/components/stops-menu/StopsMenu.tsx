import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from "@mui/material";
import Drawer from "@mui/material/Drawer";
import { useStops } from "../../shared/hooks/useStops";
import { FLIGHT_OPTIONS } from "../../shared/constants";

interface Props {
  open: boolean;
  toggleDrawer: (newOpen: boolean) => () => void;
}

export default function StopsMenu({ open, toggleDrawer }: Props) {
  const { state, setState } = useStops();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.checked,
    }));
  };

  return (
    <>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <Box sx={{ display: "flex" }}>
          <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
            <FormLabel component="legend">Количество пересадок</FormLabel>
            <FormGroup>
              {FLIGHT_OPTIONS.map((option) => (
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
    </>
  );
}
