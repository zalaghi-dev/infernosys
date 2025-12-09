import { Cpu, Activity, Zap, Thermometer } from "lucide-react";
import { Progress } from "./ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export const CpuTab = () => {
  const cpuUsage = 42;
  const temp = 58;
  const avgClock = 4.2;

  const coreData = [
    { core: "Core 0", usage: 65, freq: 4.5 },
    { core: "Core 1", usage: 45, freq: 4.2 },
    { core: "Core 2", usage: 38, freq: 4.0 },
    { core: "Core 3", usage: 52, freq: 4.3 },
    { core: "Core 4", usage: 28, freq: 3.8 },
    { core: "Core 5", usage: 48, freq: 4.1 },
    { core: "Core 6", usage: 35, freq: 3.9 },
    { core: "Core 7", usage: 42, freq: 4.0 },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="p-3 bg-primary/10 rounded-xl">
          <Cpu className="w-8 h-8 text-primary" />
        </div>
        <div>
          <h2 className="text-3xl font-bold">CPU</h2>
          <p className="text-muted-foreground">Intel Core i9-13900K</p>
        </div>
      </div>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {/* CPU Usage */}
        <Card className="border-primary/20 bg-linear-to-br from-card to-primary/5">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Activity className="w-4 h-4 text-primary" />
              CPU Usage
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold mb-2">{cpuUsage}%</div>
            <Progress value={cpuUsage} className="h-2" />
          </CardContent>
        </Card>

        {/* Temperature */}
        <Card className="border-primary/20 bg-linear-to-br from-card to-primary/5">
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

        {/* Clock Speed */}
        <Card className="border-primary/20 bg-linear-to-br from-card to-primary/5">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Zap className="w-4 h-4 text-primary" />
              Avg Clock Speed
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{avgClock} GHz</div>
            <p className="text-xs text-muted-foreground mt-1">Max: 5.8 GHz</p>
          </CardContent>
        </Card>

        {/* Power */}
        <Card className="border-primary/20 bg-linear-to-br from-card to-primary/5">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Zap className="w-4 h-4 text-primary" />
              Package Power
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">125 W</div>
            <p className="text-xs text-muted-foreground mt-1">TDP: 253W</p>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Info Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xs text-muted-foreground">Cores / Threads</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-semibold">24 / 32</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xs text-muted-foreground">Base Clock</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-semibold">3.0 GHz</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xs text-muted-foreground">Boost Clock</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-semibold">5.8 GHz</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xs text-muted-foreground">Voltage</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-semibold">1.25 V</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xs text-muted-foreground">L1 Cache</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-semibold">1.5 MB</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xs text-muted-foreground">L2 Cache</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-semibold">32 MB</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xs text-muted-foreground">L3 Cache</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-semibold">36 MB</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xs text-muted-foreground">Architecture</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-semibold">Raptor Lake</p>
          </CardContent>
        </Card>
      </div>

      {/* Per-Core Usage */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Per-Core Usage</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {coreData.map((core) => (
              <div key={core.core} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{core.core}</span>
                  <div className="flex gap-3 text-muted-foreground">
                    <span>{core.usage}%</span>
                    <span>{core.freq} GHz</span>
                  </div>
                </div>
                <Progress value={core.usage} className="h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
