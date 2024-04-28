import { createRequest, createResponse } from "node-mocks-http";
import handler from "./pages/[...oidc].route";
it("ensures the import works", () => {
  const req = createRequest({
    url: "http://localhost:3000/.well-known/openid-configuration",
  });
  const res = createResponse();

  handler(req as any, res as any);

  expect(res.statusCode).toBeDefined();
});
