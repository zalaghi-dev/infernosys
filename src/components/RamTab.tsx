import { HardDrive, Activity, Database, BarChart3 } from "lucide-react";
import { Progress } from "./ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export const RamTab = () => {
  const totalRam = 32;
  const usedRam = 18.4;
  const freeRam = 13.6;
  const usage = (usedRam / totalRam) * 100;

  const processData = [
    { name: "Cyberpunk 2077", usage: 8.2 },
    { name: "Chrome", usage: 3.5 },
    { name: "Discord", usage: 2.1 },
    { name: "Spotify", usage: 1.2 },
    { name: "VS Code", usage: 0.9 },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="p-3 bg-primary/10 rounded-xl">
          <HardDrive className="w-8 h-8 text-primary" />
        </div>
        <div>
          <h2 className="text-3xl font-bold">RAM</h2>
          <p className="text-muted-foreground">DDR5 6400 MHz</p>
        </div>
      </div>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {/* Total RAM */}
        <Card className="border-primary/20 bg-linear-to-br from-card to-primary/5">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Database className="w-4 h-4 text-primary" />
              Total Memory
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{totalRam} GB</div>
          </CardContent>
        </Card>

        {/* Used RAM */}
        <Card className="border-primary/20 bg-linear-to-br from-card to-primary/5">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Activity className="w-4 h-4 text-primary" />
              Used Memory
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold mb-2">{usedRam} GB</div>
            <Progress value={usage} className="h-2" />
          </CardContent>
        </Card>

        {/* Free RAM */}
        <Card className="border-primary/20 bg-linear-to-br from-card to-primary/5">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-primary" />
              Available Memory
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{freeRam} GB</div>
          </CardContent>
        </Card>

        {/* Usage Percentage */}
        <Card className="border-primary/20 bg-linear-to-br from-card to-primary/5">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Activity className="w-4 h-4 text-primary" />
              Usage
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold mb-2">{usage.toFixed(0)}%</div>
            <Progress value={usage} className="h-2" />
          </CardContent>
        </Card>
      </div>

      {/* Detailed Info Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xs text-muted-foreground">Memory Type</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-semibold">DDR5</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xs text-muted-foreground">Speed</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-semibold">6400 MHz</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xs text-muted-foreground">Channels</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-semibold">Dual Channel</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xs text-muted-foreground">Form Factor</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-semibold">DIMM</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xs text-muted-foreground">Virtual Memory</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-semibold">48 GB</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xs text-muted-foreground">Paging File</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-semibold">16 GB</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xs text-muted-foreground">Cached</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-semibold">4.2 GB</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xs text-muted-foreground">Committed</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-semibold">22 GB</p>
          </CardContent>
        </Card>
      </div>

      {/* Per-Process Usage */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Top Processes by Memory</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {processData.map((process) => (
            <div key={process.name} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-medium">{process.name}</span>
                <span className="text-muted-foreground">{process.usage} GB</span>
              </div>
              <Progress value={(process.usage / totalRam) * 100} className="h-2" />
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};
