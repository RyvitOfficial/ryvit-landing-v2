import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

import { CButton } from '../../components/CButton';
import { CBorderBeam } from '../../components/CBorderBeam';
import CAnimatedBackground from '../../components/CAnimatedBackground';

import dashboardScreen from '../../../public/images/Dashboard.png';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative text-white py-16 md:py-24 lg:py-32 px-4 md:px-6 flex flex-col items-center overflow-hidden min-h-screen justify-center"
    >
      {/* Advanced background animation using Three.js */}
      <CAnimatedBackground />
      <div className="absolute inset-0 dark:bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10 h-[150vh]" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Badge */}
        <motion.div
          className="flex justify-center lg:justify-start mb-6 md:mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <a
            href="https://panel.ryvit.app"
            className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm px-4 py-2 text-sm font-medium text-white/90 hover:bg-white/10 hover:border-white/30 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span>Introducing Ryvit Platform</span>
            <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* Two Column Layout: Text Left, Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 md:mb-20">
          {/* Left Column - Text Content */}
          <div className="flex flex-col space-y-6 md:space-y-8">
            {/* Main Heading */}
            <motion.div
              className="text-center lg:text-left"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6">
                <span className=" text-white">
                  The Infrastructure Layer
                </span>
                <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent ml-2">
                  for Soroban Builders
                </span>
                <div className="w-[600px] h-[100px] bg-gradient-to-r from-blue-900 via-blue-500 to-blue-600 text-transparent ml-2 absolute top-[90px] -left-10 -z-10 opacity-50 blur-3xl rotate-3 p-5" />
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-blue-200/80 font-light">
                Ryvit handles TTL lifecycles, contract events, and function calls — purpose-built for{' '}
                <span className="text-white font-medium">Stellar & Soroban</span>.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row items-center lg:items-start gap-4"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <a href="https://panel.ryvit.app">
                <CButton
                  size="lg"
                  className="group rounded-full px-8 py-6 text-base md:text-lg font-semibold bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 border-0 shadow-2xl shadow-blue-500/50 hover:shadow-blue-400/60 transition-all duration-300"
                >
                  Launch Ryvit
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </CButton>
              </a>
              <a href="#hero">
                <CButton
                  size="lg"
                  className="rounded-full px-8 py-6 text-base md:text-lg font-semibold bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/30 backdrop-blur-sm transition-all duration-300"
                >
                  Learn More
                </CButton>
              </a>
            </motion.div>
          </div>

          {/* Right Column - Dashboard Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="absolute top-1/2 left-1/2 -z-10 w-3/4 h-3/4 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-blue-600/30 blur-[120px] opacity-50"></div>
            <div className="relative rounded-2xl p-2 md:p-3 ring-1 ring-white/10 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl shadow-2xl">
              <img
                src={dashboardScreen}
                alt="Ryvit Dashboard Preview"
                className="rounded-xl w-full h-auto shadow-2xl"
              />
              <CBorderBeam size={300} duration={15} delay={9} />
            </div>
          </motion.div>
        </div>

        {/* Feature Cards */}
        {/* <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          {[
            {
              icon: (
                <svg
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M12 6v6l4 2"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ),
              title: 'Automated TTL Management',
              description: 'Never worry about contract expiration',
            },
            {
              icon: (
                <svg
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 16L22 12L18 8"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 8L2 12L6 16"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.5 4L9.5 20"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    opacity="0.8"
                  />
                </svg>
              ),
              title: 'Effortless Contract Interaction',
              description: 'Interact with any contract via intuitive UI',
            },
            {
              icon: (
                <svg
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
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
                    strokeLinecap="round"
                  />
                  <line
                    x1="12"
                    y1="17"
                    x2="12"
                    y2="21"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    opacity="0.6"
                  />
                </svg>
              ),
              title: 'Real-time Event Monitoring',
              description: 'Track all contract events instantly',
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
            >
              <div className="text-white/90">{feature.icon}</div>
              <h3 className="text-base md:text-lg font-medium text-white/90">
                {feature.title}
              </h3>
              <p className="text-sm text-white/60 max-w-xs">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div> */}
      </div>
    </section>
  );
};

export default Hero;
