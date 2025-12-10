#ifndef GPU_USAGE_H
#define GPU_USAGE_H

#include <string>

namespace GPU {
    struct UsageInfo {
        float usage;          // GPU usage percentage (0-100)
        bool success;
        std::string error;
    };

    UsageInfo getGpuUsage();
}

#endif // GPU_USAGE_H
