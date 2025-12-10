import { Wifi, Activity, Download, Upload } from "lucide-react";
import { Progress } from "./ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { useEffect, useState } from "react";

export const NetworkTab = () => {
  const [networkInfo, setNetworkInfo] = useState({
    adapterName: "Loading...",
    ipv4Address: "N/A",
    ipv6Address: "N/A",
    subnetMask: "N/A",
    macAddress: "N/A",
    linkSpeed: "Unknown",
  });

  const downloadSpeed = 125;
  const uploadSpeed = 45;
  const maxSpeed = 250;

  useEffect(() => {
    const fetchNetworkData = async () => {
      try {
        if (window.electron?.network) {
          const info = await window.electron.network.getInfo();
          console.log("Network Info:", info);
          
          if (info.success) {
            setNetworkInfo({
              adapterName: info.adapterName,
              ipv4Address: info.ipv4Address,
              ipv6Address: info.ipv6Address,
              subnetMask: info.subnetMask,
              macAddress: info.macAddress,
              linkSpeed: info.linkSpeed,
            });
          }
        }
      } catch (err) {
        console.error("Failed to fetch network data:", err);
      }
    };

    // Initial fetch
    fetchNetworkData();

    // Update every 5 seconds
    const interval = setInterval(fetchNetworkData, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="p-3 bg-primary/10 rounded-xl">
          <Wifi className="w-8 h-8 text-primary" />
        </div>
        <div>
          <h2 className="text-3xl font-bold">Network</h2>
          <p className="text-muted-foreground">{networkInfo.adapterName}</p>
        </div>
      </div>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {/* Download Speed */}
        <Card className="border-primary/20 bg-linear-to-br from-card to-primary/5">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Download className="w-4 h-4 text-primary" />
              Download Speed
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold mb-2">{downloadSpeed} MB/s</div>
            <Progress value={(downloadSpeed / maxSpeed) * 100} className="h-2" />
          </CardContent>
        </Card>

        {/* Upload Speed */}
        <Card className="border-primary/20 bg-linear-to-br from-card to-primary/5">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Upload className="w-4 h-4 text-primary" />
              Upload Speed
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold mb-2">{uploadSpeed} MB/s</div>
            <Progress value={(uploadSpeed / maxSpeed) * 100} className="h-2" />
          </CardContent>
        </Card>

        {/* Connection Status */}
        <Card className="border-primary/20 bg-linear-to-br from-card to-primary/5">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Activity className="w-4 h-4 text-primary" />
              Connection Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">Connected</div>
            <p className="text-xs text-muted-foreground mt-1">Active</p>
          </CardContent>
        </Card>

        {/* Bandwidth */}
        <Card className="border-primary/20 bg-linear-to-br from-card to-primary/5">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Wifi className="w-4 h-4 text-primary" />
              Link Speed
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.5 Gbps</div>
            <p className="text-xs text-muted-foreground mt-1">Full Duplex</p>
          </CardContent>
        </Card>
      </div>

      {/* Network Info Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xs text-muted-foreground">Adapter Name</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm font-semibold">{networkInfo.adapterName}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xs text-muted-foreground">Connection Type</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm font-semibold">Wired Ethernet</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xs text-muted-foreground">IPv4 Address</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm font-semibold">{networkInfo.ipv4Address}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xs text-muted-foreground">Subnet Mask</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm font-semibold">{networkInfo.subnetMask}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xs text-muted-foreground">Default Gateway</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm font-semibold">192.168.1.1</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xs text-muted-foreground">DNS Server</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm font-semibold">8.8.8.8</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xs text-muted-foreground">MAC Address</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs font-semibold">{networkInfo.macAddress}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xs text-muted-foreground">MTU Size</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm font-semibold">1500 bytes</p>
          </CardContent>
        </Card>
      </div>

      {/* IPv6 Information */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">IPv6 Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-muted-foreground mb-1">Link-Local Address</p>
              <p className="font-semibold text-sm">{networkInfo.ipv6Address}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Global Address</p>
              <p className="font-semibold text-sm">{networkInfo.ipv6Address}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Traffic Statistics */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Traffic Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <p className="text-xs text-muted-foreground mb-1">Total Downloaded</p>
              <p className="text-lg font-semibold">125.4 GB</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Total Uploaded</p>
              <p className="text-lg font-semibold">45.2 GB</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Packets Sent</p>
              <p className="text-lg font-semibold">2.5M</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Packets Received</p>
              <p className="text-lg font-semibold">3.8M</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
