const Lightbulb = () => {
  return (
    <svg width={139} height={147} fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#a)">
        <path
          d="M70 128c6.075 0 11-4.925 11-11s-4.925-11-11-11-11 4.925-11 11 4.925 11 11 11Z"
          fill="#FFD139"
        />
      </g>
      <path
        d="M30.334 53.617h79.054c3.314 0 4.206 2.324 6 6L139 114a6.003 6.003 0 0 1-1.757 4.243A6.003 6.003 0 0 1 133 120H6a6 6 0 0 1-6-6l24.334-54.383c1.503-3.38 2.686-6 6-6Z"
        fill="#fff"
      />
      <path d="M72-4h-5V98h5V-4Z" fill="#fff" />
      <path
        opacity={0.151}
        d="M104.294 59.365a2.001 2.001 0 0 0-3.684 1.564l21.114 49.734a2.001 2.001 0 0 0 3.684-1.564l-21.114-49.734Z"
        fill="#568BD0"
      />
      <defs>
        <filter
          id="a"
          x={43}
          y={93}
          width={54}
          height={54}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={3} />
          <feGaussianBlur stdDeviation={8} />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 0.780392 0 0 0 0 0.184314 0 0 0 1 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_1_240" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_240" result="shape" />
        </filter>
      </defs>
    </svg>
  )
}

export default Lightbulb
