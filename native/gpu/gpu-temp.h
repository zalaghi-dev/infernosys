#ifndef GPU_TEMP_H
#define GPU_TEMP_H

#include <string>

namespace GPU {
    struct TempInfo {
        float temperature;    // GPU temperature in Celsius
        bool success;
        std::string error;
    };

    TempInfo getGpuTemperature();
}

#endif // GPU_TEMP_H
