import { Text } from "./text";

interface TextWithPhotoProps {
  title: string;
  content: string | JSX.Element;
  img: string;
  imgPosition: "left" | "right";
}

export const TextWithPhoto = ({
  title,
  content,
  img,
  imgPosition,
}: TextWithPhotoProps) => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-b from-zinc-950 via-black to-zinc-950">
      <div
        className={`mx-auto flex max-w-6xl flex-col gap-10 md:gap-16 ${
          imgPosition === "left" ? "md:flex-row-reverse" : "md:flex-row"
        } items-center`}
      >
        <div className="w-full md:w-1/2">
          <Text title={title} content={content} />
        </div>
        <div className="w-full md:w-1/2">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/40 shadow-2xl shadow-black/60">
            <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-amber-500/10" />
            <img
              className="relative block h-full w-full object-cover"
              src={img}
              alt={title}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
