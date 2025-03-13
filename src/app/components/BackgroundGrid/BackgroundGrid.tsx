import { twMerge } from "tailwind-merge"
const BackgroundGrid = (props: {
  children?: React.ReactNode
  headingsClass?: string
}) => {
  return (
    <div className="relative h-screen w-full overflow-hidden top-0 pb-20">
      {/* Ensure the absolute div takes full space */}
      <div className="absolute inset-0 bg-black pointer-events-none flex items-center justify-center">
        <svg
          className="absolute w-full h-full opacity-40 text-neutral-700"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            {/* Grid Pattern */}
            <pattern id="grid" width="3" height="3" patternUnits="userSpaceOnUse">
              <path d="M 3 0 L 0 0 0 3" fill="none" stroke="#ffffff" strokeWidth="0.13" strokeOpacity="0.3" />
            </pattern>

            {/* Radial Gradient for Fade Effect */}
            <radialGradient id="fadeMask" cx="50%" cy="50%" r="90%">
              <stop offset="25%" stopColor="white" stopOpacity="1" />
              <stop offset="100%" stopColor="black" stopOpacity="0" />
            </radialGradient>

            {/* Mask for Grid */}
            <mask id="gridMask">
              <rect width="100%" height="100%" fill="url(#fadeMask)" />
            </mask>
          </defs>

          {/* Apply Grid with Even Fading Effect */}
          <rect width="100%" height="100%" fill="url(#grid)" mask="url(#gridMask)" />
        </svg>
        <div className='max-w-4xl flex text-center justify-center'>
          <h1 className='text-3xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8'>
          {props.children}
          </h1>
        </div>
      </div>
    </div>
  )
}

export default BackgroundGrid