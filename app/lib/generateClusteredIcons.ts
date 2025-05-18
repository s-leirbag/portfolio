type Icon = {
  x: number;
  y: number;
  angle: number;
  Icon: React.ComponentType<{ size?: number }>;
};

export function generateClusteredIcons(
  N: number,
  radius: number,
  svgs: React.ComponentType<{ size?: number }>[]
): Icon[] {
  const icons: Icon[] = [];
  const maxAttempts = 100;
  const ellipseA = radius * Math.sqrt(N) * 1.4;
  const ellipseB = radius * Math.sqrt(N) * 0.9;

  const isOverlapping = (x: number, y: number): boolean => {
    return icons.some(
      (icon) => Math.hypot(icon.x - x, icon.y - y) < 2 * radius
    );
  };

  function isPointInsideEllipse(x: number, y: number): boolean {
    return (
      (x * x) / (ellipseA * ellipseA) + (y * y) / (ellipseB * ellipseB) < 1
    );
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

      if (!isOverlapping(x, y) && isPointInsideEllipse(x, y)) {
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
