import React, { ReactElement } from "react";

const MainComponent = ({ children }: { children: ReactElement }) => {
  return (
    <main className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto">
      {children}
    </main>
  );
};

export default MainComponent;
