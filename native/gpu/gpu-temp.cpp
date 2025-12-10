#include "gpu-temp.h"
#include <cstring>

#ifdef _WIN32
    #include <windows.h>
    #include <string>
#elif __APPLE__
    #include <IOKit/IOKitLib.h>
#elif __linux__
    #include <fstream>
    #include <sstream>
    #include <dirent.h>
#endif

namespace GPU {
    TempInfo getGpuTemperature() {
        TempInfo info;
        info.temperature = 0.0f;
        info.success = false;
        info.error = "";

#ifdef _WIN32
        // Windows: Try WMI or external tools
        // Note: Direct GPU temp access requires vendor-specific APIs
        // Using nvidia-smi as fallback
        FILE* pipe = _popen("nvidia-smi --query-gpu=temperature.gpu --format=csv,noheader,nounits 2>nul", "r");
        if (pipe) {
            char buffer[128];
            if (fgets(buffer, sizeof(buffer), pipe) != NULL) {
                try {
                    info.temperature = std::stof(buffer);
                    info.success = true;
                } catch (...) {
                    info.error = "Failed to parse temperature";
                }
            }
            _pclose(pipe);
        }

        if (!info.success) {
            info.temperature = 0.0f;
            info.success = true;
            info.error = "GPU temperature monitoring not available";
        }

#elif __APPLE__
        // macOS: SMC (System Management Controller) access
        // This is complex and requires IOKit
        info.temperature = 0.0f;
        info.success = true;
        info.error = "GPU temperature monitoring not available on macOS";

#elif __linux__
        // Linux: Try to read from sysfs
        std::ifstream file("/sys/class/drm/card0/device/hwmon/hwmon0/temp1_input");
        if (file.is_open()) {
            int temp_millidegrees;
            file >> temp_millidegrees;
            info.temperature = temp_millidegrees / 1000.0f;
            info.success = true;
            file.close();
        } else {
            // Fallback: Try nvidia-smi
            FILE* pipe = popen("nvidia-smi --query-gpu=temperature.gpu --format=csv,noheader,nounits 2>/dev/null", "r");
            if (pipe) {
                char buffer[128];
                if (fgets(buffer, sizeof(buffer), pipe) != NULL) {
                    try {
                        info.temperature = std::stof(buffer);
                        info.success = true;
                    } catch (...) {
                        info.error = "Failed to parse temperature";
                    }
                }
                pclose(pipe);
            }
        }

        if (!info.success) {
            info.temperature = 0.0f;
            info.success = true;
            info.error = "GPU temperature monitoring not available";
        }
#endif

        return info;
    }
}
