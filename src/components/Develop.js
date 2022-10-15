import React from "react";

const Develop = () => {
  return (
    <div className="bg-myblue flex flex-col gap-y-2 items-center justify-center py-4 -rounded-tr-[100px]">
      <span className="text-sm">
        Develop by
        <a
          href="https://www.linkedin.com/in/pouyasadeghi/"
          className="ml-2 px-1 text-myorange font-bold "
        >
          Pouya Sadeghi
        </a>
      </span>
      <span className="text-sm">
        Design by
        <a
          href="https://www.linkedin.com/in/arineh-nazarian-6b360b232/"
          className="ml-2 px-1 text-myorange font-bold "
        >
          Arineh Nazarian
        </a>
      </span>
    </div>
  );
};

export default Develop;
