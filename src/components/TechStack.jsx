function TechStack(
    {
        technologies
    }
) {

    return (
        <div>
            <h2>
                Technology Stack
            </h2>

            <div className="tech-container">

                {
                    technologies.map(

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
        </div>
    )
}


export default TechStack;