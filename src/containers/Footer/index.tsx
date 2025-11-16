import logo from '../../../public/images/logo.png';

const Footer = () => {
  return (
    <footer className=" text-white py-12 px-6 md:px-12 text-center">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-6 md:space-y-0">
          <div className="flex justify-center items-center space-x-4">
            <img src={logo} alt="logo" width={110} />

          </div>
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            <li>
              <a
                href="#how-it-works"
                className="text-white/80 hover:text-blue-400 transition"
              >
                How It Works
              </a>
            </li>
            <li>
              <a
                href="#solution"
                className="text-white/80 hover:text-blue-400 transition"
              >
                Solutions
              </a>
            </li>
            <li>
              <a
                href="#beyond"
                className="text-white/80 hover:text-blue-400 transition"
              >
                Tools
              </a>
            </li>
            <li>
              <a
                href="#why-ryvit"
                className="text-white/80 hover:text-blue-400 transition"
              >
                Why Ryvit
              </a>
            </li>
          </ul>
          <div className="flex space-x-6">
            <a
              href="  https://github.com/ryvitOfficial"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-blue-400 transition"
            >
              <svg
                width="19"
                height="19"
                fill="#fff"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>GitHub</title>
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
            <a
              href="https://x.com/ryvitofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-blue-400 transition"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 1200 1227"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
                  fill="white"
                />
              </svg>
            </a>

            <a
              href="https://discord.gg/e2Mwa6Mz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-blue-400 transition"
            >
              <svg
                id="Discord-Logo"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 126.644 96"
                fill="#fff"
                width="22"
                height="22"
              >
                <path
                  id="Discord-Symbol-White"
                  d="M81.15,0c-1.2376,2.1973-2.3489,4.4704-3.3591,6.794-9.5975-1.4396-19.3718-1.4396-28.9945,0-.985-2.3236-2.1216-4.5967-3.3591-6.794-9.0166,1.5407-17.8059,4.2431-26.1405,8.0568C2.779,32.5304-1.6914,56.3725.5312,79.8863c9.6732,7.1476,20.5083,12.603,32.0505,16.0884,2.6014-3.4854,4.8998-7.1981,6.8698-11.0623-3.738-1.3891-7.3497-3.1318-10.8098-5.1523.9092-.6567,1.7932-1.3386,2.6519-1.9953,20.281,9.547,43.7696,9.547,64.0758,0,.8587.7072,1.7427,1.3891,2.6519,1.9953-3.4601,2.0457-7.0718,3.7632-10.835,5.1776,1.97,3.8642,4.2683,7.5769,6.8698,11.0623,11.5419-3.4854,22.3769-8.9156,32.0509-16.0631,2.626-27.2771-4.496-50.9172-18.817-71.8548C98.9811,4.2684,90.1918,1.5659,81.1752.0505l-.0252-.0505ZM42.2802,65.4144c-6.2383,0-11.4159-5.6575-11.4159-12.6535s4.9755-12.6788,11.3907-12.6788,11.5169,5.708,11.4159,12.6788c-.101,6.9708-5.026,12.6535-11.3907,12.6535ZM84.3576,65.4144c-6.2637,0-11.3907-5.6575-11.3907-12.6535s4.9755-12.6788,11.3907-12.6788,11.4917,5.708,11.3906,12.6788c-.101,6.9708-5.026,12.6535-11.3906,12.6535Z"
                />
              </svg>
            </a>
          </div>
        </div>
        <p className="text-white/60 text-sm mt-8">
          &copy; 2025 Ryvit. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
