import { Cpu } from "lucide-react";

export const CpuTab = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Cpu className="w-8 h-8 text-primary" />
        <h2 className="text-2xl font-bold">CPU Information</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-card rounded-lg p-6 border border-border">
          <h3 className="text-sm font-medium text-muted-foreground mb-2">Processor</h3>
          <p className="text-lg font-semibold">Intel Core i9-13900K</p>
        </div>

        <div className="bg-card rounded-lg p-6 border border-border">
          <h3 className="text-sm font-medium text-muted-foreground mb-2">Cores / Threads</h3>
          <p className="text-lg font-semibold">24 Cores / 32 Threads</p>
        </div>

        <div className="bg-card rounded-lg p-6 border border-border">
          <h3 className="text-sm font-medium text-muted-foreground mb-2">Base Clock</h3>
          <p className="text-lg font-semibold">3.0 GHz</p>
        </div>

        <div className="bg-card rounded-lg p-6 border border-border">
          <h3 className="text-sm font-medium text-muted-foreground mb-2">Boost Clock</h3>
          <p className="text-lg font-semibold">5.8 GHz</p>
        </div>

        <div className="bg-card rounded-lg p-6 border border-border">
          <h3 className="text-sm font-medium text-muted-foreground mb-2">Temperature</h3>
          <p className="text-lg font-semibold">52°C</p>
        </div>

        <div className="bg-card rounded-lg p-6 border border-border">
          <h3 className="text-sm font-medium text-muted-foreground mb-2">Utilization</h3>
          <p className="text-lg font-semibold">32%</p>
        </div>
      </div>
    </div>
  );
};
