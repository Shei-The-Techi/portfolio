import Image from "next/image";
import { site } from "@/lib/site";

type HeroBackgroundProps = {
  image?: string | null;
};

export function HeroBackground({ image }: HeroBackgroundProps) {
  const src = image === undefined ? site.heroImage : image;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {src ? (
        <>
          <Image
            src={src}
            alt=""
            fill
            preload
            sizes="100vw"
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-background/70" />
        </>
      ) : null}

      <svg
        viewBox="0 0 600 600"
        className="absolute -right-56 -top-44 h-[36rem] w-[36rem] animate-orbit sm:-right-32 sm:-top-56 sm:h-[50rem] sm:w-[50rem]"
      >
        <circle
          cx="300"
          cy="300"
          r="280"
          strokeWidth="1.5"
          className="fill-none stroke-brand-cyan/20"
        />
        <circle
          cx="300"
          cy="300"
          r="280"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="170 1589"
          className="fill-none stroke-brand-cyan"
        />
      </svg>

      <svg
        viewBox="0 0 600 600"
        className="absolute -right-24 -top-32 h-[26rem] w-[26rem] animate-orbit-reverse sm:-right-4 sm:-top-36 sm:h-[34rem] sm:w-[34rem]"
      >
        <circle
          cx="300"
          cy="300"
          r="200"
          strokeWidth="1.5"
          className="fill-none stroke-brand-offwhite/10"
        />
        <circle
          cx="300"
          cy="300"
          r="200"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="110 1147"
          className="fill-none stroke-brand-offwhite/50"
        />
      </svg>
    </div>
  );
}
