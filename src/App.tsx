import { Nav } from "./components/nav";
import { Footer } from "./components/footer";
import { ImageFullWidth } from "./components/imageFullWidth";
import { Reservations } from "./components/reservations";
import { TextWithPhoto } from "./components/textWithPhoto";
import adanakebab from "../public/zazakebabnew.jpg";
import kebab from "../public/zazakebab.jpg";
import baklava2 from "../public/zazabaklava2.jpg";
import kebab3 from "../public/zazakebab3.jpg";
import coals2 from "../public/zazacoals2.jpg";

const aboutUsContent = (
  <>
    <p>
      Welcome to Aya, where a passion for authentic Turkish cuisine meets the
      heart of Wakefield, England.
    </p>
    <p className="mt-2">
      At Aya, we are more than just a restaurant; we are a gateway to the rich
      and diverse flavors of Turkey. Our journey began with a dream to share the
      warmth, hospitality, and exquisite flavors of Turkey with the local
      community.
    </p>
    <p className="mt-2">
      Our dedicated team of chefs, with roots deeply entrenched in Turkish
      culinary traditions, painstakingly crafts each dish to perfection. From
      the vibrant colors of our meze platters to the sizzle of our skewers on
      the grill, every detail is a reflection of our commitment to authenticity.
    </p>
    <p className="mt-2">
      We source the finest ingredients and spices to ensure that each bite
      transports you to the bustling streets of Istanbul or the serene shores of
      the Mediterranean.
    </p>
    <p className="mt-2">
      At Aya, we believe that food is not just sustenance; it's an experience.
      It's about sharing stories, laughter, and creating memories around a table
      filled with delicious dishes. Our restaurant is designed to immerse you in
      the culture and ambiance of Turkey.
    </p>
  </>
);

const menuContent = (
  <>
    <p>
      Our menu at Aya is a culinary odyssey through the diverse and vibrant
      flavors of Turkey. From our savoury kebabs, marinated to perfection and
      cooked over an open flame, to our indulgent baklava dripping with honey
      and nuts, each dish tells a story of tradition and craftsmanship.
    </p>
    <p className="mt-2">
      Explore our enticing meze selection, where fresh, local ingredients are
      transformed into an array of colorful and flavorful small plates. Dive
      into our aromatic stews and richly spiced rice dishes that capture the
      essence of Turkish home cooking.
    </p>
    <p className="mt-2">
      Whether you're craving the tender embrace of slow-cooked lamb or the
      freshness of Mediterranean salads, our menu invites you to embark on a
      tantalizing journey that celebrates the heart and soul of Turkish cuisine.
    </p>
    <div className="">
      <p className="mt-2 mb-6">
        Click the icons below to see our starters, mains and deserts.
      </p>
      <a
        className="inline-flex text-xl cursor-pointer mr-2"
        href="/aya-main-menu-updated.pdf"
        target="_blank"
        rel="noreferrer"
      >
        <i
          className="fa-solid fa-utensils fa-2x"
          style={{ color: "#ffffff" }}
        />
      </a>
      <a
        className="inline-flex text-xl cursor-pointer ml-2"
        href="/aya-desert-menu-updated.pdf"
        target="_blank"
        rel="noreferrer"
      >
        <i
          className="fa-solid fa-ice-cream fa-2x"
          style={{ color: "#ffffff" }}
        />
      </a>
    </div>
  </>
);

const reservationContent = (
  <>
    <p>
      Reserving your table at Aya is easy. You can make a reservation with us
      either by phone or email, whichever suits your preference. Simply give us
      a call by clicking the phone icon below or using the number located at the
      bottom of the page. Our friendly staff will assist you in selecting the
      perfect date and time for your dining experience.
    </p>
    <p className="mt-2">
      Alternatively, you can drop us an email at reservations@ayarestaurant.com.
      We will promptly confirm your booking, ensuring that your visit to Aya is
      a memorable one. We can't wait to welcome you to our restaurant and offer
      you an authentic taste of Turkey with warm hospitality and exquisite
      flavors.
    </p>
  </>
);

export const App = () => {
  return (
    <>
      <Nav />
      {/* Hero */}
      <section
        className="relative overflow-hidden bg-gradient-to-b from-black via-black/90 to-zinc-950"
        aria-labelledby="hero-heading"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-60 mix-blend-screen"
          style={{
            backgroundImage: `url('${kebab}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
          <div className="max-w-2xl animate-fade-in-up">
            <p className="text-sm font-semibold tracking-[0.25em] text-amber-300 uppercase">
              Authentic Turkish Cuisine
            </p>
            <h1
              id="hero-heading"
              className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white"
            >
              Aya, Turkish cuisine in the heart of Wakefield.
            </h1>
            <p className="mt-6 text-base sm:text-lg text-white max-w-xl">
              Flame-grilled kebabs, vibrant meze and warm Turkish hospitality.
              Join us for dinner, celebrations or a cosy night with friends and
              family.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="/aya-main-menu-updated.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-amber-500/40 hover:bg-amber-300 transition-colors"
              >
                Main menu
              </a>
              <a
                href="/aya-desert-menu-updated.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-zinc-600 px-6 py-3 text-sm font-semibold text-white hover:border-amber-400 hover:text-amber-300 transition-colors"
              >
                Desserts menu
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <div id="aboutUs" className="animate-fade-in-up animation-delay-200">
        <TextWithPhoto
          title="About Aya"
          content={aboutUsContent}
          img={adanakebab}
          imgPosition="right"
        />
      </div>

      {/* Feature image */}
      <ImageFullWidth img={baklava2} />

      {/* Menu */}
      <div id="menu" className="animate-fade-in-up animation-delay-400">
        <TextWithPhoto
          title="Our Menu"
          img={kebab3}
          content={menuContent}
          imgPosition="left"
        />
      </div>

      {/* Flames image */}
      <ImageFullWidth img={coals2} />

      {/* Reservations */}
      <div id="reservations" className="animate-fade-in-up animation-delay-400">
        <Reservations title="Reservations" content={reservationContent} />
      </div>

      {/* Footer / directions */}
      <div id="directions">
        <Footer />
      </div>
    </>
  );
};
