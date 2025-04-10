import { ProjectPage } from "../lib/content";
import { projectsMap } from "../data/projects";
import { redirect } from "next/navigation";

export default async function DynamicPage({
  params,
}: {
  params: {
    page: string;
  };
}) {
  const { page } = await params;

  const content = projectsMap[page];
  if (!content) {
    redirect("/");
  }

  return <ProjectPage project={content} />;
}
