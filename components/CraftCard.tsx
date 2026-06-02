"use client";

import { useRef, useState } from "react";

type Props = {
  video: string;
  poster?: string;
  leftText?: string;
  rightText?: string;
  href?: string;
  buttonText?: string;
  variant?: "fixed" | "fluid";
};

export default function CraftCard({
  video,
  poster,
  leftText,
  rightText,
  href,
  buttonText = "View App",
  variant = "fixed",
}: Props) {
  const hasOverlay = leftText || rightText;
  const hasLink = !!href;
  const isFluid = variant === "fluid";
  const [loaded, setLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div
      className={[
        "relative overflow-hidden rounded-2xl bg-zinc-900 border border-white/10 shadow-sm",
        isFluid ? "break-inside-avoid mb-4" : "aspect-[16/14]",
      ].join(" ")}
    >
      {/* Placeholder blur mientras carga */}
      {!loaded && (
        <div
          className="absolute inset-0 z-10"
          style={{
            backgroundImage: poster ? `url(${poster})` : undefined,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: poster ? undefined : "#18181b",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
          }}
        >
          {/* Capa de blur sobre la imagen */}
          {poster && (
            <div className="absolute inset-0 backdrop-blur-md bg-black/20" />
          )}
        </div>
      )}

      {/* Video */}
      <video
        ref={videoRef}
        className={[
          "transition-opacity duration-500",
          isFluid
            ? "block w-full h-auto"
            : "absolute inset-0 h-full w-full object-cover",
          loaded ? "opacity-100" : "opacity-0",
        ].join(" ")}
        autoPlay
        muted
        loop
        playsInline
        poster={poster}
        onCanPlay={() => setLoaded(true)}
      >
        <source src={video} type="video/mp4" />
      </video>

      {/* Gradient overlay */}
      {hasOverlay && (
        <div
          className={[
            "absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-black/60 via-black/30 to-transparent",
            hasLink ? "h-44" : "h-32",
          ].join(" ")}
        />
      )}

      {/* Text overlay */}
      {hasOverlay && (
        <div
          className={[
            "absolute left-0 right-0 p-4 z-20 flex items-end justify-between",
            hasLink ? "bottom-12" : "bottom-0",
          ].join(" ")}
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
