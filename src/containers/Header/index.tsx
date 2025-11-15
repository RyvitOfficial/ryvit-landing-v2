import { useState } from 'react';

import CContainer from '../../components/CContainer';

import logo from '../../../public/images/logo.png';

interface NavLink {
  name: string;
  href: string;
  external?: boolean;
}

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks: NavLink[] = [
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Solutions', href: '#solution' },
    { name: 'Tools', href: '#beyond' },
    { name: 'Why Ryvit', href: '#why-ryvit' },
  ];

  return (
    <header className="fixed top-4 inset-x-0 w-full z-50 px-4 md:px-6">
      <CContainer reverse>
        <nav className="max-w-7xl mx-auto rounded-3xl border border-white/10 bg-background/60 backdrop-blur-xl shadow-lg px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex justify-center items-center">
              <a href="#hero">
                <img src={logo} alt="Ryvit Logo" width={100} />
              </a>
            </div>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="text-white/70 hover:text-white hover:bg-white/5 transition-all duration-200 px-4 py-2 rounded-lg text-sm font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA Button Desktop */}
            <div className="hidden md:block space-x-4 flex items-center">
              <a href="https://docs.ryvit.app" className='text-sm'>Documentation</a>

              <a
                href="https://panel.ryvit.app"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white text-sm font-semibold transition-all duration-300 shadow-lg shadow-blue-500/10 hover:shadow-blue-400/20"
              >
                Launch App
            
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white/70 hover:text-white focus:outline-none p-2"
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
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
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-white/10">
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      onClick={() => setIsOpen(false)}
                      className="block text-white/70 hover:text-white hover:bg-white/5 transition-all duration-200 px-4 py-3 rounded-lg text-base font-medium"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
                <li className="pt-2">
                  <a
                    href="https://panel.ryvit.app"
                    className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white text-base font-semibold"
                  >
                    Launch App
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </CContainer>
    </header>
  );
};

export default Header;
