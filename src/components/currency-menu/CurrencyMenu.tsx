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
import { useCurrency } from "../../shared/hooks/useCurrency";

interface Props {
  open: boolean;
  toggleDrawer: (newOpen: boolean) => () => void;
}

export default function CurrencyMenu({ open, toggleDrawer }: Props) {
  const { currency, setCurrency } = useCurrency();
  const handleCurrencyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrency(event.target.value);
  };

  return (
    <>
      <Drawer open={open} anchor="right" onClose={toggleDrawer(false)}>
        <Box sx={{ display: "flex", width: "15rem" }}>
          <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
            <FormLabel id="demo-radio-buttons-group-label">ВАЛЮТА</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              value={currency}
              onChange={handleCurrencyChange}
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
