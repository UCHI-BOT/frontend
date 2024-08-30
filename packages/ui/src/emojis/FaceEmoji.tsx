import * as React from "react";
import { EmojiProps } from "./types";

const HuggingFaceEmoji = React.forwardRef<SVGSVGElement, EmojiProps>(({ size = 20, ...props }, ref) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <rect width="72" height="72" fill="url(#HuggingFaceEmojiPattern)" />
      <defs>
        <pattern id="HuggingFaceEmojiPattern" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use href="#HuggingFaceEmojiImage" transform="scale(0.0138889)" />
        </pattern>
        <image
          id="HuggingFaceEmojiImage"
          width="72"
          height="72"
          href="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
});

const LoudlyCryingFaceEmoji = React.forwardRef<SVGSVGElement, EmojiProps>(({ size = 20, ...props }, ref) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <rect width="72" height="72" fill="url(#LoudlyCryingFaceEmojiPattern)" />
      <defs>
        <pattern id="LoudlyCryingFaceEmojiPattern" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use href="#LoudlyCryingFaceEmojiImage" transform="scale(0.0138889)" />
        </pattern>
        <image
          id="LoudlyCryingFaceEmojiImage"
          width="72"
          height="72"
          href="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
});

export { HuggingFaceEmoji, LoudlyCryingFaceEmoji };
