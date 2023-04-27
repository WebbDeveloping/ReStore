import React from "react";

function OurStory() {
  return (
    <div className="px-4 pt-20 relative flex justify-center z-10">
      <div className="grid-cols-3 gap-0 relative z-25">
        <div className="grid grid-cols-1 grid-row-2 gap-0 items-center justify-center content-center">
          <div className="w-full max-w-full mx-auto -mt-4">
            <div className="stacked-intro large centered flex flex-col gap-4">
              <div className="stacked-intro small centered flex flex-col gap-3 text-center">
                <div className="width-large">
                  <h1 className="heading large text-3xl weight-semibold">
                    Prepare Your Cat for Battle with Stealthy Whiskers
                  </h1>
                </div>
                <div className="width-medium">
                  <div className="body-display">
                    At Stealthy Whiskers, we're more than just a store that
                    sells cat gear. We're passionate cat owners and military
                    enthusiasts who want to help other cat owners train their
                    furry friends to become skilled and prepared warriors. Learn
                    more about our story and how we got started on our mission
                    to help cats become the best they can be.
                  </div>
                </div>
              </div>
              <div className="dual-button flex justify-center gap-4">
                <a
                  href="/shop"
                  className="button dark w-inline-block flex items-center bg-[#080808] text-sm text-center uppercase border rounded-full justify-center py-3 px-7 text-white"
                >
                  <div className="button-text-wrapper overflow-hidden flex flex-col cursor-pointer text-xs">
                    <div className="button-text text-xs">ShoP All</div>
                  </div>
                </a>
                <a
                  href="/about"
                  className="underline-link w-inline-block flex items-center gap-5"
                >
                  <div className="button-text-wrapper overflow-hidden flex flex-col cursor-pointer text-xs">
                    <div className="text-xs">Our story</div>
                  </div>
                  <div className="link-arrow-wrapper ">
                    <img
                      src="https://assets.website-files.com/642fc428f0c0b966d5ba7a46/642fc428f0c0b915ebba7b34_arrow-right(24x24)%402x%20(8).svg"
                      loading="lazy"
                      alt=""
                      className="arrow-icon w-[14px] h-[14px]"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="story-image-wrapper flex w-full justify-center mt-16 gap-2">
            <div className="relative third h-[220px] w-[113px] mt-4">
              <img
                src="https://assets.website-files.com/642fc428f0c0b966d5ba7a46/642fc5b24525316565e8ab0d_11.webp"
                className="h-full w-full object-cover absolute inset-0 top-0 left-0 right-0 bottom-0"
                alt="Purrtection Helmet"
              />
            </div>
            <div className="relative third h-[220px] w-[113px] mt-16">
              <img
                src="https://assets.website-files.com/642fc428f0c0b966d5ba7a46/642fc5b200c6121239e961ea_9.webp"
                className="h-full w-full object-cover absolute inset-0 top-0 left-0 right-0 bottom-0"
                alt="Purrtection Helmet"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurStory;
