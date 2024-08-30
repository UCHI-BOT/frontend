import * as React from "react";

export interface IconProps extends React.SVGAttributes<SVGElement> {
  size?: number;
  children?: React.ReactNode;
}
