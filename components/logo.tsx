export function Logo({ className, height = 32 }: { className?: string; height?: number }) {
  const width = Math.round(height * (1448 / 260));
  return (
    <img
      src="/logo.svg"
      alt="TurboSites.io"
      width={width}
      height={height}
      className={className}
    />
  );
}
