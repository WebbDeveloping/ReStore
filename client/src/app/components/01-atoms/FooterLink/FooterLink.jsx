import React from "react";

function FooterLink(props) {
  return (
    <li className="block mb-5 last:mb-0 text-white uppercase">
      <a href={props.href} className="">
        <div className="flex items-center">
          <div className="mr-2 text-sm font-light">{props.text}</div>
          <div className="text-white flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-arrow-right"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
        </div>
      </a>
    </li>
  );
}

export default FooterLink;
