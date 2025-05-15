import { useMemo } from "react";

type Icon = {
  x: number;
  y: number;
  angle: number;
  Icon: React.ComponentType<{ size?: number }>;
};

function generateClusteredIcons(
  N: number,
  radius: number,
  svgs: React.ComponentType<{ size?: number }>[]
): Icon[] {
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

  icons.push({
    x: 0,
    y: 0,
    angle: Math.random() * 360,
    Icon: svgs[Math.floor(Math.random() * svgs.length)],
  });

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
          radius * Math.sqrt(N) * 1.4,
          radius * Math.sqrt(N) * 0.9
        )
      ) {
        icons.push({
          x,
          y,
          angle: Math.random() * 360,
          Icon: svgs[Math.floor(Math.random() * svgs.length)],
        });
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

type Props = {
  x: string;
  y: string;
  count: number;
  size: number;
  svgs: React.ComponentType<{ size?: number }>[];
};

const SvgCollage = ({ x, y, count, size, svgs }: Props) => {
  const icons = useMemo(() => {
    return generateClusteredIcons(count, (size / 2) * 1.1, svgs);
  }, [count, size, svgs]);

  return (
    <div
      className={`absolute inset-0 -z-20 translate-x-[${x}] translate-y-[${y}] opacity-10`}
      aria-hidden="true"
    >
      {icons.map(({ x, y, angle, Icon }, i) => {
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
            <Icon size={size} />
          </div>
        );
      })}
    </div>
  );
};

export default SvgCollage;
