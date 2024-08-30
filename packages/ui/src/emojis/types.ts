import * as React from "react";

export interface EmojiProps extends React.SVGAttributes<SVGElement> {
  size?: number;
  children?: React.ReactNode;
}
