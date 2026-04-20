import { spawn } from "child_process";
import http from "http";
import { chromium } from "playwright";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const PORT = Number(process.env.SCREENSHOT_PORT || 8765);
const outPath = path.join(root, process.env.SCREENSHOT_OUT || "portfolio-fullpage.png");
const viewport = { width: 1440, height: 900, deviceScaleFactor: 1 };

function waitForServer(maxMs = 60000) {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    const ping = () => {
      const req = http.get(`http://127.0.0.1:${PORT}`, (res) => {
        res.resume();
        resolve();
      });
      req.on("error", () => {
        if (Date.now() - start > maxMs) reject(new Error(`서버 대기 시간 초과 (${PORT})`));
        else setTimeout(ping, 150);
      });
    };
    ping();
  });
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

const serve = spawn(
  process.platform === "win32" ? "npx.cmd" : "npx",
  ["--yes", "serve", "dist", "-l", String(PORT), "--no-clipboard"],
  {
    cwd: root,
    shell: process.platform === "win32",
    stdio: "pipe",
  }
);

let serveExited = false;
serve.stderr.on("data", (d) => process.stderr.write(d));
serve.stdout.on("data", (d) => process.stdout.write(d));
serve.on("exit", (code) => {
  serveExited = true;
  if (code && code !== 0) console.error("serve 종료 코드:", code);
});

try {
  await waitForServer();
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport });
  await page.goto(`http://127.0.0.1:${PORT}/`, { waitUntil: "load", timeout: 120000 });
  await sleep(2500);
  await page.screenshot({ path: outPath, fullPage: true });
  await browser.close();
  console.log("저장됨:", outPath);
} finally {
  if (!serveExited) {
    serve.kill("SIGTERM");
    if (process.platform === "win32") {
      try {
        spawn("taskkill", ["/PID", String(serve.pid), "/T", "/F"], { shell: true });
      } catch {
        /* ignore */
      }
    }
  }
}
