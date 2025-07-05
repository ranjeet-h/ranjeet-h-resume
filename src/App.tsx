import './App.css';
import resumeData from './data/resume.json';
import { motion } from 'motion/react';
import Header from './components/Header';
import PersonalInfo from './components/PersonalInfo';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import ProjectQuickLinks from './components/ProjectQuickLinks';
import { containerVariants, scrollVariants } from './components/animation';
import { useState, useEffect } from 'react';

const ThemeSwitcher = ({ theme, toggleTheme }: { theme: string, toggleTheme: () => void }) => (
    <div className="theme-switcher">
        <button onClick={toggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>
            {theme === 'dark' ? '☀️' : '🌙'}
        </button>
    </div>
);

const App = () => {
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

    useEffect(() => {
        document.body.className = `${theme}-theme`;
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
    };

    return (
        <div className="js-resume">
            <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />

            <div className="container">
                {/* Header with Profile */}
                <Header personalInfo={resumeData.personalInfo} summary={resumeData.summary} />

                {/* Quick Links */}
                <ProjectQuickLinks projects={resumeData.projects} />

                {/* Main Content */}
                <motion.div
                    className="main-section"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Personal Information */}
                    <PersonalInfo personalInfo={resumeData.personalInfo} />

                    {/* Skills & Technologies */}
                    <Skills skills={resumeData.skills} />

                    {/* Experience */}
                    <Experience experience={resumeData.experience} />

                    {/* Education */}
                    <Education education={resumeData.education} />

                    {/* Projects */}
                    <Projects projects={resumeData.projects} />

                    {/* Export Statement */}
                    <motion.div
                        className="code-section full-width export-section"
                        variants={scrollVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        whileHover={{
                            scale: 1.01,
                            boxShadow: "0 16px 50px rgba(74, 153, 96, 0.3)",
                            transition: { duration: 0.3 }
                        }}
                    >
                        <div className="section-header">
                            <span className="comment">// Export Resume Data</span>
                        </div>
                        <div className="code-line">
                            <span className="keyword">export</span> <span className="keyword">default</span> <span className="punctuation">{'{'}</span>
                        </div>
                        <div className="code-block">
                            <motion.div
                                className="code-line indent"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 }}
                            >
                                <span className="variable">personalInfo</span><span className="punctuation">,</span>
                            </motion.div>
                            <motion.div
                                className="code-line indent"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <span className="variable">skills</span><span className="punctuation">,</span>
                            </motion.div>
                            <motion.div
                                className="code-line indent"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                <span className="variable">experience</span><span className="punctuation">,</span>
                            </motion.div>
                            <motion.div
                                className="code-line indent"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                <span className="variable">education</span><span className="punctuation">,</span>
                            </motion.div>
                            <motion.div
                                className="code-line indent"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                <span className="variable">projects</span>
                            </motion.div>
                        </div>
                        <div className="code-line">
                            <span className="punctuation">{'}'}</span><span className="punctuation">;</span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default App;
