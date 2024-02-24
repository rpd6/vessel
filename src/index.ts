import { serve } from "@hono/node-server"
import { Hono } from "hono"

const app = new Hono()

app.get("/", (c) => {
  return c.text("Hello Vessel!")
})

const port = 4321
console.log(`Server: http://localhost:${port}`)

serve({
  fetch: app.fetch,
  port,
})
