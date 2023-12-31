import { projects } from "../data/projects";

export const getProjects = () => {
  return projects;
};

export const getProjectById = (id) => {
  return projects.find((project) => Number(project.id) === Number(id));
};

export const getProjectsIds = () => {
  return projects.map((project) => {
    return {
      params: {
        id: project.id.toString(),
      },
    };
  });
};
