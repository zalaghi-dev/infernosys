#include <napi.h>
#include "gpu-usage.h"
#include "gpu-temp.h"

// Get GPU Usage
Napi::Object GetGpuUsage(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();
    
    GPU::UsageInfo usageInfo = GPU::getGpuUsage();
    
    Napi::Object result = Napi::Object::New(env);
    result.Set("usage", Napi::Number::New(env, usageInfo.usage));
    result.Set("success", Napi::Boolean::New(env, usageInfo.success));
    result.Set("error", Napi::String::New(env, usageInfo.error));
    
    return result;
}

// Get GPU Temperature
Napi::Object GetGpuTemperature(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();
    
    GPU::TempInfo tempInfo = GPU::getGpuTemperature();
    
    Napi::Object result = Napi::Object::New(env);
    result.Set("temperature", Napi::Number::New(env, tempInfo.temperature));
    result.Set("success", Napi::Boolean::New(env, tempInfo.success));
    result.Set("error", Napi::String::New(env, tempInfo.error));
    
    return result;
}

// Get All GPU Info
Napi::Object GetGpuInfo(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();
    
    GPU::UsageInfo usageInfo = GPU::getGpuUsage();
    GPU::TempInfo tempInfo = GPU::getGpuTemperature();
    
    Napi::Object result = Napi::Object::New(env);
    
    // Usage data
    result.Set("usage", Napi::Number::New(env, usageInfo.usage));
    result.Set("usageSuccess", Napi::Boolean::New(env, usageInfo.success));
    result.Set("usageError", Napi::String::New(env, usageInfo.error));
    
    // Temperature data
    result.Set("temperature", Napi::Number::New(env, tempInfo.temperature));
    result.Set("temperatureSuccess", Napi::Boolean::New(env, tempInfo.success));
    result.Set("temperatureError", Napi::String::New(env, tempInfo.error));
    
    return result;
}

// Module initialization
Napi::Object Init(Napi::Env env, Napi::Object exports) {
    exports.Set("getGpuUsage", Napi::Function::New(env, GetGpuUsage));
    exports.Set("getGpuTemperature", Napi::Function::New(env, GetGpuTemperature));
    exports.Set("getGpuInfo", Napi::Function::New(env, GetGpuInfo));
    
    return exports;
}

NODE_API_MODULE(gpu, Init)
