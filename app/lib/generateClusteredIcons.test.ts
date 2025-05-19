import { generateClusteredIcons } from "@/lib/generateClusteredIcons";

describe("generateClusteredIcons", () => {
  it("generates the expected number of icons", () => {
    const result = generateClusteredIcons(5, 10, [
      () => null,
      () => null,
      () => null,
    ]);
    expect(result).toHaveLength(5);
  });
});
