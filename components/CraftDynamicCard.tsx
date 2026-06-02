type Props = {
  video: string;
  leftText?: string;
  rightText?: string;
};

export default function CraftCard({ video, leftText, rightText }: Props) {
  const hasOverlay = leftText || rightText;

  return (
    <div
      className="
        relative
        break-inside-avoid
        mb-4
        overflow-hidden
        rounded-2xl
        bg-zinc-900
        border border-white/10
        shadow-sm
      "
    >
      <video
        className="
          block
          w-full
          h-auto
        "
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={video} type="video/mp4" />
      </video>

      {hasOverlay && (
        <>
          <div
            className="
              absolute
              inset-x-0
              bottom-0
              h-32
              bg-gradient-to-t
              from-black/60
              via-black/20
              to-transparent
            "
          />

          <div
            className="
              absolute
              bottom-0
              left-0
              right-0
              p-4
              flex
              items-end
              justify-between
            "
          >
            <span className="text-[13px] font-medium text-white">
              {leftText}
            </span>

            <span className="text-[13px] font-medium text-white/70">
              {rightText}
            </span>
          </div>
        </>
      )}
    </div>
  );
}
