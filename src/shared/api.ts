// interface Props {
//   email: string;
//   password: string;
// }
export const rateUSD = async () => {
  return await fetch("https://api.coingate.com/v2/rates/merchant/USD/RUB", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      console.log(res);
      // return res.json();
    })
    .catch((error) => {
      console.error(error);
    });
};
