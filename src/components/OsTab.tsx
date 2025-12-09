import { Monitor } from "lucide-react";

export const OsTab = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Monitor className="w-8 h-8 text-primary" />
        <h2 className="text-2xl font-bold">Operating System Information</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-card rounded-lg p-6 border border-border">
          <h3 className="text-sm font-medium text-muted-foreground mb-2">Operating System</h3>
          <p className="text-lg font-semibold">Windows 11 Pro</p>
        </div>

        <div className="bg-card rounded-lg p-6 border border-border">
          <h3 className="text-sm font-medium text-muted-foreground mb-2">Version</h3>
          <p className="text-lg font-semibold">23H2 (Build 22631)</p>
        </div>

        <div className="bg-card rounded-lg p-6 border border-border">
          <h3 className="text-sm font-medium text-muted-foreground mb-2">Architecture</h3>
          <p className="text-lg font-semibold">64-bit</p>
        </div>

        <div className="bg-card rounded-lg p-6 border border-border">
          <h3 className="text-sm font-medium text-muted-foreground mb-2">Computer Name</h3>
          <p className="text-lg font-semibold">INFERNOSYS-PC</p>
        </div>

        <div className="bg-card rounded-lg p-6 border border-border">
          <h3 className="text-sm font-medium text-muted-foreground mb-2">Uptime</h3>
          <p className="text-lg font-semibold">3d 12h 45m</p>
        </div>

        <div className="bg-card rounded-lg p-6 border border-border">
          <h3 className="text-sm font-medium text-muted-foreground mb-2">Installation Date</h3>
          <p className="text-lg font-semibold">January 15, 2024</p>
        </div>
      </div>
    </div>
  );
};
