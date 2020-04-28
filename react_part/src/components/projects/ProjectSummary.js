import React from 'react'
import moment from 'moment'
const ProjectSummary = ({project}) => {
  return (
    <div className="card z-depth-1 project-summary">
      <div className="card-content grey-text text-lighten-2">
        <span className="card-title bl ">{project.title}</span>
        <p>Posted by {project.authorFirstName} {project.authorLastName}</p>
        <p className="grey-text">{moment(project.createdAt.toDate()).calendar()}</p>
      </div>
    </div>
  )
}

export default ProjectSummary
