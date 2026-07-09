import { useState } from 'react';
import '../styles/about.css';

function About() {
    const [activeTab, setActiveTab] = useState('experience');

    return (
        <section className="about-section">
            <div className="about-container">

                {/* LEFT COLUMN: Navigation Tabs */}
                <div className="tabs-column">
                    <button
                        className={`tab-btn ${activeTab === 'experience' ? 'active' : ''}`}
                        onClick={() => setActiveTab('experience')}
                    >
                        Experience
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'education' ? 'active' : ''}`}
                        onClick={() => setActiveTab('education')}
                    >
                        Education
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'skills' ? 'active' : ''}`}
                        onClick={() => setActiveTab('skills')}
                    >
                        Skills
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'achievements' ? 'active' : ''}`}
                        onClick={() => setActiveTab('achievements')}
                    >
                        Achievements
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'about' ? 'active' : ''}`}
                        onClick={() => setActiveTab('about')}
                    >
                        About me
                    </button>
                </div>

                {/* RIGHT COLUMN: Dynamic Content */}
                <div className="content-column">

                    {/* --- EXPERIENCE TAB --- */}
                    {activeTab === 'experience' && (
                        <div className="tab-content animate-fade-in">
                            <h2 className="content-title">My experience</h2>
                            <p className="content-subtitle">
                                Professional internships and hands-on experience in software engineering and automation.
                            </p>

                            <div className="cards-grid">

                                {/* Sarawak Energy Berhad */}
                                <div className="info-card">
                                    <span className="card-date">April 2025 - Sep 2025</span>
                                    <h4 className="card-title">Sarawak Energy Berhad</h4>
                                    <p className="card-highlight">Software Engineering Intern</p>
                                    <ul className="card-desc-list">
                                        <li>Supported the pilot launch of the SEPS Mentoring Module by executing comprehensive system usability reviews, isolating bugs, and resolving application navigation blocks.</li>
                                        <li>Automated manual business workflows via Microsoft Power Automate, successfully reducing manual follow-ups by 80% and demonstrating strong logic design capabilities.</li>
                                        <li>Optimized data processing pipelines using Excel VBA, improving data query efficiency and saving the team 10 hours per week.</li>
                                    </ul>
                                </div>

                                {/* PCloud Sdn. Bhd */}
                                <div className="info-card">
                                    <span className="card-date">March 2022 - July 2022</span>
                                    <h4 className="card-title">PCloud Sdn. Bhd.</h4>
                                    <p className="card-highlight">Software Engineering Intern</p>
                                    <ul className="card-desc-list">
                                        <li>Built a seamless Microsoft Visual Basic POS system for Sugarbun to support daily retail operations.</li>
                                        <li>Maintained and enhanced the overall usability of the Project Scout Malaysia website.</li>
                                        <li>Optimized a POS-integrated label printing app (Visual Basic) for the Sarawak Heart Center, saving staff an estimated 5 hours/week.</li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    )}

                    {/* --- EDUCATION TAB --- */}
                    {activeTab === 'education' && (
                        <div className="tab-content animate-fade-in">
                            <h2 className="content-title">My education</h2>
                            <p className="content-subtitle">
                                The academic foundation driving my software engineering expertise.
                            </p>

                            <div className="cards-grid">

                                {/* UNIMAS Degree */}
                                <div className="info-card">
                                    <span className="card-date">Dec 2022 - Jun 2026</span>
                                    <h4 className="card-title">Bachelor of Software Engineering (Hons)</h4>
                                    <p className="card-highlight">Universiti Malaysia Sarawak (UNIMAS)</p>
                                    <ul className="card-desc-list">
                                        <li><strong>CGPA:</strong> 3.83 (Top 5%)</li>
                                        <li><strong>Core Courses:</strong> Software Requirement Engineering, Web Application Development, Software Security Engineering, Database Concept & Design, Data Structure and Algorithm.</li>
                                    </ul>
                                </div>

                                {/* Politeknik Diploma */}
                                <div className="info-card">
                                    <span className="card-date">Jun 2019 - Dec 2022</span>
                                    <h4 className="card-title">Diploma in Information Technology</h4>
                                    <p className="card-highlight">Politeknik Kuching Sarawak</p>
                                    <ul className="card-desc-list">
                                        <li><strong>CGPA:</strong> 3.84 (Top 5%)</li>
                                        <li><strong>Core Courses: </strong>Security Basic And It Professionals, Object Oriented Programming, Data Structures,  Secure Mobile Computing </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    )}

                    {/* --- SKILLS TAB --- */}
                    {activeTab === 'skills' && (
                        <div className="tab-content animate-fade-in">
                            <h2 className="content-title">My skills</h2>
                            <p className="content-subtitle">
                                Core technologies and frameworks I use to build scalable solutions.
                            </p>

                            <div className="skills-container">
                                <div className="skill-category">
                                    <h4 className="card-title">Languages</h4>
                                    <div className="skill-tags">
                                        <span className="skill-tag">English (Fluent)</span>
                                        <span className="skill-tag">Malay (Fluent)</span>
                                        <span className="skill-tag">Mandarin (Native)</span>
                                    </div>
                                </div>

                                <div className="skill-category">
                                    <h4 className="card-title">Mobile & Frontend</h4>
                                    <div className="skill-tags">
                                        <span className="skill-tag">Flutter</span>
                                        <span className="skill-tag">GetX</span>
                                        <span className="skill-tag">Bloc</span>
                                        <span className="skill-tag">React</span>
                                        <span className="skill-tag">CSS</span>
                                    </div>
                                </div>
                                <div className="skill-category">
                                    <h4 className="card-title">Backend & Database</h4>
                                    <div className="skill-tags">
                                        <span className="skill-tag">Laravel</span>
                                        <span className="skill-tag">Filament</span>
                                        <span className="skill-tag">Firebase</span>
                                        <span className="skill-tag">MySQL</span>
                                        <span className="skill-tag">SQLite</span>
                                    </div>
                                </div>
                                <div className="skill-category">
                                    <h4 className="card-title">Programming Languages</h4>
                                    <div className="skill-tags">
                                        <span className="skill-tag">Java</span>
                                        <span className="skill-tag">JavaScript</span>
                                        <span className="skill-tag">C++</span>
                                        <span className="skill-tag">C#</span>
                                        <span className="skill-tag">Python</span>
                                        <span className="skill-tag">Dart</span>
                                        <span className="skill-tag">PHP</span>
                                        <span className="skill-tag">Excel VBA</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* --- ACHIEVEMENTS TAB --- */}
                    {activeTab === 'achievements' && (
                        <div className="tab-content animate-fade-in">
                            <h2 className="content-title">My Achievements</h2>
                            <p className="content-subtitle">
                                Recognition for academic excellence and technical competitions.
                            </p>

                            <div className="cards-grid">
                                
                                {/* UNIMAS Achievements */}
                                <div className="info-card">
                                    <span className="card-date">2023 - 2026</span>
                                    <h4 className="card-title">University Honors</h4>
                                    <p className="card-highlight">Universiti Malaysia Sarawak (UNIMAS)</p>
                                    <ul className="card-desc-list">
                                        <li><strong>Top 15 Final Year Project</strong> (2026)</li>
                                        <li><strong>Dean’s List Award</strong> for 6 semesters</li>
                                    </ul>
                                </div>

                                {/* Politeknik / Competition Achievements */}
                                <div className="info-card">
                                    <span className="card-date">2021 - 2022</span>
                                    <h4 className="card-title">Awards & Competitions</h4>
                                    <p className="card-highlight">Politeknik Kuching Sarawak</p>
                                    <ul className="card-desc-list">
                                        <li><strong>Anugerah Pelajar Cemerlang</strong> (Excellent Student Award) (2022)</li>
                                        <li><strong>Consolation Prize Winner</strong> for 2021 Mobile App Competition</li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    )}

                    {/* --- ABOUT ME TAB --- */}
                    {activeTab === 'about' && (
                        <div className="tab-content animate-fade-in">
                            <h2 className="content-title">About Me</h2>
                            <p className="content-subtitle">Get to know the developer behind the code.</p>

                            <div className="about-text-container">
                                <p>
                                    I am a Software Engineering graduate passionate about software development, focusing heavily on cross-platform mobile applications and robust backend systems. I enjoy building practical, real-world solutions that streamline complex processes.
                                </p>
                                <p>
                                    Beyond the screen, I maintain a highly disciplined lifestyle centered around strength training and structured nutrition. The dedication required to track macros, target specific muscle groups, and consistently hit the gym translates directly into my work ethic—I approach writing clean, optimized code with that exact same discipline.
                                </p>
                                <p>
                                    Currently based in Kuching, Sarawak, I am preparing to relocate and am actively seeking developer roles in Kuala Lumpur starting in 2026.
                                </p>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </section>
    );
}

export default About;