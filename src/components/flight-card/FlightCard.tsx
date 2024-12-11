import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import styles from "./FlightCard.module.css";

import FlightLandIcon from "@mui/icons-material/FlightLand";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";

import S7Image from "../../assets/s7.png";
import BAImage from "../../assets/BA.png";
import SUImage from "../../assets/SU.png";
import TKImage from "../../assets/TK.png";

import { FC } from "react";
import { IFlight } from "../../shared/types";
import { useCurrency } from "../../shared/hooks/useCurrency";

const carrierLogos: { [key: string]: string } = {
  S7: S7Image,
  BA: BAImage,
  SU: SUImage,
  TK: TKImage,
};

const stopsNumber: { [key: number]: string } = {
  0: "Прямой рейс",
  1: "1 пересадка",
  2: "2 пересадки",
  3: "3 пересадки",
};

const FlightCard: FC<IFlight> = ({
  origin,
  origin_name,
  destination,
  destination_name,
  departure_date,
  departure_time,
  arrival_date,
  arrival_time,
  carrier,
  stops,
  price,
}) => {
  const logoSrc = carrier ? carrierLogos[carrier] : null;
  const stopsText = stopsNumber[stops];
  const { currency } = useCurrency();

  return (
    <Card sx={{ width: 500, padding: 3 }}>
      {logoSrc && (
        <div className={styles.logoWrapper}>
          <img
            src={logoSrc}
            alt={`Логотип авиакомпании ${carrier}`}
            className={styles.logo}
          />
        </div>
      )}
      <CardContent>
        <div className={styles.cardInfoWrapper}>
          <div className={styles.cardInfo}>
            <div className={styles.time}>{departure_time}</div>
            <div className={styles.airport}>
              {origin}, {origin_name}
            </div>
            <div className={styles.date}>{departure_date}</div>
          </div>
          <div className={styles.stops}>
            <FlightLandIcon />
            <div>{stopsText}</div>
            <FlightTakeoffIcon />
          </div>

          <div className={styles.cardInfo}>
            <div className={styles.time}>{arrival_time}</div>
            <div className={styles.airport}>
              {destination}, {destination_name}
            </div>
            <div className={styles.date}>{arrival_date}</div>
          </div>
        </div>
      </CardContent>
      <CardActions>
        <Button variant="contained" className={styles.button}>
          Купить за {price} {currency}
        </Button>
      </CardActions>
    </Card>
  );
};

export default FlightCard;
