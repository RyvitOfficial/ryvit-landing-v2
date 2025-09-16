import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import { CButton } from '../../components/CButton';
import { CBorderBeam } from '../../components/CBorderBeam';
import CAnimatedBackground from '../../components/CAnimatedBackground';

import { ICON_COLOR, ICON_SIZE } from '../../constants';

import dashboardScreen from '../../../public/images/Dashboard.png';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative  text-white py-20 md:py-32 px-6 flex flex-col items-center text-center overflow-hidden min-h-screen justify-center"
    >
      {/* Advanced background animation using Three.js */}
      <CAnimatedBackground />
      <div className="absolute inset-0 dark:bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10 h-[150vh]" />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Two-column layout for main content */}
        <div className="flex flex-col items-center justify-center gap-12 md:gap-20 mb-16 md:mb-24">
          {/* Text and Button Column */}
          <div className="md:w-full text-center md:text-left">
            <motion.h1
              className="text-4xl text-center md:!leading-snug md:text-6xl lg:text-6xl font-bold mb-4 leading-tight drop-shadow-sm"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-[#2563EE] drop-shadow-glow-subtle">
                The Future of Smart Contract Development
              </span>{' '}
              in Soroban & Stellar
            </motion.h1>
            <motion.p
              className="text-lg text-center md:text-2xl text-blue-300 mb-8 max-w-2xl md:max-w-none mx-auto drop-shadow-xs"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Simplify, Automate, and Accelerate Smart Contract Development.
            </motion.p>

            <div className="hidden md:flex relative items-center justify-center mt-8 md:mt-12 w-full">
              <a
                href="https://panel.ryvit.app"
                className="flex items-center justify-center w-max rounded-full border-t border-foreground/30 bg-white/20 backdrop-blur-lg px-2 py-1 md:py-2 gap-2 md:gap-8 shadow-3xl shadow-background/40 cursor-pointer select-none"
              >
                <p className="text-foreground text-sm text-center md:text-base font-medium pl-4 pr-4 lg:pr-0">
                  ✨ {'  '} Take full control of your smart contracts — with
                  Ryvit!
                </p>
                <CButton
                  size="sm"
                  className="rounded-full hidden lg:flex border border-foreground/20"
                >
                  Launch Ryvit
                  <ArrowRight className="w-4 h-4 ml-1" />
                </CButton>
              </a>
            </div>
          </div>

          {/* Image Column - Modified to overflow */}
          <div className="md:w-full flex justify-center items-center relative">
            {/* Adjust negative right margin for overflow */}
            <div className="relative flex items-center w-full">
              <div className="absolute top-1/2 left-1/2 -z-10 gradient w-3/4 -translate-x-1/2 h-3/4 -translate-y-1/2 inset-0 blur-[10rem]"></div>
              <div className="-m-2 rounded-xl p-2 ring-1 ring-inset ring-foreground/20 lg:-m-4 lg:rounded-2xl bg-opacity-50 backdrop-blur-3xl">
                <img
                  src={dashboardScreen}
                  alt="banner image"
                  width={1200}
                  height={1200}
                  className="rounded-md lg:rounded-xl bg-foreground/10 shadow-2xl"
                />

                <CBorderBeam size={250} duration={12} delay={9} />
              </div>
            </div>
          </div>
        </div>

        {/* Features below the two-column layout */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-8 border-t border-blue-900/20" // Added top border for visual separation
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <div className="flex flex-col items-center text-center">
            <span className={`${ICON_COLOR} ${ICON_SIZE} mb-2`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path
                  d="M12 6v6h4"
                  stroke="white"
                  strokeWidth="1"
                  opacity="0.5"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="white"
                  strokeWidth="1.5"
                />

                <path
                  d="M12 6v6h4"
                  stroke="white"
                  strokeWidth="1"
                  opacity="0.5"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="white"
                  strokeWidth="2"
                  opacity="0.5"
                />
              </svg>
            </span>
            <span className="text-sm text-white/80">
              Automated TTL Management
            </span>
          </div>
          <div className="flex flex-col items-center text-center">
            <span className={`${ICON_COLOR} ${ICON_SIZE} mb-2`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path
                  d="M18 16L22 12L18 8"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M6 8L2 12L6 16"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M14.5 4L9.5 20"
                  stroke="white"
                  strokeWidth="1"
                  strokeLinecap="round"
                  opacity="0.8"
                />
              </svg>
            </span>
            <span className="text-sm text-white/80">
              Effortless Contract Interaction
            </span>
          </div>
          <div className="flex flex-col items-center text-center">
            <span className={`${ICON_COLOR} ${ICON_SIZE} mb-2`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect
                  x="2"
                  y="3"
                  width="20"
                  height="14"
                  rx="2"
                  stroke="white"
                  strokeWidth="1.5"
                />
                <line
                  x1="8"
                  y1="21"
                  x2="16"
                  y2="21"
                  stroke="white"
                  strokeWidth="1.5"
                  opacity={0.8}
                />
                <line
                  x1="12"
                  y1="17"
                  x2="12"
                  y2="21"
                  stroke="white"
                  strokeWidth="1"
                  opacity={0.4}
                />
              </svg>
            </span>
            <span className="text-sm text-white/80">
              Real-time Event Monitoring
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
