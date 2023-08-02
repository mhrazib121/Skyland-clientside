import {
  CpuIcon,
  GpuIcon,
  MonitorIcon,
  MotherboardIcon,
  PsuIcon,
  RamIcon,
  StorageIcon,
} from "@/assets/BuilderIcon";
import BuilderInput from "@/components/BuilderInput";
import { Button, MainComponent } from "@/components/Common";

const PcBuilder = () => {
  const selectCpu = () => {
    console.log("object");
  };
  return (
    <MainComponent>
      <div className="p-6 border-2 rounded-lg">
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-semibold">
            {" "}
            PC Builder - Build Your Own Computer - SkyLand
          </h1>
          <Button addClass="py-2 px-4">Complete Build</Button>
        </div>
        <br />
        <hr />
        <BuilderInput
          label="CPU / Processor"
          icon={CpuIcon}
          selectFn={selectCpu}
        />
        <BuilderInput
          label="Mother Board"
          icon={MotherboardIcon}
          selectFn={selectCpu}
        />
        <BuilderInput label="RAM" icon={RamIcon} selectFn={selectCpu} />
        <BuilderInput
          label="Graphics Card"
          icon={GpuIcon}
          selectFn={selectCpu}
        />
        <BuilderInput
          label="Power Supply"
          icon={PsuIcon}
          selectFn={selectCpu}
        />
        <BuilderInput label="Monitor" icon={MonitorIcon} selectFn={selectCpu} />
        <BuilderInput
          label="Storage Device"
          icon={StorageIcon}
          selectFn={selectCpu}
        />
      </div>
    </MainComponent>
  );
};

export default PcBuilder;
