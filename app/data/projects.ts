import { ProjectContent } from "../lib/content";
import butcherbox from "./butcherbox";
import citizens from "./citizens";
import hospital from "./hospital";

export const projects = [
  butcherbox,
  citizens,
  hospital,
];

export const projectsMap: Record<string, ProjectContent> = projects.reduce(
  (acc, project) => {
    acc[project.href] = project;
    return acc;
  },
  {} as Record<string, ProjectContent>
);
