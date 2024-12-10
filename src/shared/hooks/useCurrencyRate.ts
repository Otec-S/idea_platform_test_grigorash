import { useEffect, useState } from "react";
import { CURRENCY_URL } from "../constants";

export function useCurrencyRate(currencyCode: string) {
  const [rate, setRate] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`${CURRENCY_URL}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Ошибка получения курсов валют");
        }
        return response.json();
      })
      .then((data) => {
        const currencyRate = data.Valute[currencyCode].Value;
        setRate(currencyRate);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [currencyCode]);

  return { rate, loading, error };
}
