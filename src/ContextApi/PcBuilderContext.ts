import { IProduct } from "@/pages";
import { createContext, useContext } from "react";
// type PcBuilderContextProps = {
//   cpu?: IProduct;
//   motherBoard?: IProduct;
//   monitor?: IProduct;
//   psu?: IProduct;
//   gpu?: IProduct;
//   ram?: IProduct;
//   storage?: IProduct;
// };
export type IPcBuilderData = {
  cpu?: IProduct;
  motherBoard?: IProduct;
  monitor?: IProduct;
  psu?: IProduct;
  gpu?: IProduct;
  ram?: IProduct;
  storage?: IProduct;
};
type PcBuilderContextProps = {
  pcBuildData: IPcBuilderData;
  updateState: (updatedState: IPcBuilderData) => void;
};

export const PcBuilderContext = createContext<PcBuilderContextProps | null>(
  null
);
export const PcBuilderProvider = PcBuilderContext.Provider;

export const usePcBuilderContext = () => useContext(PcBuilderContext);
