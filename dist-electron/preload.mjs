let electron = require("electron");
electron.contextBridge.exposeInMainWorld("electron", {
	send: (channel, data) => {
		if (["toMain"].includes(channel)) electron.ipcRenderer.send(channel, data);
	},
	receive: (channel, func) => {
		if (["fromMain"].includes(channel)) electron.ipcRenderer.on(channel, (event, ...args) => func(...args));
	}
});
