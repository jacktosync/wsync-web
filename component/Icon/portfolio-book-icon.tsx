import * as React from "react";
import { SVGProps } from "react";

const PortfolioBookIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M7 7C7 6.44772 7.44772 6 8 6H16C16.5523 6 17 6.44772 17 7C17 7.55228 16.5523 8 16 8H8C7.44772 8 7 7.55228 7 7Z'
      fill='#34a853'
    />
    <path
      d='M8 9C7.44772 9 7 9.44771 7 10C7 10.5523 7.44772 11 8 11H13C13.5523 11 14 10.5523 14 10C14 9.44771 13.5523 9 13 9H8Z'
      fill='#34a853'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M7 23H19C20.6569 23 22 21.6569 22 20V4C22 2.34315 20.6569 1 19 1H7C4.23858 1 2 3.23858 2 6V18C2 20.7055 4.27504 23 7 23ZM4 6C4 4.34315 5.34315 3 7 3H19C19.5523 3 20 3.44772 20 4V14.1707C19.6872 14.0602 19.3506 14 19 14H7C5.87439 14 4.83566 14.3719 4 14.9996V6ZM20 17C20 16.4477 19.5523 16 19 16H7C5.5135 16 4.04148 17.0532 4.04148 18.5C4.04148 19.9162 5.5135 21 7 21H19C19.5523 21 20 20.5523 20 20V17Z'
      fill='goldenrod'
    />
  </svg>
);

export default PortfolioBookIcon;