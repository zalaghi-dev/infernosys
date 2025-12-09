import { Monitor, HardDrive, Wifi, Server, Clock, Cpu } from "lucide-react";
import { Progress } from "./ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export const OsTab = () => {
  const storageData = [
    { name: "C: (NVMe SSD)", type: "NVMe", total: 1000, used: 650, read: 3500, write: 3000 },
    { name: "D: (SATA SSD)", type: "SSD", total: 2000, used: 1200, read: 550, write: 520 },
    { name: "E: (HDD)", type: "HDD", total: 4000, used: 2800, read: 180, write: 160 },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="p-3 bg-primary/10 rounded-xl">
          <Monitor className="w-8 h-8 text-primary" />
        </div>
        <div>
          <h2 className="text-3xl font-bold">Operating System</h2>
          <p className="text-muted-foreground">Windows 11 Pro</p>
        </div>
      </div>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {/* OS Version */}
        <Card className="border-primary/20 bg-linear-to-br from-card to-primary/5">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Monitor className="w-4 h-4 text-primary" />
              OS Version
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Windows 11 Pro</div>
            <p className="text-xs text-muted-foreground mt-1">23H2 (Build 22631)</p>
          </CardContent>
        </Card>

        {/* Uptime */}
        <Card className="border-primary/20 bg-linear-to-br from-card to-primary/5">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              System Uptime
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3d 12h 45m</div>
            <p className="text-xs text-muted-foreground mt-1">Since last boot</p>
          </CardContent>
        </Card>

        {/* Architecture */}
        <Card className="border-primary/20 bg-linear-to-br from-card to-primary/5">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Cpu className="w-4 h-4 text-primary" />
              Architecture
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">64-bit</div>
            <p className="text-xs text-muted-foreground mt-1">x64-based PC</p>
          </CardContent>
        </Card>

        {/* Computer Name */}
        <Card className="border-primary/20 bg-linear-to-br from-card to-primary/5">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Server className="w-4 h-4 text-primary" />
              Device Name
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">INFERNOSYS-PC</div>
          </CardContent>
        </Card>
      </div>

      {/* System Info Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xs text-muted-foreground">Build Number</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-semibold">22631.4602</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xs text-muted-foreground">Kernel Version</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-semibold">10.0.22631</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xs text-muted-foreground">BIOS Version</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-semibold">ASUS 2103</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xs text-muted-foreground">Motherboard</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-semibold">ROG MAXIMUS Z790</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xs text-muted-foreground">Install Date</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-semibold">Jan 15, 2024</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xs text-muted-foreground">Windows Edition</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-semibold">Professional</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xs text-muted-foreground">Product ID</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm font-semibold">00331-10000-00001</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xs text-muted-foreground">System Type</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-semibold">Gaming PC</p>
          </CardContent>
        </Card>
      </div>

      {/* Storage Information */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <HardDrive className="w-5 h-5 text-primary" />
            Storage Devices
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {storageData.map((drive) => (
            <div key={drive.name} className="space-y-3">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold">{drive.name}</p>
                  <p className="text-sm text-muted-foreground">{drive.type}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold">
                    {drive.used} / {drive.total} GB
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {((drive.used / drive.total) * 100).toFixed(0)}% Used
                  </p>
                </div>
              </div>
              <Progress value={(drive.used / drive.total) * 100} className="h-2" />
              <div className="flex gap-4 text-xs text-muted-foreground">
                <span>Read: {drive.read} MB/s</span>
                <span>Write: {drive.write} MB/s</span>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Network Information */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Wifi className="w-5 h-5 text-primary" />
            Network Information
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div>
                <p className="text-xs text-muted-foreground mb-1">Adapter Name</p>
                <p className="font-semibold">Ethernet - Intel I225-V</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">IPv4 Address</p>
                <p className="font-semibold">192.168.1.100</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">IPv6 Address</p>
                <p className="font-semibold text-sm">fe80::a1b2:c3d4:e5f6:7890</p>
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-muted-foreground mb-1">Connection Type</p>
                <p className="font-semibold">Wired (2.5 Gbps)</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Download Speed</p>
                <p className="font-semibold text-primary">125 MB/s</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Upload Speed</p>
                <p className="font-semibold text-primary">45 MB/s</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
