type Props = {
  video: string;
  leftText?: string;
  rightText?: string;
  href?: string;
  buttonText?: string;
};

export default function CraftDynamicCard({
  video,
  leftText,
  rightText,
  href,
  buttonText = "View App",
}: Props) {
  const hasOverlay = leftText || rightText;
  const hasLink = !!href;

  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-2xl
        bg-zinc-900
        border border-white/10
        shadow-sm
        aspect-[16/14]
      "
    >
      {/* Video */}
      <video
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
        "
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={video} type="video/mp4" />
      </video>

      {/* Gradient overlay (más alto si hay botón) */}
      {hasOverlay && (
        <div
          className={`
            absolute
            inset-x-0
            bottom-0
            bg-gradient-to-t
            from-black/60
            via-black/30
            to-transparent
            ${hasLink ? "h-44" : "h-32"}
          `}
        />
      )}

      {/* Text overlay */}
      {hasOverlay && (
        <div
          className={`
            absolute
            left-0
            right-0
            p-4
            flex
            items-end
            justify-between
            ${hasLink ? "bottom-12" : "bottom-0"}
          `}
        >
          <span className="text-[13px] font-medium text-white">{leftText}</span>

          <span className="text-[13px] font-medium text-white/70">
            {rightText}
          </span>
        </div>
      )}

      {/* Button */}
      {hasLink && (
        <div className="absolute bottom-1 left-0 right-0 px-1">
          <a
            href={href}
            className="
              w-full
              flex
              items-center
              justify-center
              rounded-[10px]
              bg-[#232323]
              text-white
              text-sm
              font-medium
              py-3
              transition
              hover:bg-[#2e2e2e]
            "
          >
            {buttonText}
          </a>
        </div>
      )}
    </div>
  );
}
