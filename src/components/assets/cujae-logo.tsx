import React from "react";

export default function CujaeLogo() {
  return (
  <svg
    width="60"
    height="60"
    viewBox="0 0 155 158"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <defs>
      <clipPath id="circleView">
        <circle cx="77.5" cy="79" r="77.5" />
      </clipPath>
      <pattern
        id="pattern0_6_3"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use
          xlinkHref="#image0_6_3"
          transform="scale(0.00645161 0.00632911)"
        />
      </pattern>
      <image
        id="image0_6_3"
        width="155"
        height="158"
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
    <circle cx="77.5" cy="79" r="77.5" fill="url(#pattern0_6_3)" />
  </svg>


  );
}
