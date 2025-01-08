import { Hono } from "hono";

const app = new Hono().get("/current", async (c) => {
  return c.json({ data: "return current login user" });
});

export default app;
