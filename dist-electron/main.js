import { BrowserWindow, app, ipcMain } from "electron";
import path from "path";
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, { get: (a, b) => (typeof require !== "undefined" ? require : a)[b] }) : x)(function(x) {
	if (typeof require !== "undefined") return require.apply(this, arguments);
	throw Error("Calling `require` for \"" + x + "\" in an environment that doesn't expose the `require` function.");
});
app.disableHardwareAcceleration();
var gpuAddon = null;
try {
	gpuAddon = __require(path.join(__dirname, "../native/gpu/build/Release/gpu.node"));
} catch (error) {
	console.warn("GPU native addon not available:", error);
}
ipcMain.handle("gpu:getUsage", async () => {
	if (!gpuAddon) return {
		usage: 0,
		success: false,
		error: "GPU addon not loaded"
	};
	try {
		return gpuAddon.getGpuUsage();
	} catch (error) {
		return {
			usage: 0,
			success: false,
			error: String(error)
		};
	}
});
ipcMain.handle("gpu:getTemperature", async () => {
	if (!gpuAddon) return {
		temperature: 0,
		success: false,
		error: "GPU addon not loaded"
	};
	try {
		return gpuAddon.getGpuTemperature();
	} catch (error) {
		return {
			temperature: 0,
			success: false,
			error: String(error)
		};
	}
});
ipcMain.handle("gpu:getInfo", async () => {
	if (!gpuAddon) return {
		usage: 0,
		usageSuccess: false,
		usageError: "GPU addon not loaded",
		temperature: 0,
		temperatureSuccess: false,
		temperatureError: "GPU addon not loaded"
	};
	try {
		return gpuAddon.getGpuInfo();
	} catch (error) {
		return {
			usage: 0,
			usageSuccess: false,
			usageError: String(error),
			temperature: 0,
			temperatureSuccess: false,
			temperatureError: String(error)
		};
	}
});
app.whenReady().then(() => {
	const win = new BrowserWindow({
		title: "infernosys",
		webPreferences: {
			preload: path.join(__dirname, "preload.mjs"),
			contextIsolation: true,
			nodeIntegration: false
		}
	});
	if (process.env.VITE_DEV_SERVER_URL) win.loadURL(process.env.VITE_DEV_SERVER_URL);
	else win.loadFile("dist/index.html");
});
