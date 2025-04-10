import { ProjectContent } from "../lib/content";
import butcherbox from "./butcherbox";
import citizens from "./citizens";
import hospital from "./hospital";
import rubiks from "./rubiks";

export const projects = [butcherbox, citizens, hospital, rubiks];
export const projectsMap: Record<string, ProjectContent> = {
  butcherbox,
  citizens,
  hospital,
  rubiks,
};
