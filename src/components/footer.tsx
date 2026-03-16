export const Footer = () => {
  return (
    <footer className="mt-auto border-t border-white/5 bg-black/95 py-10 text-sm text-zinc-300">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:px-6 lg:px-8 md:flex-row md:items-start">
        <div className="md:w-1/3 flex flex-col items-start gap-3">
          <h4 className="text-white text-lg font-semibold tracking-tight">
            Visit Aya
          </h4>
          <address className="not-italic text-zinc-300">
            80 Kirkgate,
            <br />
            Wakefield, WF1 1TB
          </address>
          <p className="text-xs text-zinc-400 max-w-sm">
            Find us in the centre of Wakefield. Click the map icon for
            directions, and follow us on social for the latest updates.
          </p>
          <div className="mt-3 flex items-center gap-4">
            <a
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-zinc-900/70 hover:border-amber-400 hover:text-amber-300 transition-colors"
              target="_blank"
              rel="noreferrer"
              href="https://www.google.com/maps/place/80+Kirkgate,+Wakefield+WF1+1TB/@53.6819917,-1.4964279,17z/data=!3m1!4b1!4m6!3m5!1s0x487966ff9bdb0fc3:0xeb050ee68a8d09ae!8m2!3d53.6819886!4d-1.493853!16s%2Fg%2F11ffshrpk0?entry=ttu"
            >
              <i className="fa-solid fa-map-pin" />
            </a>
            <a
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-zinc-900/70 hover:border-amber-400 hover:text-amber-300 transition-colors"
              href="https://www.instagram.com/ayarestaurant2023/?next=%2F"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-instagram" />
            </a>
            <a
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-zinc-900/70 hover:border-amber-400 hover:text-amber-300 transition-colors"
              href="#"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-facebook-f" />
            </a>
          </div>
        </div>

        <div className="md:w-1/3">
          <h4 className="text-white text-lg font-semibold tracking-tight">
            Opening hours
          </h4>
          <ul className="mt-3 space-y-1 text-sm">
            <li className="flex justify-between gap-4">
              <span>Monday – Friday</span>
              <span className="text-zinc-400">10am – 11pm</span>
            </li>
            <li className="flex justify-between gap-4">
              <span>Saturday</span>
              <span className="text-zinc-400">10am – late</span>
            </li>
            <li className="flex justify-between gap-4">
              <span>Sunday</span>
              <span className="text-zinc-400">10am – late</span>
            </li>
          </ul>
        </div>

        <div className="md:w-1/3">
          <h4 className="text-white text-lg font-semibold tracking-tight">
            Contact
          </h4>
          <div className="mt-3 flex flex-col gap-1 text-sm">
            <a className="hover:text-amber-300 transition-colors" href="tel:01924565075">
              01924 565075
            </a>
            <a
              className="hover:text-amber-300 transition-colors"
              href="mailto:reservations@ayarestaurant.co.uk"
            >
              reservations@ayarestaurant.co.uk
            </a>
            <a
              className="hover:text-amber-300 transition-colors"
              href="mailto:contact@ayarestaurant.co.uk"
            >
              contact@ayarestaurant.co.uk
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-white/5 pt-4 text-center text-[11px] text-zinc-500">
        <span>© {new Date().getFullYear()} Aya Restaurant. All rights reserved.</span>
      </div>
    </footer>
  );
};
