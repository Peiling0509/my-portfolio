import { useState, useEffect } from 'react';
import projects from "../data/projects";
import '../styles/project.css'; // Make sure to create this file

function Projects() {
    // State to track the currently displayed project index
    const [currentIndex, setCurrentIndex] = useState(0);

    // State for the inner gallery slideshow
    const [galleryIndex, setGalleryIndex] = useState(0);

    // Get the current project data based on state
    const project = projects[currentIndex];

    // Helper to format the number as "01", "02", etc.
    const projectNum = currentIndex + 1 < 10 ? `0${currentIndex + 1}` : currentIndex + 1;

    // Safely grab the gallery array (fallback to the single image if no gallery exists)
    const gallery = project.details?.gallery || [project.image];

    // Reset the gallery back to the first image when the main project changes
    useEffect(() => {
        setGalleryIndex(0);
    }, [currentIndex]);

    // Autoplay the gallery slideshow
    useEffect(() => {
        // Stop if there is only 1 image (no need to slide)
        if (gallery.length <= 1) return;

        // Set up the timer to advance the image every 3000ms (3 seconds)
        const slideTimer = setInterval(() => {
            setGalleryIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
        }, 3000);

        // Cleanup the timer when the component unmounts or the index changes
        return () => clearInterval(slideTimer);
    }, [currentIndex, galleryIndex, gallery.length]);

    // Functions to handle next and previous clicks
    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === projects.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? projects.length - 1 : prevIndex - 1
        );
    };

    // Inner Gallery Controls
    const nextImage = () => {
        setGalleryIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
    };
    const prevImage = () => {
        setGalleryIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
    };

    return (
        <section className="projects-section">
            <div className="projects-container">

                {/* LEFT COLUMN: Project Info */}
                <div className="project-info" key={currentIndex}>
                    {/* The large outlined number */}
                    <div className="project-number">{projectNum}</div>

                    <h2 className="project-title">{project.title}</h2>

                    <p className="project-description">
                        {project.description}
                    </p>

                    {/* Joins the technologies array with commas */}
                    <div className="project-tech">
                        {project.technologies.join(', ')}
                    </div>

                    <div className="divider"></div>

                    {/* Circular Action Links */}
                    <div className="project-links">
                        {project.github && (
                            <a
                                href={project.github}
                                className="link-btn"
                                title="GitHub Repository"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {/* GitHub Icon */}
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                                </svg>
                            </a>
                        )}
                        
                        <a
                            href={`/projects/${project.slug}`}
                            className="link-btn"
                            title="Details"
                        >
                            {/* Arrow Up Right Icon */}
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M7 17l9.2-9.2M17 17V7H7" />
                            </svg>
                        </a>

                        
                    </div>
                </div>

                {/* RIGHT COLUMN: Project Visual & Controls */}
                <div className="project-visual">

                    {/* Updated Wrapper with Gallery Logic */}
                    <div className="project-image-wrapper">
                        <img
                            // Add a key so the image cleanly animates when changing
                            key={`gallery-${currentIndex}-${galleryIndex}`}
                            src={gallery[galleryIndex]}
                            alt={`${project.title} screenshot ${galleryIndex + 1}`}
                            className="project-image"
                        />

                        {/* Only show gallery controls if there is more than 1 image */}
                        {gallery.length > 1 && (
                            <>
                                <button onClick={prevImage} className="gallery-arrow prev">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6"></polyline></svg>
                                </button>
                                <button onClick={nextImage} className="gallery-arrow next">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                </button>

                                {/* Mini Dot Indicators */}
                                <div className="gallery-dots">
                                    {gallery.map((_, idx) => (
                                        <span
                                            key={idx}
                                            className={`dot ${idx === galleryIndex ? 'active' : ''}`}
                                            onClick={() => setGalleryIndex(idx)}
                                        ></span>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>

                    {/* Main Square Slider Controls (Bottom Right) */}
                    <div className="slider-controls">
                        <button onClick={handlePrev} className="slider-btn">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                        </button>
                        <button onClick={handleNext} className="slider-btn">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Projects;