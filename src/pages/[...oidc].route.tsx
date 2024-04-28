import configuration from "@/configuration";
import { NextApiRequest, NextApiResponse } from "next";
import Provider from "oidc-provider";

export type ResponseData = {};

const { PORT = 3000, ISSUER = `http://localhost:${PORT}` } = process.env;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const provider = new Provider(ISSUER, configuration).callback();
  return provider(req, res);
}
