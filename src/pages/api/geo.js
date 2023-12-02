import requestIp from "request-ip";
import {
  geolocation,
  ipAddress,
} from "@vercel/edge";

export const config = {
  runtime: "edge",
};

export default function handler(
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

  return new Response(
    `<h1>Your location is ${city}</h1>
    <h1>Your country is ${country}</h1>
    <h1>Your ip is ${ip}</h1>`,
    {
      headers: {
        "content-type":
          "text/html",
      },
    }
  );
}
