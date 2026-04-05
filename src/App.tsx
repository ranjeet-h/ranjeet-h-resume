import { useEffect, useState } from 'react';
import './App.css';
import resumeData from './data/resume.json';
import { motion, useScroll, useSpring } from 'motion/react';
import Header from './components/Header';
import PersonalInfo from './components/PersonalInfo';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import ProjectQuickLinks from './components/ProjectQuickLinks';

type Theme = 'light' | 'dark';

interface HeroStat {
    label: string;
    value: string;
    detail?: string;
}

const SunIcon = () => (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="4.5" />
        <path d="M12 2.75v2.5" />
        <path d="M12 18.75v2.5" />
        <path d="m4.92 4.92 1.77 1.77" />
        <path d="m17.31 17.31 1.77 1.77" />
        <path d="M2.75 12h2.5" />
        <path d="M18.75 12h2.5" />
        <path d="m4.92 19.08 1.77-1.77" />
        <path d="m17.31 6.69 1.77-1.77" />
    </svg>
);

const MoonIcon = () => (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19.6 14.2A8.5 8.5 0 0 1 9.8 4.4a8.5 8.5 0 1 0 9.8 9.8Z" />
    </svg>
);

const ThemeSwitcher = ({ theme, toggleTheme }: { theme: Theme; toggleTheme: () => void }) => (
    <div className="theme-switcher">
        <button
            type="button"
            className="theme-switcher-button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            aria-pressed={theme === 'dark'}
        >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
        </button>
    </div>
);

const getInitialTheme = (): Theme => {
    if (typeof window === 'undefined') {
        return 'light';
    }

    const storedTheme = window.localStorage.getItem('theme');
    return storedTheme === 'dark' ? 'dark' : 'light';
};

const App = () => {
    const [theme, setTheme] = useState<Theme>(getInitialTheme);
    const { scrollYProgress } = useScroll();
    const pageProgress = useSpring(scrollYProgress, {
        stiffness: 120,
        damping: 28,
        mass: 0.2,
    });

    useEffect(() => {
        document.body.className = `${theme}-theme`;
        window.localStorage.setItem('theme', theme);
    }, [theme]);

    const publicRepoCount = 72;

    const heroStats: HeroStat[] = [
        {
            label: 'Experience',
            value: `${resumeData.personalInfo.experience}+ years`,
            detail: 'Software engineering across frontend and backend',
        },
        {
            label: 'Public repos',
            value: String(publicRepoCount),
            detail: 'Public GitHub repositories and open-source work',
        },
        {
            label: 'Core stack',
            value: 'ReactJS · Node.js · Rust',
            detail: 'Express, FastAPI, MongoDB, MySQL, Docker',
        },
    ];

    const focusAreas = ['Healthcare', 'Clinical ops', 'Backend APIs', 'Open source'];

    return (
        <div className="page-shell">
            <a className="sr-only-focusable" href="#main">
                Skip to main content
            </a>
            <div className="scroll-progress-track" aria-hidden="true">
                <motion.div className="scroll-progress-bar" style={{ scaleX: pageProgress }} />
            </div>
            <div className="page-orb page-orb-one" aria-hidden="true" />
            <div className="page-orb page-orb-two" aria-hidden="true" />
            <ThemeSwitcher theme={theme} toggleTheme={() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))} />

            <main id="main" className="page-container">
                <Header
                    personalInfo={resumeData.personalInfo}
                    summary={resumeData.summary}
                    stats={heroStats}
                    focusAreas={focusAreas}
                />
                <ProjectQuickLinks projects={resumeData.projects} />

                <div className="content-grid">
                    <PersonalInfo personalInfo={resumeData.personalInfo} />
                    <Skills skills={resumeData.skills} />
                    <Experience experience={resumeData.experience} />
                    <Education education={resumeData.education} />
                    <Projects projects={resumeData.projects} />
                </div>
            </main>
        </div>
    );
};

export default App;
