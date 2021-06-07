import {h} from "preact";

const SVG = ({
  style = {},
  width = "100%",
  className = "",
  viewBox = "0 0 20 20",
  stroke="#000",
  fill="#F4F7FE"
}) => (
  <svg
    width={width}
    style={style}
    height={width}
    viewBox={viewBox}
    stroke={stroke}
    fill={fill}
    className={`svg-icon ${className || ""}`}
    xmlns='http://www.w3.org/2000/svg'
  >
    <g clipPath="url(#clip0)">

      <path d="M19.1667 15.8333C19.1667 16.2754 18.9911 16.6993 18.6785 17.0118C18.366 17.3244 17.942 17.5 17.5 17.5H2.5C2.05797 17.5 1.63405 17.3244 1.32149 17.0118C1.00893 16.6993 0.833336 16.2754 0.833336 15.8333V6.66667C0.833336 6.22464 1.00893 5.80072 1.32149 5.48816C1.63405 5.17559 2.05797 5 2.5 5H5.83334L7.5 2.5H12.5L14.1667 5H17.5C17.942 5 18.366 5.17559 18.6785 5.48816C18.9911 5.80072 19.1667 6.22464 19.1667 6.66667V15.8333Z" stroke={stroke} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill={fill} />
      <path d="M10 14.1667C11.8409 14.1667 13.3333 12.6743 13.3333 10.8333C13.3333 8.99238 11.8409 7.5 10 7.5C8.15905 7.5 6.66666 8.99238 6.66666 10.8333C6.66666 12.6743 8.15905 14.1667 10 14.1667Z" stroke={stroke} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill={fill} />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default SVG;
