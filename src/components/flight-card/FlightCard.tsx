import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import styles from "./FlightCard.module.css";

import FlightLandIcon from "@mui/icons-material/FlightLand";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";

import s7 from "../../assets/s7.png";

export default function FlightCard() {
  return (
    <Card sx={{ maxWidth: 600, padding: 2 }}>
      <img src={s7} alt="Логотип авиакомпании" className={styles.logo} />
      <CardContent>
        <div className={styles.cardInfoWrapper}>
          <div className={styles.cardInfo}>
            <div className={styles.time}>10:00</div>
            <div className={styles.airport}>Moscow</div>
            <div className={styles.date}>12.05.18</div>
          </div>
          <div className={styles.stops}>
            <FlightLandIcon />
            <div>3 пересадки</div>
            <FlightTakeoffIcon />
          </div>

          <div className={styles.cardInfo}>
            <div className={styles.time}>12:00</div>
            <div className={styles.airport}>Berlin</div>
            <div className={styles.date}>12.05.18</div>
          </div>
        </div>
      </CardContent>
      <CardActions>
        <Button variant="contained" className={styles.button}>
          Купить за 21500 руб.
        </Button>
      </CardActions>
    </Card>
  );
}
