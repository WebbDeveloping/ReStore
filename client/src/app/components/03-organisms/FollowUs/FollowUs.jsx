import React from "react";

const FollowUs = () => {
  return (
    <div className="p-0">
      <div className="p-2 gap-x-4 flex flex-col">
        <div className="flex gap-x-2">
          <a href="/" className="">
            <div className="h-[185px] w-[185px] relative">
              <img
                src="https://assets.website-files.com/642fc428f0c0b966d5ba7a46/6430882be805c45a1ca9cd14_ig-1.webp"
                alt="Instagram post"
                className="absolute top-0 left-0 right-0 bottom-0 h-full w-full object-cover"
              />
            </div>
          </a>
          <a href="/" className="relative ">
            <div className="h-[185px] w-[185px] relative">
              <img
                src="https://assets.website-files.com/642fc428f0c0b966d5ba7a46/6430882b01d44751cd40aaaf_ig-4.webp"
                alt="Instagram post"
                className="absolute top-0 left-0 right-0 bottom-0 h-full w-full object-cover"
              />{" "}
            </div>
          </a>
        </div>
        <a href="/" className="inline-block py-8 text-center">
          <div className="cursor-pointer overflow-hidden">
            <div className="text-sm font-semibold">{"@STEALTHYWHISKERS"}</div>
          </div>
        </a>
        <div className="flex gap-x-2">
          <a href="/" className="relative ">
            <div className="h-[185px] w-[185px] relative">
              <img
                src="https://assets.website-files.com/642fc428f0c0b966d5ba7a46/64305b76ca8aeb71e222e610_bg-5.webp"
                alt="Instagram post"
                className="absolute top-0 left-0 right-0 bottom-0 h-full w-full object-cover"
              />{" "}
            </div>
          </a>
          <a href="/" className="relative ">
            <div className="h-[185px] w-[185px] relative">
              <img
                src="https://assets.website-files.com/642fc428f0c0b966d5ba7a46/6430882bdf323a4b25e139b6_ig-3.webp"
                alt="Instagram post"
                className="absolute top-0 left-0 right-0 bottom-0 h-full w-full object-cover"
              />{" "}
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FollowUs;
