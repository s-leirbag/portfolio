import { randomElement } from "./utils";

type PlacedIcon = {
  x: number;
  y: number;
  angle: number;
  IconComponent: React.ComponentType<{ size?: number }>;
};

export function generateClusteredIcons(
  N: number,
  radius: number,
  iconComponents: React.ComponentType<{ size?: number }>[]
): PlacedIcon[] {
  const placedIcons: PlacedIcon[] = [];
  const maxAttempts = 100;
  const maxBatchesBeforeExpand = 3;
  let ellipseA = radius * Math.sqrt(N) * 1.4;
  let ellipseB = radius * Math.sqrt(N) * 0.9;

  const overlapsExistingIcon = (x: number, y: number): boolean => {
    const buffer = 0.95;
    return placedIcons.some(
      (icon) => Math.hypot(icon.x - x, icon.y - y) < 2 * radius * buffer
    );
  };

  function isPointInsideEllipse(x: number, y: number): boolean {
    return (
      (x * x) / (ellipseA * ellipseA) + (y * y) / (ellipseB * ellipseB) < 1
    );
  }

  placedIcons.push({
    x: 0,
    y: 0,
    angle: Math.random() * 360,
    IconComponent: randomElement(iconComponents),
  });

  while (placedIcons.length < N) {
    let placed = false;

    for (let batch = 0; batch < maxBatchesBeforeExpand && !placed; batch++) {
      for (let attempt = 0; attempt < maxAttempts && !placed; attempt++) {
        const base = randomElement(placedIcons);
        const angle = Math.random() * 2 * Math.PI;
        const distance = 2 * radius;
        const x = base.x + Math.cos(angle) * distance;
        const y = base.y + Math.sin(angle) * distance;

        if (!overlapsExistingIcon(x, y) && isPointInsideEllipse(x, y)) {
          placedIcons.push({
            x,
            y,
            angle: Math.random() * 360,
            IconComponent: randomElement(iconComponents),
          });
          placed = true;
        }
      }
    }

    if (!placed) {
      ellipseA *= 1.05;
      ellipseB *= 1.05;
      if (ellipseA > 1.5 * radius * Math.sqrt(N) * 1.4) {
        console.warn(
          `Could not place all icons. Only placed ${placedIcons.length} of ${N}.`
        );
        break;
      }
    }
  }

  return placedIcons;
}
