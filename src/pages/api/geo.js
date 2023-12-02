import requestIp from "request-ip";
import { geolocation } from "@vercel/edge";

export const config = {
  runtime: "edge",
};

export default function handler(
  req,
  res
) {
  const { city } =
    geolocation(req);

  const detectedIp =
    requestIp.getClientIp(
      req
    );

  return new Response(
    `<h1>Your location is ${city}</h1>`,
    {
      headers: {
        "content-type":
          "text/html",
      },
    }
  );
}
