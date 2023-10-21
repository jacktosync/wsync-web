import * as React from "react";
import { SVGProps } from "react";

const XIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    aria-label="X formerly known as Twitter"
    fill="currentColor"
    height={14}
    viewBox="0 0 22 20"
    {...props}
  >
    <path d="M16.99 0H20.298L13.071 8.26L21.573 19.5H14.916L9.702 12.683L3.736 19.5H0.426L8.156 10.665L0 0H6.826L11.539 6.231L16.99 0ZM15.829 17.52H17.662L5.83 1.876H3.863L15.829 17.52Z" />
  </svg>
);
export default XIcon;