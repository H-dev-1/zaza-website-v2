interface TextProps {
  content: string | JSX.Element;
  title: string;
  align?: "left" | "center";
}

export const Text = ({ content, title, align = "left" }: TextProps) => {
  const alignment =
    align === "center"
      ? "text-center items-center"
      : "text-left items-start md:text-left";

  return (
    <div className={`mx-auto flex max-w-2xl flex-col ${alignment}`}>
      <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-4">
        {title}
      </h2>
      <div className="space-y-3 text-sm sm:text-base leading-relaxed text-zinc-300">
        {content}
      </div>
    </div>
  );
};
