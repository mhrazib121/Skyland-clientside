import React from "react";

const Button = ({
  children,
  addClass,
}: {
  children: React.ReactNode;
  addClass?: string;
}) => {
  return (
    <button
      className={
        "text-white-500 font-semibold rounded-lg bg-orange-500 hover:shadow-orange-md transition-all outline-none " +
        addClass
      }
    >
      {children}
    </button>
  );
};

export default Button;
