import requestIp from "request-ip";
import { sql } from "@vercel/postgres";
import {
  geolocation,
  ipAddress,
} from "@vercel/edge";

export const config = {
  runtime: "edge",
};

export default async function handler(
  req,
  res
) {
  const { city, country } =
    geolocation(req);

  const ip = ipAddress(req);
  const detectedIp =
    requestIp.getClientIp(
      req
    );

  const today = new Date();
  const yyyy =
    today.getFullYear();
  let mm =
    today.getMonth() + 1; // Months start at 0!
  let dd = today.getDate();

  const date = `${dd}-${mm}-${yyyy}`;
  const { rows } =
    await sql`SELECT * from geolocations where time=${
      date || "1/12/2023"
    } AND ipaddress=${
      ip || "1"
    }`;
  if (!rows.length)
    await sql`INSERT INTO geolocations (time, ipaddress, city, country) VALUES (${
      date || "1/12/2023"
    }, ${ip || "1"}, ${
      city || "Cambridge"
    }, ${country || "UK"});`;

  return new Response(
    `<h1>Your location is ${city}</h1>
    <h1>Your country is ${country}</h1>
    <h1>Your ip is ${ip}</h1>
    <h1>Your date is ${dd}-${mm}-${yyyy}</h1>`,
    {
      headers: {
        "content-type":
          "text/html",
      },
    }
  );
}
