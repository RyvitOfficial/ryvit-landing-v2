import { useState } from 'react';

import CContainer from '../../components/CContainer';

import logo from '../../../public/images/logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 inset-x-0 w-full z-50 py-4 px-6 md:px-12 bg-background/90 backdrop-blur-lg border-b border-border">
      <CContainer reverse>
        <nav className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex justify-center items-center space-x-4">
            <img src={logo} alt="logo" width={40} />

            <p className="text-2xl font-bold text-white">Ryvit</p>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
          <ul
            className={`md:flex md:space-x-8 ${
              isOpen
                ? 'block absolute top-full left-0 w-full bg-[#0A0A0F] py-4 px-6 text-center'
                : 'hidden'
            }`}
          >
            <li>
              <a
                href="#hero"
                className="text-white hover:text-blue-400 transition block py-2 md:py-0"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#problem"
                className="text-white hover:text-blue-400 transition block py-2 md:py-0"
              >
                Problem
              </a>
            </li>
            <li>
              <a
                href="#solution"
                className="text-white hover:text-blue-400 transition block py-2 md:py-0"
              >
                Solutions
              </a>
            </li>
            <li>
              <a
                href="#beyond-core"
                className="text-white hover:text-blue-400 transition block py-2 md:py-0"
              >
                More Tools
              </a>
            </li>
            <li>
              <a
                href="#why-ryvit"
                className="text-white hover:text-blue-400 transition block py-2 md:py-0"
              >
                Why Ryvit?
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-white hover:text-blue-400 transition block py-2 md:py-0"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </CContainer>
    </header>
  );
};

export default Header;
