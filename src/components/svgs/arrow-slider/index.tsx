export const ArrowSliderIcon = ({ ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="72"
    height="72"
    viewBox="0 0 72 72"
    fill="none"
    {...props}
  >
    <g filter="url(#filter0_d_6322_1496)">
      <circle cx="36" cy="26" r="24" transform="rotate(90 36 26)" fill="#44BD32" />
      <path
        d="M45.3725 26.7076C45.763 26.3171 45.763 25.6839 45.3725 25.2934L39.0085 18.9294C38.618 18.5389 37.9848 18.5389 37.5943 18.9294C37.2038 19.3199 37.2038 19.9531 37.5943 20.3436L43.2512 26.0005L37.5943 31.6573C37.2038 32.0479 37.2038 32.681 37.5943 33.0716C37.9848 33.4621 38.618 33.4621 39.0085 33.0716L45.3725 26.7076ZM27.332 27.0005L44.6654 27.0005L44.6654 25.0005L27.332 25.0005L27.332 27.0005Z"
        fill="white"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_6322_1496"
        x="0"
        y="0"
        width="72"
        height="72"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="10" />
        <feGaussianBlur stdDeviation="6" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_6322_1496" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_6322_1496"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
