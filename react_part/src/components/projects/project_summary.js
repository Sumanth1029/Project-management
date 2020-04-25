import React from 'react'
import ProjectList from './project_list'

const ProjectSummary=({project})=>{
    return(
        <div className="card z-depth-0 project-summary">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">{project.title}</span>
                    <p>Posted by sumanth</p>
                    <p className="grey-text">3rd September, 2AM</p>
                </div>
            </div>
    )
}

export default ProjectSummary