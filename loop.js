import { sleep } from 'k6';
import http from 'k6/http';

export let options = {
  vus: 1,         // Virtual User's
  duration: '10s',
};
export default function () {
for (let i = 0; i <= 6; i++){
  let url  = 'https://dsa-organizer-6wz8.vercel.app/';
let response = http.get(url);
  sleep(1);
}
}