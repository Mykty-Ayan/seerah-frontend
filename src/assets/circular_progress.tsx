type CircularProgressSvgType = {
  dashOffset: number;
};

const CircularProgressSvg = ({ dashOffset }: CircularProgressSvgType) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
    <defs>
      <linearGradient id="GradientColor">
        <stop offset="0%" stopColor="#01AB01" />
        <stop offset="100%" stopColor="#01AB01" />
      </linearGradient>
    </defs>
    <circle strokeDashoffset={dashOffset} cx="80" cy="80" r="70" strokeLinecap="round" />
  </svg>
  )
}

export default CircularProgressSvg;
