import nvidia_smi
import time

def print_gpu_info(interval=3):
    nvidia_smi.nvmlInit()
    handle = nvidia_smi.nvmlDeviceGetHandleByIndex(0)  # GPU 인덱스 0에 대한 핸들 가져오기

    while True:
        try:
            gpu_info = nvidia_smi.nvmlDeviceGetUtilizationRates(handle)
            clock_info = nvidia_smi.nvmlDeviceGetClockInfo(handle, nvidia_smi.NVML_CLOCK_GRAPHICS)
            mem_info = nvidia_smi.nvmlDeviceGetClockInfo(handle, nvidia_smi.NVML_CLOCK_MEM)
            power_info = nvidia_smi.nvmlDeviceGetPowerUsage(handle)  # 전력 소비량 가져오기 (단위: 밀리와트)
            print("GPU 사용량 - GPU: {}%, 메모리: {}%, 그래픽 클럭: {} MHz, 메모리 클럭: {} MHz, 전력 소비량: {}W".format(gpu_info.gpu, gpu_info.memory, clock_info, mem_info, power_info / 1000.0))
        except Exception as e:
            print(f"Error occurred: {e}")

        time.sleep(interval)


if __name__ == "__main__":
    print_gpu_info()
