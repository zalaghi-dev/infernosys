import { Gauge, Zap, Thermometer, Wind, Activity } from "lucide-react";
import { Progress } from "./ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export const GpuTab = () => {
  const gpuUsage = 68;
  const vramUsage = 85;
  const temp = 72;
  const fanSpeed = 65;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="p-3 bg-primary/10 rounded-xl">
          <Gauge className="w-8 h-8 text-primary" />
        </div>
        <div>
          <h2 className="text-3xl font-bold">GPU</h2>
          <p className="text-muted-foreground">NVIDIA GeForce RTX 4090</p>
        </div>
      </div>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {/* GPU Usage */}
        <Card className="border-primary/20 bg-gradient-to-br from-card to-primary/5">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Activity className="w-4 h-4 text-primary" />
              GPU Usage
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold mb-2">{gpuUsage}%</div>
            <Progress value={gpuUsage} className="h-2" />
          </CardContent>
        </Card>

        {/* Temperature */}
        <Card className="border-primary/20 bg-gradient-to-br from-card to-primary/5">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Thermometer className="w-4 h-4 text-primary" />
              Temperature
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold mb-2">{temp}°C</div>
            <Progress value={(temp / 100) * 100} className="h-2" />
          </CardContent>
        </Card>

        {/* VRAM */}
        <Card className="border-primary/20 bg-gradient-to-br from-card to-primary/5">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Zap className="w-4 h-4 text-primary" />
              VRAM Usage
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold mb-2">20 / 24 GB</div>
            <Progress value={vramUsage} className="h-2" />
          </CardContent>
        </Card>

        {/* Fan Speed */}
        <Card className="border-primary/20 bg-gradient-to-br from-card to-primary/5">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Wind className="w-4 h-4 text-primary" />
              Fan Speed
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold mb-2">{fanSpeed}%</div>
            <Progress value={fanSpeed} className="h-2" />
            <p className="text-xs text-muted-foreground mt-1">2100 RPM</p>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Info Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xs text-muted-foreground">Driver Version</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-semibold">546.65</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xs text-muted-foreground">Core Clock</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-semibold">2520 MHz</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xs text-muted-foreground">Memory Clock</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-semibold">10501 MHz</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xs text-muted-foreground">Power Usage</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-semibold">285 W</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xs text-muted-foreground">PCIe Link</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-semibold">Gen4 x16</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xs text-muted-foreground">HotSpot Temp</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-semibold">78°C</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xs text-muted-foreground">Memory Temp</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-semibold">68°C</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xs text-muted-foreground">GPU Voltage</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-semibold">1.05 V</p>
          </CardContent>
        </Card>
      </div>

      {/* Per-Process Usage */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Per-Process GPU Usage</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="font-medium">Cyberpunk 2077</span>
              <span className="text-muted-foreground">45%</span>
            </div>
            <Progress value={45} className="h-2" />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="font-medium">Discord</span>
              <span className="text-muted-foreground">12%</span>
            </div>
            <Progress value={12} className="h-2" />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="font-medium">Chrome</span>
              <span className="text-muted-foreground">8%</span>
            </div>
            <Progress value={8} className="h-2" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
