import React from "react";
import Social from "./Social";

const About = () => {
  return (
    <div className="pt-10 bg-primary-content">
        <h1 data-aos="zoom-in" data-aos-duration="1400" className="text-center smile py-10 pb-14 text-4xl font-mono font-bold w-6/12 mx-auto text-secondary"><span className="border-b-4 border-primary">Our</span> Mission</h1>
      <div className="">
        <div className="grid md:grid-cols-2 grid-cols-1 w-9/12 mx-auto">
          <div className="grid grid-cols-1">
            <img data-aos="zoom-out-down" data-aos-duration="1400"
              src="http://www.evethemes.com/demo/lp/charity/demo/images/750x420.jpg"
              alt=""
            />
            <div className="flex font-mono gap-8 mt-[-20px]">
              <div>
                <h1 data-aos="fade-up" data-aos-duration="1600" className="font-bold text-xl pb-2 text-secondary">Mission</h1>
                <p data-aos="fade-up" data-aos-duration="1400" className="text-sm text-justify text-secondary">
                  In on announcing if of comparison pianoforte projection. Maids
                  hoped gay yet bed asked blind dried point...
                </p>
              </div>
              <div>
                <h1 data-aos="fade-up" data-aos-duration="1600" className="font-bold text-xl pb-2 text-secondary">Vision</h1>
                <p data-aos="fade-up" data-aos-duration="1400" className="text-sm text-justify text-secondary">
                  Too horrible consider followed may differed age. An rest if
                  more five mr of. Age just her rank met down way...
                </p>
              </div>
            </div>
          </div>
          <div className="md:ml-10">
            <div data-aos="fade-down-left" data-aos-duration="1400" className="flex items-center gap-10 mb-10">
              <div>
                <img 
                  src="http://www.evethemes.com/demo/lp/charity/demo/images/260x200x1.jpg"
                  alt=""
                />
              </div>
              <div className="font-mono">
                <h1 className="text-xl font-mono mb-2 font-bold text-secondary">EURA BOUGH</h1>
                <p className="text-xl font-mono text-primary font-bold text-secondary">Founder</p>
                <Social />
              </div>
            </div>
            <div data-aos="fade-up-left" data-aos-duration="1400" className="flex items-center gap-10 mb-10">
              <div>
                <img 
                  src="http://www.evethemes.com/demo/lp/charity/demo/images/260x200x2.jpg"
                  alt=""
                />
              </div>
              <div>
                <h1 className="text-xl font-mono mb-2 font-bold text-secondary">KATE PRETTY</h1>
                <p className="text-xl font-mono text-primary font-bold text-secondary">Co - Founder</p>
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
