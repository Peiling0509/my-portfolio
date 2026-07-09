import { useParams, Link } from "react-router-dom";
import projects from "../data/projects"; // Adjust path if needed
import '../styles/projectDetails.css';

function ProjectDetail() {
    const { slug } = useParams();
    const project = projects.find((item) => item.slug === slug);

    if (!project) {
        return (
            <section className="pd-not-found">
                <h2>Project Not Found</h2>
                <Link to="/projects" className="pd-back-btn">Return to Projects</Link>
            </section>
        );
    }

    return (
        <section className="pd-section animate-fade-in">
            <div className="pd-container">

                {/* --- HEADER --- */}
                <div className="pd-header">
                    <Link to="/projects" className="pd-back-link">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                        Back to Projects
                    </Link>
                    <span className="pd-category">{project.category}</span>
                    <h1 className="pd-title">{project.title}</h1>

                    {/* Action Links (GitHub / Demo) */}
                    <div className="pd-actions">
                        {project.github && (
                            <a href={project.github} target="_blank" rel="noreferrer" className="pd-action-btn">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                View Source
                            </a>
                        )}
                        {project.demo && (
                            <a href={project.demo} target="_blank" rel="noreferrer" className="pd-action-btn primary">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                Live Demo
                            </a>
                        )}
                    </div>
                </div>

                {/* --- MAIN CONTENT GRID --- */}
                <div className="pd-grid">

                    {/* Left Column: Narrative */}
                    <div className="pd-main-content">

                        {/* --- DEMO VIDEO SECTION --- */}
                        {project.details.video && (
                            <div className="pd-card video-card">
                                <h3 className="video-title">Project Demo</h3>
                                <div className="pd-video-wrapper">
                                    <video
                                        src={project.details.video}
                                        controls
                                        muted
                                        autoPlay
                                        loop
                                        className="pd-video-player"
                                    >
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            </div>
                        )}

                         {/* --- OVERVIEW --- */}
                        <div className="pd-card">
                            <h3>Overview</h3>
                            <p>{project.details.overview}</p>
                        </div>

                        {/* --- CHALLENGES & SOLUTIONS --- */}
                        <div className="pd-card">
                            <h3>Challenges & Solutions</h3>
                            <div className="challenges-list">
                                {project.details.challenges.map((challenge, index) => (
                                    <div className="challenge-item" key={index}>
                                        <div className="challenge-problem">
                                            <span className="cp-icon">⚠</span>
                                            <strong>Problem:</strong> {challenge.problem}
                                        </div>
                                        <div className="challenge-solution">
                                            <span className="cs-icon">✓</span>
                                            <strong>Solution:</strong> {challenge.solution}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Technical Details */}
                    <div className="pd-sidebar">
                        <div className="pd-card">
                            <h3>Technologies</h3>
                            <div className="pd-tags">
                                {project.technologies.map((tech, index) => (
                                    <span className="pd-tag" key={index}>{tech}</span>
                                ))}
                            </div>
                        </div>

                        <div className="pd-card">
                            <h3>Architecture</h3>
                            <ul className="pd-list">
                                {project.details.architecture.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="pd-card">
                            <h3>My Contributions</h3>
                            <ul className="pd-list">
                                {project.details.contribution.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* --- GALLERY SECTION --- */}
                {project.details.gallery && project.details.gallery.length > 0 && (
                    <div className="pd-gallery-section">
                        <h3>Project Gallery</h3>
                        <div className="pd-gallery-grid">
                            {project.details.gallery.map((imgSrc, index) => (
                                <div className="gallery-img-wrapper" key={index}>
                                    <img src={imgSrc} alt={`${project.title} screenshot ${index + 1}`} loading="lazy" />
                                </div>
                            ))}
                        </div>
                    </div>
                )}

            </div>
        </section>
    );
}

export default ProjectDetail;