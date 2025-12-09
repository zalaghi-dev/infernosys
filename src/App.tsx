import { useState, useEffect } from "react";
import { Cpu, Gauge, HardDrive, Monitor, Moon, Sun } from "lucide-react";
import { GpuTab } from "./components/GpuTab";
import { CpuTab } from "./components/CpuTab";
import { RamTab } from "./components/RamTab";
import { OsTab } from "./components/OsTab";

const App = () => {
  const [selectedTab, setSelectedTab] = useState("gpu");
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    // Set initial theme to dark
    document.documentElement.setAttribute("data-theme", "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const tabs = [
    { id: "gpu", label: "GPU", icon: Gauge },
    { id: "cpu", label: "CPU", icon: Cpu },
    { id: "ram", label: "RAM", icon: HardDrive },
    { id: "os", label: "OS", icon: Monitor },
  ];

  const renderContent = () => {
    switch (selectedTab) {
      case "gpu":
        return <GpuTab />;
      case "cpu":
        return <CpuTab />;
      case "ram":
        return <RamTab />;
      case "os":
        return <OsTab />;
      default:
        return <GpuTab />;
    }
  };

  return (
    <div className="flex h-screen bg-background">
      {/* Vertical Sidebar */}
      <div className="w-20 bg-card border-r border-border flex flex-col items-center py-6">
        {/* Logo */}
        <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-xl mb-4">
          IS
        </div>

        {/* Tabs */}
        <div className="flex flex-col gap-2 w-full px-2 flex-1">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isSelected = selectedTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`
                  relative flex flex-col items-center justify-center gap-1 p-3 rounded-lg
                  transition-all duration-200
                  ${
                    isSelected
                      ? "bg-primary/10 text-primary font-semibold"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  }
                `}
              >
                {/* Red border on the left when selected */}
                {isSelected && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary rounded-r-full" />
                )}
                <Icon className="w-6 h-6" />
                <span className="text-xs">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="w-14 h-14 rounded-lg bg-accent hover:bg-accent/80 flex items-center justify-center text-foreground transition-all duration-200"
          aria-label="Toggle theme"
        >
          {theme === "light" ? (
            <Moon className="w-6 h-6" />
          ) : (
            <Sun className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-auto">
        <div className="max-w-7xl mx-auto">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default App;
