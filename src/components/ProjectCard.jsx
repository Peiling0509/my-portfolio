import { Link } from "react-router-dom"

function ProjectCard({ project }) {

    return (

        <div className="project-card">

            <img
                src={project.image}
                alt={project.title}
                className="project-image"
            />

            <div className="project-content">
                <p className="project-category">
                    {project.category}
                </p>

                <h3>
                    {project.title}
                </h3>

                <p>
                    {project.description}
                </p>

                <div className="tech-container">
                    {
                        project.technologies.map(
                            (tech) => (
                                <span
                                    key={tech}
                                    className="tech-tag"
                                >
                                    {tech}
                                </span>
                            )
                        )
                    }

                </div>



                <div className="project-buttons">
                    {
                        project.github &&
                        <a
                            href={project.github}
                            target="_blank"
                        >
                            GitHub
                        </a>

                    }

                    {
                        project.demo &&
                        <a
                            href={project.demo}
                            target="_blank"
                        >
                            Live Demo
                        </a>
                    }

                    <Link to={`/projects/${project.slug}`}>
                        View Details
                    </Link>

                </div>



            </div>
        </div>
    )
}
export default ProjectCard;