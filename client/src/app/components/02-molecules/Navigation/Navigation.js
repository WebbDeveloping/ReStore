import React from "react";

function Navigation() {
  return (
    <div className="max-w-full w-full h-[100px] bg-transparent flex flex-col fixed top-0 left-0 right-0 bottom-auto z-50">
      <div className="nav-base w-full h-full flex justify-center">
        <div className="grid-wrapper px-4 relative container grid col-auto row-auto gap-0 w-full z-20">
          <div className="nav-content flex items-center justify-between w-full h-full gap-4">
            <a
              href="/"
              className="brand w-nav-brand w--current justify-self-start w-[110px] text-white uppercase flex items-center justify-start"
            >
              <div className="subtitle logo-text text-[#faf8fa] weight-semibold text-sm uppercase">
                Stealthy
                <br />
                Whiskers
              </div>
            </a>
            <div className="right-nav">
              <div className="menu-button w-nav-button max-w-[28px] max-h-[28px]">
                <img
                  src="https://assets.website-files.com/642fc428f0c0b966d5ba7a46/642fc428f0c0b90d3dba7b32_menu-2(24x24)%402x.svg"
                  alt=""
                  className="menu-icon "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-nav-overlay"></div>
    </div>
  );
}

export default Navigation;
