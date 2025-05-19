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
  const maxBatchesBeforeExpand = 3;
  let ellipseA = radius * Math.sqrt(N) * 1.4;
  let ellipseB = radius * Math.sqrt(N) * 0.9;

  const isOverlapping = (x: number, y: number): boolean => {
    const buffer = 0.95;
    return icons.some(
      (icon) => Math.hypot(icon.x - x, icon.y - y) < 2 * radius * buffer
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
    let placed = false;

    for (let batch = 0; batch < maxBatchesBeforeExpand && !placed; batch++) {
      for (let attempt = 0; attempt < maxAttempts && !placed; attempt++) {
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
      }
    }

    if (!placed) {
      ellipseA *= 1.05;
      ellipseB *= 1.05;
    }
  }

  return icons;
}
