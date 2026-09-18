import { useContentStore } from '../store/contentStore';

export function Marquee() {
  const marqueeItems = useContentStore((s) => s.marqueeItems);
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <div className="marquee border-y border-line py-4" aria-hidden="true">
      <div className="marquee-track">
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-8 whitespace-nowrap pr-8 font-display text-base font-bold tracking-[-0.02em] text-muted2 sm:gap-13 sm:pr-13 sm:text-[1.05rem]"
          >
            {item}
            <span className="h-1.5 w-1.5 flex-none rounded-full bg-accent opacity-60" />
          </span>
        ))}
      </div>
    </div>
  );
}
