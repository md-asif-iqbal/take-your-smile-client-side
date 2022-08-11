import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { ImBehance2, ImGoogle2 } from "react-icons/im";
const Social = () => {
  return (
    <div className="flex gap-4 items-center mt-3">
      <h1 className="text-[#385696] text-2xl">
        <AiFillFacebook />
      </h1>
      <h1 className="text-[#DC4E41] text-xl">
        <ImGoogle2 />
      </h1>
      <h1 className="text-[#4B7DF9] text-xl">
        <ImBehance2 />
      </h1>
    </div>
  );
};

export default Social;
