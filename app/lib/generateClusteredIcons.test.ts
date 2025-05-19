import { generateClusteredIcons } from "@/lib/generateClusteredIcons";

const MockIcon = jest.fn(() => null);

describe("generateClusteredIcons (randomized)", () => {
  it.each([
    [5, 20],
    [10, 30],
    [15, 24],
    [50, 10],
    [100, 10],
  ])("places exactly %i icons with size %i", (N, size) => {
    const result = generateClusteredIcons(N, size, [MockIcon]);
    expect(result).toHaveLength(N);
  });

  it("icons have expected structure", () => {
    const result = generateClusteredIcons(5, 20, [MockIcon]);
    result.forEach((icon) => {
      expect(typeof icon.x).toBe("number");
      expect(typeof icon.y).toBe("number");
      expect(typeof icon.angle).toBe("number");
      expect(icon.IconComponent).toBe(MockIcon);
    });
  });

  it("icons do not overlap", () => {
    const result = generateClusteredIcons(15, 20, [MockIcon]);
    const buffer = 0.95;
    for (let i = 0; i < result.length; i++) {
      for (let j = i + 1; j < result.length; j++) {
        const dx = result[i].x - result[j].x;
        const dy = result[i].y - result[j].y;
        const dist = Math.hypot(dx, dy);
        expect(dist).toBeGreaterThan(buffer);
      }
    }
  });

  it("icons are mostly within the expected ellipse", () => {
    const N = 15;
    const size = 20;
    const result = generateClusteredIcons(N, size, [MockIcon]);

    const radius = size / 2;
    const maxGrowth = 1.5;
    const ellipseA = radius * Math.sqrt(N) * 1.4 * maxGrowth;
    const ellipseB = radius * Math.sqrt(N) * 0.9 * maxGrowth;

    result.forEach((icon) => {
      expect(
        (icon.x * icon.x) / (ellipseA * ellipseA) +
          (icon.y * icon.y) / (ellipseB * ellipseB)
      ).toBeLessThan(1);
    });
  });
});
