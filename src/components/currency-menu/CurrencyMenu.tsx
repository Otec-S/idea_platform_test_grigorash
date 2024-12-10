import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import Drawer from "@mui/material/Drawer";
import { CURRENCY_OPTIONS } from "../../shared/constants";

interface Props {
  open: boolean;
  toggleDrawer: (newOpen: boolean) => () => void;
}

export default function StopsMenu({ open, toggleDrawer }: Props) {
  return (
    <>
      <Drawer open={open} anchor="right" onClose={toggleDrawer(false)}>
        <Box sx={{ display: "flex" }}>
          <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
            <FormLabel id="demo-radio-buttons-group-label">ВАЛЮТА</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="RUB"
              name="radio-buttons-group"
            >
              {CURRENCY_OPTIONS.map((option) => (
                <FormControlLabel
                  key={option.value}
                  value={option.value}
                  control={<Radio />}
                  label={option.label}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </Box>
      </Drawer>
    </>
  );
}
