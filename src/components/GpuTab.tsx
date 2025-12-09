import { Gauge } from "lucide-react";

export const GpuTab = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Gauge className="w-8 h-8 text-primary" />
        <h2 className="text-2xl font-bold">GPU Information</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-card rounded-lg p-6 border border-border">
          <h3 className="text-sm font-medium text-muted-foreground mb-2">GPU Name</h3>
          <p className="text-lg font-semibold">NVIDIA GeForce RTX 4090</p>
        </div>

        <div className="bg-card rounded-lg p-6 border border-border">
          <h3 className="text-sm font-medium text-muted-foreground mb-2">Memory</h3>
          <p className="text-lg font-semibold">24 GB GDDR6X</p>
        </div>

        <div className="bg-card rounded-lg p-6 border border-border">
          <h3 className="text-sm font-medium text-muted-foreground mb-2">Temperature</h3>
          <p className="text-lg font-semibold">68°C</p>
        </div>

        <div className="bg-card rounded-lg p-6 border border-border">
          <h3 className="text-sm font-medium text-muted-foreground mb-2">Utilization</h3>
          <p className="text-lg font-semibold">45%</p>
        </div>

        <div className="bg-card rounded-lg p-6 border border-border">
          <h3 className="text-sm font-medium text-muted-foreground mb-2">Clock Speed</h3>
          <p className="text-lg font-semibold">2520 MHz</p>
        </div>

        <div className="bg-card rounded-lg p-6 border border-border">
          <h3 className="text-sm font-medium text-muted-foreground mb-2">Driver Version</h3>
          <p className="text-lg font-semibold">546.65</p>
        </div>
      </div>
    </div>
  );
};
