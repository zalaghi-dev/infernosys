let electron = require("electron");
electron.contextBridge.exposeInMainWorld("electron", {
	gpu: {
		getUsage: () => electron.ipcRenderer.invoke("gpu:getUsage"),
		getTemperature: () => electron.ipcRenderer.invoke("gpu:getTemperature"),
		getInfo: () => electron.ipcRenderer.invoke("gpu:getInfo")
	},
	send: (channel, data) => {
		if (["toMain"].includes(channel)) electron.ipcRenderer.send(channel, data);
	},
	receive: (channel, func) => {
		if (["fromMain"].includes(channel)) electron.ipcRenderer.on(channel, (event, ...args) => func(...args));
	}
});
