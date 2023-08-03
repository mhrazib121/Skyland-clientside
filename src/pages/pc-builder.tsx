import { useAddToBuildBtnContext } from "@/ContextApi/AddTobuildBtn";
import { usePcBuilderContext } from "@/ContextApi/PcBuilderContext";
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
import { useRouter } from "next/router";

const PcBuilder = () => {
  const router = useRouter();
  const btnIsShowing = useAddToBuildBtnContext();
  const builder = usePcBuilderContext();

  const selectCpu = () => {
    btnIsShowing?.setIsShowing(true);
    router.push("/category/processor");
  };
  const selectGpu = () => {
    btnIsShowing?.setIsShowing(true);
    router.push("/category/graphics-card");
  };
  const selectPsu = () => {
    btnIsShowing?.setIsShowing(true);
    router.push("/category/psu");
  };
  const selectMonitor = () => {
    btnIsShowing?.setIsShowing(true);
    router.push("/category/monitor");
  };
  const selectStorage = () => {
    btnIsShowing?.setIsShowing(true);
    router.push("/category/storage");
  };
  const selectMotherBoard = () => {
    btnIsShowing?.setIsShowing(true);
    router.push("/category/motherboard");
  };
  const selectRam = () => {
    btnIsShowing?.setIsShowing(true);
    router.push("/category/ram");
  };

  return (
    <MainComponent>
      <div className="p-6 border-2 rounded-lg w-[90%] mx-auto">
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
          selectedData={builder?.pcBuildData.cpu}
        />
        <BuilderInput
          label="Mother Board"
          icon={MotherboardIcon}
          selectFn={selectMotherBoard}
          selectedData={builder?.pcBuildData.motherBoard}
        />
        <BuilderInput
          label="RAM"
          icon={RamIcon}
          selectFn={selectRam}
          selectedData={builder?.pcBuildData.ram}
        />
        <BuilderInput
          label="Graphics Card"
          icon={GpuIcon}
          selectFn={selectGpu}
          selectedData={builder?.pcBuildData.gpu}
        />
        <BuilderInput
          label="Power Supply"
          icon={PsuIcon}
          selectFn={selectPsu}
          selectedData={builder?.pcBuildData.psu}
        />
        <BuilderInput
          label="Monitor"
          icon={MonitorIcon}
          selectFn={selectMonitor}
          selectedData={builder?.pcBuildData.monitor}
        />
        <BuilderInput
          label="Storage Device"
          icon={StorageIcon}
          selectFn={selectStorage}
          selectedData={builder?.pcBuildData.storage}
        />
      </div>
    </MainComponent>
  );
};

export default PcBuilder;
