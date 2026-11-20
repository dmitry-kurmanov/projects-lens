import http from 'node:http'
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const here = path.dirname(fileURLToPath(import.meta.url))
const port = Number(process.env.PORT) || 5180

http
  .createServer(async (req, res) => {
    if (req.method !== 'GET' || new URL(req.url, 'http://localhost').pathname !== '/') {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' })
      return res.end('Not found')
    }
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
    res.end(await fs.readFile(path.join(here, 'lens.html')))
  })
  .listen(port, '127.0.0.1', () => console.log(`Plan Lens: http://localhost:${port}`))
