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

export interface ElectronAPI {
  gpu: {
    getUsage: () => Promise<GpuUsageInfo>;
    getTemperature: () => Promise<GpuTempInfo>;
    getInfo: () => Promise<GpuInfo>;
  };
  send: (channel: string, data: any) => void;
  receive: (channel: string, func: (...args: any[]) => void) => void;
}

declare global {
  interface Window {
    electron: ElectronAPI;
  }
}
