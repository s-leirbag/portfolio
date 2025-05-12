type Props = {
  count: number;
  size: number;
  className?: string;
  svgs: React.ReactNode[];
};

const SvgCollage = ({ count, size, className = "", svgs }: Props) => {
  type Icon = {
    x: number;
    y: number;
  };

  function generateClusteredIcons(N: number, radius: number): Icon[] {
    const icons: Icon[] = [];
    const maxAttempts = 100;

    const isOverlapping = (x: number, y: number): boolean => {
      for (const icon of icons) {
        const dx = icon.x - x;
        const dy = icon.y - y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 2 * radius) {
          return true;
        }
      }
      return false;
    };

    function isPointInsideEllipse(
      x: number,
      y: number,
      a: number,
      b: number
    ): boolean {
      const value = (x * x) / (a * a) + (y * y) / (b * b);
      return value < 1;
    }

    icons.push({ x: 0, y: 0 });

    while (icons.length < N) {
      let attempts = 0;
      let placed = false;

      while (attempts < maxAttempts && !placed) {
        const base = icons[Math.floor(Math.random() * icons.length)];
        const angle = Math.random() * 2 * Math.PI;
        const distance = 2 * radius;
        const x = base.x + Math.cos(angle) * distance;
        const y = base.y + Math.sin(angle) * distance;

        if (
          !isOverlapping(x, y) &&
          isPointInsideEllipse(
            x,
            y,
            radius * Math.sqrt(count) * 1.4,
            radius * Math.sqrt(count) * 0.9
          )
        ) {
          icons.push({ x, y });
          placed = true;
        }

        attempts++;
      }

      if (!placed) {
        console.warn(
          `Could not place all icons. Only placed ${icons.length} of ${N}.`
        );
        break;
      }
    }

    return icons;
  }

  const positions = generateClusteredIcons(count, (size / 2) * 1.1);

  return (
    <div className={`${className}`} aria-hidden="true">
      {positions.map(({ x, y }, i) => {
        const angle = Math.random() * 360;

        return (
          <div
            key={i}
            className="absolute"
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
              transform: `translate(-50%, -50%) rotate(${angle}deg)`,
              width: `${size}px`,
              height: `${size}px`,
              opacity: 0.6,
            }}
          >
            {svgs[Math.floor(Math.random() * svgs.length)]}
          </div>
        );
      })}
    </div>
  );
};

export default SvgCollage;
