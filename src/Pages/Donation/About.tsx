import React from "react";
import Social from "./Social";

const About = () => {
  return (
    <div className="pt-10 aboutBg">
        <h1 className="text-center smile py-10 pb-14 text-4xl font-mono font-bold w-6/12 mx-auto"><span className="border-b-4 border-primary">Our</span> Mission</h1>
      <div className="">
        <div className="grid md:grid-cols-2 grid-cols-1 w-9/12 mx-auto">
          <div className="grid grid-cols-1">
            <img
              src="http://www.evethemes.com/demo/lp/charity/demo/images/750x420.jpg"
              alt=""
            />
            <div className="flex font-mono gap-8 mt-[-20px]">
              <div>
                <h1 className="font-bold text-xl pb-2">Mission</h1>
                <p className="text-sm text-justify">
                  In on announcing if of comparison pianoforte projection. Maids
                  hoped gay yet bed asked blind dried point...
                </p>
              </div>
              <div>
                <h1 className="font-bold text-xl pb-2">Vision</h1>
                <p className="text-sm text-justify">
                  Too horrible consider followed may differed age. An rest if
                  more five mr of. Age just her rank met down way...
                </p>
              </div>
            </div>
          </div>
          <div className="md:ml-10">
            <div className="flex items-center gap-10 mb-10">
              <div>
                <img
                  src="http://www.evethemes.com/demo/lp/charity/demo/images/260x200x1.jpg"
                  alt=""
                />
              </div>
              <div className="font-mono">
                <h1 className="text-xl font-mono mb-2 font-bold">EURA BOUGH</h1>
                <p className="text-xl font-mono text-primary font-bold">Founder</p>
                <Social />
              </div>
            </div>
            <div className="flex items-center gap-10 mb-10">
              <div>
                <img
                  src="http://www.evethemes.com/demo/lp/charity/demo/images/260x200x2.jpg"
                  alt=""
                />
              </div>
              <div>
                <h1 className="text-xl font-mono mb-2 font-bold">KATE PRETTY</h1>
                <p className="text-xl font-mono text-primary font-bold">Co - Founder</p>
                <Social />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
