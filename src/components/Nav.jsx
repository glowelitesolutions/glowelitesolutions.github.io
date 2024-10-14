import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import { useState, useEffect } from 'react'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen); // Toggle the state
  };

  // Function to check scroll position
  const handleScroll = () => {
    // Hide button when you scroll past the header (header height is 64px in this case)
    if (window.scrollY > 64) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  // Add scroll event listener when component mounts
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
        {/* Floating button */}
        {isVisible && (
          <button className="hamburger" onClick={handleMenuToggle}>
            <div className={`hamburger-button ${isOpen ? 'open' : ''}`}>
              <span className="hamburger-line top"></span>
              <span className="hamburger-line middle"></span>
              <span className="hamburger-line bottom"></span>
            </div>
          </button>
        )}
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
        </div>
      </div>
    </header>
  );
};

export default Nav;
