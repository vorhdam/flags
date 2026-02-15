"use client";

import { type FlagCode } from "../lib/constants";
import { flagMap } from "../lib/flags";

export type FlagProps = React.SVGProps<SVGSVGElement> & {
  code: FlagCode;
};

export function Flag({ code, ...props }: FlagProps) {
  const FlagSvg = flagMap[code];
  return <FlagSvg {...props} />;
}
