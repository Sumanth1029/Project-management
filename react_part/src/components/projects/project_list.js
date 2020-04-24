import React from "react";
import ProjectSummary from "./project_summary";

const ProjectList = () => {
  return (
    <div className="project-list section">
      <ProjectSummary />
      <ProjectSummary />
      <ProjectSummary />
    </div>
  );
};

export default ProjectList;