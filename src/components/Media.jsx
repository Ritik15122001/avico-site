import { useState } from 'react';
import { ImageOff } from 'lucide-react';
import { cx } from '../lib/cx';

function Missing({ className }) {
  return (
    <div
      className={cx(
        'flex h-full w-full flex-col items-center justify-center gap-2 border border-dashed border-line',
        'bg-linear-160 from-[var(--missA)] to-[var(--missB)] px-4 text-center',
        className,
      )}
    >
      <ImageOff size={18} className="text-muted2" aria-hidden="true" />
      <span className="font-mono text-[0.6rem] uppercase tracking-[0.1em] text-muted2">
        Image to be supplied
      </span>
    </div>
  );
}

/**
 * Product plate — a soft studio backdrop for the transparent product cut-outs
 * (see scripts/process-products.mjs). Fixed ratio plus a grounding shadow means
 * every product in a grid reads at the same scale and sits on the same surface.
 */
export function Plate({ src, alt, caption, ratio = 'aspect-[4/3]', eager = false, pad = 'p-[11%]', className }) {
  const [failed, setFailed] = useState(!src);

  return (
    <figure
      className={cx(
        'relative m-0 overflow-hidden rounded-[var(--radius-plate)]',
        'bg-[radial-gradient(120%_95%_at_50%_6%,var(--plateA),var(--plateB)_72%)]',
        'ring-1 ring-inset ring-[color-mix(in_srgb,var(--tint)_6%,transparent)]',
        ratio,
        className,
      )}
    >
      {failed ? (
        <Missing className="rounded-[var(--radius-plate)]" />
      ) : (
        <>
          {/* grounding shadow: reads as a surface rather than a floating cut-out */}
          <span
            aria-hidden="true"
            className="absolute bottom-[12%] left-1/2 h-[6%] w-1/2 -translate-x-1/2 rounded-[50%] bg-[color-mix(in_srgb,var(--tint)_26%,transparent)] blur-[10px] transition-all duration-500 group-hover:w-[56%] group-hover:opacity-80"
          />
          <img
            src={src}
            alt={alt}
            loading={eager ? 'eager' : 'lazy'}
            decoding="async"
            onError={() => setFailed(true)}
            className={cx(
              'relative h-full w-full object-contain transition-transform duration-500 ease-out',
              'drop-shadow-[0_10px_18px_color-mix(in_srgb,var(--tint)_18%,transparent)]',
              'group-hover:-translate-y-1 group-hover:scale-[1.045]',
              pad,
            )}
          />
          {caption && (
            <figcaption className="absolute bottom-2 left-2 rounded-md border border-[color-mix(in_srgb,var(--tint)_8%,transparent)] bg-[var(--plateA)]/85 px-2 py-0.5 font-mono text-[0.56rem] uppercase tracking-[0.13em] text-[var(--plateInk)] backdrop-blur-sm">
              {caption}
            </figcaption>
          )}
        </>
      )}
    </figure>
  );
}

/** Editorial/industry photography — `object-cover` with a scrim for text legibility. */
export function Shot({ src, alt, ratio = 'aspect-[16/9]', className }) {
  const [failed, setFailed] = useState(!src);

  return (
    <figure className={cx('relative m-0 overflow-hidden bg-deep', ratio, className)}>
      {failed ? (
        <Missing />
      ) : (
        <>
          <img
            src={src}
            alt={alt}
            loading="lazy"
            decoding="async"
            onError={() => setFailed(true)}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
          />
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-linear-0 from-[color-mix(in_srgb,var(--sh)_34%,transparent)] to-transparent to-62%"
          />
        </>
      )}
    </figure>
  );
}
