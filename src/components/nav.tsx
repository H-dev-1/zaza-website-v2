import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import hamburger from "../../public/hamburger.svg";
import logo from "../../public/logonew.jpg";

export const Nav = () => {
  const isMobile = useMediaQuery({ maxWidth: 1023 });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!isMobile) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [isMobile]);

  const linkBaseClasses =
    "block w-full text-center lg:w-auto lg:inline-flex lg:items-center lg:justify-center mt-1.5 lg:mt-0 px-3 py-2 text-sm font-medium rounded-full transition-colors hover:text-amber-300 hover:bg-white/5";

  const handleNavClick = () => {
    if (isMobile) {
      setOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-30 backdrop-blur-lg bg-black/80 border-b border-white/10">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 flex-shrink-0">
          <img
            alt="Aya restaurant logo"
            src={logo}
            className="h-12 w-auto border border-white/10 shadow-md rounded-md object-contain bg-black"
          />
          <div className="hidden sm:flex flex-col">
            <span className="text-sm font-semibold tracking-[0.25em] uppercase text-amber-300">
              Aya
            </span>
            <span className="text-xs text-zinc-300">
              Turkish Restaurant
            </span>
          </div>
        </div>

        <button
          aria-label="Toggle navigation"
          className="inline-flex items-center justify-center rounded-full border border-white/25 p-2 text-white hover:border-amber-300 hover:text-amber-300 lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          <img src={hamburger} alt="Menu icon" width={22} height={22} />
        </button>

        <div
          className={`${
            open
              ? "absolute inset-x-0 top-full mt-2 px-4 pb-3 lg:static lg:mt-0 lg:px-0"
              : "hidden lg:block"
          }`}
        >
          <div className="rounded-2xl border border-white/10 bg-black/95 backdrop-blur-xl shadow-xl shadow-black/40 lg:border-0 lg:bg-transparent lg:shadow-none">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-end gap-1.5 lg:gap-2 px-3 py-3 lg:px-0 lg:py-0">
              <a href="#aboutUs" className={linkBaseClasses} onClick={handleNavClick}>
                About us
              </a>
              <a href="#menu" className={linkBaseClasses} onClick={handleNavClick}>
                Menu
              </a>
              <a
                href="#reservations"
                className={linkBaseClasses}
                onClick={handleNavClick}
              >
                Reservations
              </a>
              <a
                href="tel:01924565075"
                className="mt-1.5 lg:mt-0 inline-flex items-center justify-center rounded-full bg-amber-400 px-4 py-2 text-sm font-semibold text-black shadow-sm shadow-amber-500/40 hover:bg-amber-300 transition-colors w-full lg:w-auto text-center"
                onClick={handleNavClick}
              >
                Book a table
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
