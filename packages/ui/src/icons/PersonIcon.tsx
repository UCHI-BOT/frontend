import * as React from "react";
import { IconProps } from "./types";
import { primaryColor, secondaryColor } from "./utils";

const PersonCropCircleFillIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 20, ...props }, ref) => {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        ref={ref}
        {...props}
      >
        <path
          d="M14.105 26.21C20.7369 26.21 26.2121 20.7273 26.2121 14.105C26.2121 7.47312 20.7273 2 14.0954 2C7.47523 2 2 7.47312 2 14.105C2 20.7273 7.48484 26.21 14.105 26.21Z"
          fill={primaryColor}
        />
        <path
          d="M14.0955 24.2199C11.4772 24.2199 8.68889 23.1394 6.92334 21.2335C8.25858 19.2139 10.9365 18.0526 14.0955 18.0526C17.231 18.0526 19.9303 19.1905 21.2793 21.2335C19.502 23.1394 16.7233 24.2199 14.0955 24.2199ZM14.0955 16.0287C11.8075 16.0095 10.0211 14.0923 10.0211 11.5602C10.0094 9.174 11.8255 7.17151 14.0955 7.17151C16.3771 7.17151 18.172 9.174 18.172 11.5602C18.172 14.0923 16.3952 16.048 14.0955 16.0287Z"
          fill={secondaryColor}
        />
      </svg>
    );
  },
);

export { PersonCropCircleFillIcon };
