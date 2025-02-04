import http from "k6/http";
import { sleep } from "k6";

export const options = {
  vus: 30,
  duration: "10s",
};

export default function () {
  http.get("http://localhost:3000/api/harga");
  sleep(1);
}
