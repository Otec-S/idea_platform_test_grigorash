import {
  Box,
  // Checkbox,
  // FormControl,
  // FormControlLabel,
  // FormGroup,
  // FormLabel,
} from "@mui/material";
import Drawer from "@mui/material/Drawer";
import { useCurrencyRate } from "../../shared/hooks/useCurrencyRate";
// import { useStops } from "../../shared/hooks/useStops";

interface Props {
  open: boolean;
  toggleDrawer: (newOpen: boolean) => () => void;
}

// const options = [
//   { label: "RUB", name: "rub" },
//   { label: "USD", name: "usd" },
//   { label: "EUR", name: "eur" },
// ];

export default function StopsMenu({ open, toggleDrawer }: Props) {
  // const { state, setState } = useStops();

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setState((prevState) => ({
  //     ...prevState,
  //     [event.target.name]: event.target.checked,
  //   }));
  // };

  const { rate: usdRate, loading, error } = useCurrencyRate("USD");
  const { rate: eurRate } = useCurrencyRate("EUR");

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Ошибка: {error}</div>;
  }

  return (
    <>
      <Drawer open={open} anchor="right" onClose={toggleDrawer(false)}>
        <Box sx={{ display: "flex" }}>
          <div>{usdRate}</div>
          <div>{eurRate}</div>
          {/* <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
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
          </FormControl> */}
        </Box>
      </Drawer>
    </>
  );
}
