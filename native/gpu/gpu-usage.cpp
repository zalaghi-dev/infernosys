#include "gpu-usage.h"
#include <cstring>

#ifdef _WIN32
    #include <windows.h>
    #include <pdh.h>
    #include <pdhmsg.h>
    #pragma comment(lib, "pdh.lib")
#elif __APPLE__
    #include <IOKit/IOKitLib.h>
    #include <CoreFoundation/CoreFoundation.h>
#elif __linux__
    #include <fstream>
    #include <sstream>
#endif

namespace GPU {
    UsageInfo getGpuUsage() {
        UsageInfo info;
        info.usage = 0.0f;
        info.success = false;
        info.error = "";

#ifdef _WIN32
        // Windows: Use PDH (Performance Data Helper)
        PDH_HQUERY query = NULL;
        PDH_HCOUNTER counter = NULL;
        PDH_STATUS status;

        status = PdhOpenQuery(NULL, 0, &query);
        if (status != ERROR_SUCCESS) {
            info.error = "Failed to open PDH query";
            return info;
        }

        // Try NVIDIA GPU first
        status = PdhAddCounter(query, L"\\GPU Engine(*)\\Utilization Percentage", 0, &counter);
        
        if (status == ERROR_SUCCESS) {
            PdhCollectQueryData(query);
            Sleep(100);
            PdhCollectQueryData(query);

            PDH_FMT_COUNTERVALUE counterValue;
            status = PdhGetFormattedCounterValue(counter, PDH_FMT_DOUBLE, NULL, &counterValue);
            
            if (status == ERROR_SUCCESS) {
                info.usage = static_cast<float>(counterValue.doubleValue);
                info.success = true;
            }
        }

        if (query) PdhCloseQuery(query);

        if (!info.success) {
            // Fallback: return 0 as default
            info.usage = 0.0f;
            info.success = true;
        }

#elif __APPLE__
        // macOS: Not directly available, return 0
        info.usage = 0.0f;
        info.success = true;
        info.error = "GPU usage monitoring not available on macOS";

#elif __linux__
        // Linux: Try to read from sysfs (for Intel/AMD)
        std::ifstream file("/sys/class/drm/card0/device/gpu_busy_percent");
        if (file.is_open()) {
            file >> info.usage;
            info.success = true;
            file.close();
        } else {
            // Fallback: Try nvidia-smi
            FILE* pipe = popen("nvidia-smi --query-gpu=utilization.gpu --format=csv,noheader,nounits 2>/dev/null", "r");
            if (pipe) {
                char buffer[128];
                if (fgets(buffer, sizeof(buffer), pipe) != NULL) {
                    info.usage = std::stof(buffer);
                    info.success = true;
                }
                pclose(pipe);
            }
        }

        if (!info.success) {
            info.usage = 0.0f;
            info.success = true;
            info.error = "GPU usage monitoring not available";
        }
#endif

        return info;
    }
}
