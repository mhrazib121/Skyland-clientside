import { IProduct } from "@/pages";
import Image, { StaticImageData } from "next/image";
interface InputProps {
  icon: StaticImageData;
  label: string;
  selectFn: () => void;
  selectedData?: IProduct;
}

const BuilderInput = ({ icon, label, selectFn, selectedData }: InputProps) => {
  return (
    <div>
      <div className="flex justify-between items-center py-5">
        <div className="flex gap-3 items-center">
          <div className="p-2 bg-orange-100 w-[58px] rounded-lg">
            <Image src={icon} alt="" />
          </div>
          <p className="text-lg font-medium">{label}</p>
        </div>
        <div>
          <button
            onClick={selectFn}
            className="py-2 px-5 font-medium border-2 rounded-lg bg-gray-100 hover:bg-orange-100"
          >
            Select
          </button>
        </div>
      </div>
      {/* sdkldskl */}

      {selectedData && (
        <div className="flex justify-between items-center py-2 px-8">
          <div className="flex gap-3 items-center">
            <div className="w-[58px]">
              <Image
                src={selectedData?.image || ""}
                width={100}
                height={100}
                alt=""
              />
            </div>
            <p className="text-lg font-medium">{selectedData.name}</p>
          </div>
          <div>
            <button
              onClick={selectFn}
              className="py-2 px-5 font-medium border-2 rounded-lg bg-gray-100 hover:bg-orange-100"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
      <hr />
    </div>
  );
};

export default BuilderInput;
