import { useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Container } from './Layout';
import { cx } from '../lib/cx';
import { Logo } from './Logo';
import { navLinks } from '../data/navigation';
import { useUIStore } from '../store/uiStore';
import { useScrolled } from '../hooks/useScrolled';
import { useReducedMotion } from '../hooks/useReducedMotion';

const pill = 'rounded-full px-4 py-2.5 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.09em] transition';

export function Navbar() {
  const scrolled = useScrolled(40);
  const menuOpen = useUIStore((s) => s.menuOpen);
  const setMenuOpen = useUIStore((s) => s.setMenuOpen);
  const { pathname } = useLocation();
  const reduced = useReducedMotion();

  useEffect(() => setMenuOpen(false), [pathname, setMenuOpen]);

  // The home hero is dark footage, so until the header gains its own backdrop
  // the nav has to invert to stay legible against it.
  const onDark = pathname === '/' && !scrolled && !menuOpen;

  // Lock the page behind the open mobile sheet, and close it on Escape.
  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false);
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener('keydown', onKey);
    };
  }, [menuOpen, setMenuOpen]);

  return (
    <header
      className={cx(
        'fixed inset-x-0 top-0 z-50 transition-[padding,background-color,border-color] duration-300',
        scrolled || menuOpen
          ? 'border-b border-line bg-[var(--glassSoft)] py-2 backdrop-blur-xl backdrop-saturate-150'
          : 'border-b border-transparent py-3.5',
      )}
    >
      <Container className="flex items-center gap-4">
        <Logo onDark={onDark} />

        <nav
          aria-label="Primary"
          className={cx(
            'ml-auto hidden items-center gap-0.5 rounded-full border p-1.5 backdrop-blur-xl lg:flex',
            onDark ? 'border-white/15 bg-white/10' : 'border-line bg-[var(--glassSoft)]',
          )}
        >
          {navLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                cx(
                  pill,
                  isActive
                    ? 'bg-linear-150 from-primary2 to-primary text-on-accent glow-accent-sm'
                    : onDark
                      ? 'text-white/70 hover:bg-white/15 hover:text-white'
                      : 'text-muted hover:bg-[color-mix(in_srgb,var(--tint)_9%,transparent)] hover:text-ink',
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-0">
          <Link
            to="/contact"
            className={cx(
              pill,
              'hidden h-11 items-center border xl:inline-flex',
              onDark
                ? 'border-white/30 bg-white/10 text-white backdrop-blur-md hover:border-white/60 hover:bg-white/20'
                : 'border-line2 text-ink hover:border-primary2 hover:bg-[color-mix(in_srgb,var(--tint)_10%,transparent)]',
            )}
          >
            Get a quote
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className={cx(
              'flex h-11 w-11 items-center justify-center rounded-full border backdrop-blur-md transition lg:hidden',
              onDark
                ? 'border-white/25 bg-white/10 text-white hover:border-white/60'
                : 'border-line bg-[var(--glassSoft)] text-ink hover:border-primary2',
            )}
          >
            {menuOpen ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={reduced ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={reduced ? undefined : { opacity: 0, height: 0 }}
            transition={{ duration: 0.26, ease: [0.2, 0.9, 0.25, 1] }}
            className="overflow-hidden lg:hidden"
          >
            <Container className="pb-4 pt-3">
              <nav aria-label="Mobile" className="glass flex flex-col gap-1 p-2">
                {navLinks.map((l) => (
                  <NavLink
                    key={l.to}
                    to={l.to}
                    end={l.to === '/'}
                    className={({ isActive }) =>
                      cx(
                        'flex min-h-12 items-center justify-center rounded-full px-4 font-sans text-[0.78rem] font-semibold uppercase tracking-[0.09em] transition',
                        isActive
                          ? 'bg-linear-150 from-primary2 to-primary text-on-accent'
                          : 'text-muted hover:bg-[color-mix(in_srgb,var(--tint)_9%,transparent)] hover:text-ink',
                      )
                    }
                  >
                    {l.label}
                  </NavLink>
                ))}
                <Link
                  to="/contact"
                  className="mt-1 flex min-h-12 items-center justify-center rounded-full border border-line2 px-4 font-sans text-[0.78rem] font-bold uppercase tracking-[0.09em] text-ink"
                >
                  Get a quote
                </Link>
              </nav>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
