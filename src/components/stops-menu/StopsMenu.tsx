import Drawer from "@mui/material/Drawer";
import StopsCheckBoxes from "../stops-check-boxes/StopsCheckBoxes";

interface Props {
  open: boolean;
  toggleDrawer: (newOpen: boolean) => () => void;
}

export default function StopsMenu({ open, toggleDrawer }: Props) {
  return (
    <Drawer open={open} onClose={toggleDrawer(false)}>
      <StopsCheckBoxes />
    </Drawer>
  );
}
