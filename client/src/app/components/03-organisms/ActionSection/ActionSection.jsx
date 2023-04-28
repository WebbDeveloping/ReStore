import React from "react";

function ActionSection() {
  return (
    <div className="min-h-[400px] pt-10 pb-20 flex justify-center items-stretch relative">
      <div className="stacked-content relative z-20 text-white text-center flex flex-col gap-y-9 gap-x-4 px-[5vw] max-w-full overflow-hidden">
        <div className="py-8 min-h-auto text-white flex overflow-hidden items-center">
          <div className="rotating-text pr-14 whitespace-nowrap text-6xl font-semibold uppercase">
            <h1 className="slide-heading xl">
              repare Your Cat for Battle with Stealthy Whiskers
            </h1>
          </div>
          <div className="rotating-text pr-14 whitespace-nowrap text-6xl font-semibold uppercase">
            <h1 className="slide-heading xl">
              repare Your Cat for Battle with Stealthy Whiskers
            </h1>
          </div>
          <div className="rotating-text pr-14 whitespace-nowrap text-6xl font-semibold uppercase">
            <h1 className="slide-heading xl">
              repare Your Cat for Battle with Stealthy Whiskers
            </h1>
          </div>
        </div>
        <div className="grid-wrapper px-[5vw] max-w-full">
          <div className="flex flex-col justify-center text-center items-center gap-y-7">
            <div className="width-medium">
              <div className="body-display light large">
                Our products are designed to help your feline companion become a
                skilled and prepared warrior.
              </div>
            </div>
            <a
              href="/shop"
              className="button w-inline-block bg-white border rounded-full text-black px-7 py-2 uppercase text-sm"
            >
              <div className="button-text-wrapper">
                <div className="button-text">Shop all gear</div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <img
        src="https://assets.website-files.com/642fc428f0c0b966d5ba7a46/64305b7668eac9572d4d606a_bg-4.webp"
        alt=""
        className="absolute top-0 left-0 object-cover w-full h-full z-[5]"
      />
      <div className="overlay gradient absolute top-0 right-0 left-0 bottom-0 bg-[#07090c1a] z-10"></div>
    </div>
  );
}

export default ActionSection;
