// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  if (req.body.password === "Ayuh7948") res.status(200).json({ status: 200 });
  else res.status(401).json({ status: 401 });
}
