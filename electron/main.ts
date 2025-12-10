import { app, BrowserWindow, ipcMain } from "electron";
import path from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const require = createRequire(import.meta.url);

// Disable GPU hardware acceleration to avoid GPU-related warnings
app.disableHardwareAcceleration();

// Load native GPU addon
let gpuAddon: any = null;
try {
  const addonPath = path.join(
    __dirname,
    "../native/gpu/build/Release/gpu.node"
  );
  gpuAddon = require(addonPath);
} catch (error) {
  console.warn("GPU native addon not available:", error);
}

// IPC Handlers for GPU info
ipcMain.handle("gpu:getUsage", async () => {
  if (!gpuAddon) {
    return { usage: 0, success: false, error: "GPU addon not loaded" };
  }
  try {
    return gpuAddon.getGpuUsage();
  } catch (error) {
    return { usage: 0, success: false, error: String(error) };
  }
});

ipcMain.handle("gpu:getTemperature", async () => {
  if (!gpuAddon) {
    return { temperature: 0, success: false, error: "GPU addon not loaded" };
  }
  try {
    return gpuAddon.getGpuTemperature();
  } catch (error) {
    return { temperature: 0, success: false, error: String(error) };
  }
});

ipcMain.handle("gpu:getInfo", async () => {
  if (!gpuAddon) {
    return {
      usage: 0,
      usageSuccess: false,
      usageError: "GPU addon not loaded",
      temperature: 0,
      temperatureSuccess: false,
      temperatureError: "GPU addon not loaded",
    };
  }
  try {
    return gpuAddon.getGpuInfo();
  } catch (error) {
    return {
      usage: 0,
      usageSuccess: false,
      usageError: String(error),
      temperature: 0,
      temperatureSuccess: false,
      temperatureError: String(error),
    };
  }
});

app.whenReady().then(() => {
  const win = new BrowserWindow({
    title: "infernosys",
    webPreferences: {
      preload: path.join(__dirname, "preload.mjs"),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  // You can use `process.env.VITE_DEV_SERVER_URL` when the vite command is called `serve`
  if (process.env.VITE_DEV_SERVER_URL) {
    win.loadURL(process.env.VITE_DEV_SERVER_URL);
  } else {
    // Load your file
    win.loadFile("dist/index.html");
  }
});
