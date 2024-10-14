import { headerLogo } from "../assets/images";
// import { hamburgerOpen, hamburgerClose } from "../assets/icons";
import { navLinks } from "../constants";
import { useState } from 'react'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen); // Toggle the state
  };

  return (
    <header className="header-container">
      <nav className="nav">
        {/* LOGO */}
        <a href="/">
          <img src={ headerLogo } alt="glowelite-logo" width={160} />
        </a>
        {/* Nav Links */}
        <ul className="flex gap-12 max-xl:gap-7 max-[1100px]:gap-3 max-lg:hidden">
        {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="menu-items"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        {/* Button */}
        <a href="#" className="cta-button max-lg:hidden">Make Appointment</a>
      </nav>
      {/* Hamburger Icon */}
      <div>
        <button
          onClick={handleMenuToggle}
          className="{`absolute right-0 top-0 m-2 flex h-[48px] w-[52px] flex-col items-center justify-center shadow transition-all duration-300 ease-in-out focus:outline-none lg:hidden ${isOpen ? 'open' : ''}`}">
          <span className="hamburger-line top"></span>
          <span className="hamburger-line middle"></span>
          <span className="hamburger-line bottom"></span>
        </button>
        {/* Nav links and button */}
        <div className={`sidebar flex flex-col ${isOpen ? 'open' : ''}`}>
          <ul className="flex-1 flex-col justify-center items-center space-y-4">
          {navLinks.map((item) => (
              <li key={item.label}>
                <a
                href={item.href}
                onClick={handleMenuToggle}
                className={`font-[afacad] leading-normal uppercase font-semibold text-headerTxt hover:text-bodyTxt hover:border-primary hover:py-1 hover:border-y-2 ${isOpen ? 'open' : ''}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          {/* Button */}
          <a href="#" onClick={handleMenuToggle} className={`bg-primary py-2 px-4 rounded-sm hover:bg-white hover:border-2 hover:border-primary hover:text-primary font-[afacad] font-semibold text-white uppercase lg:hidden ${isOpen ? 'open' : ''}`}>Make Appointment</a>
          <div className={`overlay flex flex-col items-center justify-center cursor-pointer ${isOpen ? 'open' : ''}`} onClick={handleMenuToggle}>
            <p className="font-montserrat font-semibold m-2 px-1.5 text-lg">X</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
