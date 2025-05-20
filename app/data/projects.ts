import { ProjectContent } from "../lib/content";
import butcherbox from "./butcherbox";
import citizens from "./citizens";
import gifCreator from "./gif-creator";
import hospital from "./hospital";
import mentalHealth from "./mental-health";
import rubiks from "./rubiks";

export const projects = [
  butcherbox,
  citizens,
  hospital,
  gifCreator,
  mentalHealth,
  rubiks,
];

export const projectsMap: Record<string, ProjectContent> = projects.reduce(
  (acc, project) => {
    acc[project.href] = project;
    return acc;
  },
  {} as Record<string, ProjectContent>
);
