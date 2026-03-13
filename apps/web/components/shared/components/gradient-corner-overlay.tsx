export function GradientCornerOverlay({ height }: { height: number }) {
  return (
    <div
      className="absolute top-0 left-0 w-full"
      style={{
        height: height * 2.5,
        backgroundImage:
          'linear-gradient(to bottom, var(--color-body) 40%, transparent 100%)',
      }}
    >
      <div
        className="dark:border-dark-300 absolute top-0 left-1/2 w-1/2 rounded-bl border-b border-l border-gray-400"
        style={{ height: height }}
      />
    </div>
  );
}
