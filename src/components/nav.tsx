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
    "block lg:inline-flex lg:items-center lg:justify-center mt-2 lg:mt-0 px-3 py-1.5 text-sm font-medium rounded-full transition-colors hover:text-amber-300 hover:bg-white/5";

  return (
    <header className="sticky top-0 z-30 backdrop-blur-lg bg-black/70 border-b border-white/10">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
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
          className="inline-flex items-center justify-center rounded-full border border-white/20 p-2 text-white hover:border-amber-300 hover:text-amber-300 lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          <img src={hamburger} alt="Menu icon" width={22} height={22} />
        </button>

        <div
          className={`w-full lg:w-auto lg:flex lg:items-center lg:gap-1 ${
            open ? "mt-4 lg:mt-0" : "hidden lg:flex"
          }`}
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-end gap-1 lg:gap-2 ml-auto">
            <a href="#aboutUs" className={linkBaseClasses}>
              About us
            </a>
            <a href="#menu" className={linkBaseClasses}>
              Menu
            </a>
            <a href="#reservations" className={linkBaseClasses}>
              Reservations
            </a>
            <a
              href="tel:01924565075"
              className="mt-3 lg:mt-0 inline-flex items-center justify-center rounded-full bg-amber-400 px-4 py-1.5 text-sm font-semibold text-black shadow-sm shadow-amber-500/40 hover:bg-amber-300 transition-colors"
            >
              Book a table
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};
