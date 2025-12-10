import { contextBridge, ipcRenderer } from 'electron';

// GPU Info Types
export interface GpuUsageInfo {
  usage: number;
  success: boolean;
  error: string;
}

export interface GpuTempInfo {
  temperature: number;
  success: boolean;
  error: string;
}

export interface GpuInfo {
  usage: number;
  usageSuccess: boolean;
  usageError: string;
  temperature: number;
  temperatureSuccess: boolean;
  temperatureError: string;
}

// Network Info Types
export interface NetworkInfo {
  success: boolean;
  error?: string;
  adapterName: string;
  ipv4Address: string;
  ipv6Address: string;
  subnetMask: string;
  macAddress: string;
  downloadSpeed: number;
  uploadSpeed: number;
  linkSpeed: string;
}

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld('electron', {
  // GPU APIs
  gpu: {
    getUsage: (): Promise<GpuUsageInfo> => ipcRenderer.invoke('gpu:getUsage'),
    getTemperature: (): Promise<GpuTempInfo> => ipcRenderer.invoke('gpu:getTemperature'),
    getInfo: (): Promise<GpuInfo> => ipcRenderer.invoke('gpu:getInfo'),
  },
  
  // Network APIs
  network: {
    getInfo: (): Promise<NetworkInfo> => ipcRenderer.invoke('network:getInfo'),
  },
  
  // Example API methods
  send: (channel: string, data: any) => {
    // whitelist channels
    const validChannels = ['toMain'];
    if (validChannels.includes(channel)) {
      ipcRenderer.send(channel, data);
    }
  },
  receive: (channel: string, func: (...args: any[]) => void) => {
    const validChannels = ['fromMain'];
    if (validChannels.includes(channel)) {
      // Deliberately strip event as it includes `sender` 
      ipcRenderer.on(channel, (event, ...args) => func(...args));
    }
  }
});
