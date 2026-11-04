import axios from "axios";

export async function fetchExchangeRate() {
  const response = await axios.get(
    "https://api.frankfurter.dev/v2/rate/USD/INR",
  );
  return response.data.rate;
}
export function currencyToINR(amount, rate) {
  return amount * rate;
}
