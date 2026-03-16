interface ImageFullWidthProps {
  img: string;
}

export const ImageFullWidth = ({ img }: ImageFullWidthProps) => {
  return (
    <section className="border-t border-b border-white/5 bg-black">
      <div
        className="md:h-96 h-64 bg-center lg:bg-fixed bg-cover relative"
        style={{
          backgroundImage: `url('${img}')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-black/80" />
      </div>
    </section>
  );
};
