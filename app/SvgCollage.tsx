import { useMemo } from "react";
import { cn } from "./lib/utils";
import { generateClusteredIcons } from "./lib/generateClusteredIcons";

type Props = {
  x: string;
  y: string;
  count: number;
  size: number;
  svgs: React.ComponentType<{ size?: number }>[];
  className?: string;
};

const SvgCollage = ({ x, y, count, size, svgs, className = "" }: Props) => {
  const placedIcons = useMemo(() => {
    return generateClusteredIcons(count, size * 1.1, svgs);
  }, [count, size, svgs]);

  return (
    <div
      className={cn("absolute inset-0 -z-20 opacity-10", className)}
      aria-hidden="true"
      style={{
        transform: `translate(${x}, ${y})`,
      }}
    >
      {placedIcons.map(({ x, y, angle, IconComponent }, i) => {
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
            <IconComponent size={size} />
          </div>
        );
      })}
    </div>
  );
};

export default SvgCollage;
