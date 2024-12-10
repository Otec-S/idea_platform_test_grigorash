export interface IFlight {
  origin: string;
  origin_name: string;
  destination: string;
  destination_name: string;
  departure_date: string;
  departure_time: string;
  arrival_date: string;
  arrival_time: string;
  carrier: "S7" | "TK" | "BA" | "SU";
  stops: 0 | 1 | 2 | 3;
  price: number;
}
