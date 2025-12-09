import { HardDrive } from "lucide-react";

export const RamTab = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <HardDrive className="w-8 h-8 text-primary" />
        <h2 className="text-2xl font-bold">RAM Information</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-card rounded-lg p-6 border border-border">
          <h3 className="text-sm font-medium text-muted-foreground mb-2">Total Memory</h3>
          <p className="text-lg font-semibold">32 GB</p>
        </div>

        <div className="bg-card rounded-lg p-6 border border-border">
          <h3 className="text-sm font-medium text-muted-foreground mb-2">Used Memory</h3>
          <p className="text-lg font-semibold">18.4 GB</p>
        </div>

        <div className="bg-card rounded-lg p-6 border border-border">
          <h3 className="text-sm font-medium text-muted-foreground mb-2">Available Memory</h3>
          <p className="text-lg font-semibold">13.6 GB</p>
        </div>

        <div className="bg-card rounded-lg p-6 border border-border">
          <h3 className="text-sm font-medium text-muted-foreground mb-2">Memory Type</h3>
          <p className="text-lg font-semibold">DDR5</p>
        </div>

        <div className="bg-card rounded-lg p-6 border border-border">
          <h3 className="text-sm font-medium text-muted-foreground mb-2">Speed</h3>
          <p className="text-lg font-semibold">6400 MHz</p>
        </div>

        <div className="bg-card rounded-lg p-6 border border-border">
          <h3 className="text-sm font-medium text-muted-foreground mb-2">Utilization</h3>
          <p className="text-lg font-semibold">57%</p>
        </div>
      </div>
    </div>
  );
};
