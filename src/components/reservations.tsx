import { Text } from "./text";

interface ReservationsProps {
  title: string;
  content: string | JSX.Element;
}

export const Reservations = ({ title, content }: ReservationsProps) => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-b from-black via-zinc-950 to-black">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col gap-8 md:gap-10 md:flex-row md:items-stretch">
          <div className="md:w-1/2">
            <Text title={title} content={content} align="left" />
          </div>
          <div className="md:w-1/2 w-full">
            <div className="flex flex-col gap-4">
              <a
                className="group flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-zinc-900/60 px-5 py-5 text-sm text-zinc-200 shadow-lg shadow-black/40 hover:border-amber-400 hover:text-amber-200 transition-colors"
                href="mailto:reservations@ayarestaurant.co.uk"
              >
                <i className="fa-solid fa-envelope fa-xl mb-3" />
                <span className="font-medium">Email bookings</span>
                <span className="mt-1 text-[11px] text-zinc-400 text-center break-all">
                  reservations@ayarestaurant.co.uk
                </span>
              </a>
              <a
                className="group flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-zinc-900/60 px-5 py-5 text-sm text-zinc-200 shadow-lg shadow-black/40 hover:border-amber-400 hover:text-amber-200 transition-colors"
                href="tel:01924565075"
              >
                <i className="fa-solid fa-phone fa-xl mb-3" />
                <span className="font-medium">Call us</span>
                <span className="mt-1 text-[11px] text-zinc-400">
                  01924 565075
                </span>
              </a>
              <a
                className="group flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-zinc-900/60 px-5 py-5 text-sm text-zinc-200 shadow-lg shadow-black/40 hover:border-amber-400 hover:text-amber-200 transition-colors"
                href="https://www.google.com/maps/place/80+Kirkgate,+Wakefield+WF1+1TB/@53.6819917,-1.4964279,17z/data=!3m1!4b1!4m6!3m5!1s0x487966ff9bdb0fc3:0xeb050ee68a8d09ae!8m2!3d53.6819886!4d-1.493853!16s%2Fg%2F11ffshrpk0?entry=ttu"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-solid fa-map-location-dot fa-xl mb-3" />
                <span className="font-medium">Find us</span>
                <span className="mt-1 text-[11px] text-zinc-400 text-center">
                  80 Kirkgate, Wakefield WF1 1TB
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
