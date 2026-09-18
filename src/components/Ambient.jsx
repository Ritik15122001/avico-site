/** Fixed background blobs + texture. Purely decorative, never interactive. */
export function Ambient() {
  return (
    <>
      <div className="ambient" aria-hidden="true">
        <div className="tex" style={{ backgroundImage: "url('/images/general/texture.webp')" }} />
        <span className="b1" />
        <span className="b2" />
        <span className="b3" />
      </div>
      <div className="vignette" aria-hidden="true" />
    </>
  );
}
