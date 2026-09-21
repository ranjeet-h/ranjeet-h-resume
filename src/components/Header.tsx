import { useRef } from 'react';
import {
    motion,
    useReducedMotion,
    useScroll,
    useSpring,
    useTransform,
} from 'motion/react';
import { containerVariants, headerVariants, itemVariants, profileImageVariants } from './animation';

interface PersonalInfo {
    image: string;
    name: string;
    title?: string;
    email?: string;
    github?: string;
    location: string[];
    experience: number;
}

interface HeroStat {
    label: string;
    value: string;
    detail?: string;
}

interface HeaderProps {
    personalInfo: PersonalInfo;
    summary: string;
    stats: HeroStat[];
    focusAreas: string[];
}

const Header = ({ personalInfo, summary, stats, focusAreas }: HeaderProps) => {
    const heroRef = useRef<HTMLElement | null>(null);
    const prefersReducedMotion = useReducedMotion();
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ['start start', 'end start'],
    });

    const portraitY = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : -24]),
        {
            stiffness: 120,
            damping: 24,
        },
    );
    const portraitScale = useSpring(
        useTransform(scrollYProgress, [0, 1], [1, prefersReducedMotion ? 1 : 0.985]),
        {
            stiffness: 120,
            damping: 24,
        },
    );
    const copyY = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : -14]),
        {
            stiffness: 120,
            damping: 24,
        },
    );

    const nameWords = personalInfo.name.split(' ');
    const summaryParagraphs = summary
        .split('\n\n')
        .map((paragraph) => paragraph.trim())
        .filter(Boolean);

    const locationText = personalInfo.location.join(' · ');

    return (
        <motion.section
            ref={heroRef}
            className="hero-section"
            variants={headerVariants}
            initial="hidden"
            animate="visible"
            aria-labelledby="hero-title"
        >
            <motion.figure
                className="panel hero-portrait"
                variants={profileImageVariants}
                initial="hidden"
                animate="visible"
                style={prefersReducedMotion ? undefined : { y: portraitY, scale: portraitScale }}
                whileHover={{ y: -4, transition: { duration: 0.24, ease: 'easeOut' } }}
            >
                <div className="portrait-frame">
                    <img
                        src={personalInfo.image}
                        alt={`${personalInfo.name} portrait`}
                        className="portrait-image"
                        width={400}
                        height={400}
                        decoding="async"
                        fetchPriority="high"
                    />
                </div>
                <figcaption className="portrait-caption">
                    <span className="portrait-caption-line">Based between {locationText}</span>
                    <span className="portrait-caption-line">{personalInfo.experience}+ years building software across frontend and backend</span>
                </figcaption>
            </motion.figure>

            <motion.div
                className="panel hero-copy"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                style={prefersReducedMotion ? undefined : { y: copyY }}
            >
                <motion.p className="hero-eyebrow" variants={itemVariants}>
                    {personalInfo.title ?? 'Software Engineer'} · {locationText}
                </motion.p>
                <motion.h1 id="hero-title" className="hero-title hero-title-split" variants={containerVariants}>
                    {nameWords.map((word, index) => (
                        <motion.span key={`${word}-${index}`} className="hero-title-word" variants={itemVariants}>
                            {word}
                        </motion.span>
                    ))}
                </motion.h1>
                <motion.p className="hero-role" variants={itemVariants}>
                    {personalInfo.title}
                </motion.p>

                <motion.div className="hero-summary" variants={containerVariants}>
                    {summaryParagraphs.map((paragraph, index) => (
                        <motion.p
                            key={`${index}-${paragraph}`}
                            className={index === 0 ? 'hero-summary-lead' : 'hero-summary-body'}
                            variants={itemVariants}
                        >
                            {paragraph}
                        </motion.p>
                    ))}
                </motion.div>

                <motion.div className="hero-actions" variants={containerVariants}>
                    {personalInfo.email && (
                        <motion.a className="hero-button hero-button-primary" href={`mailto:${personalInfo.email}`} variants={itemVariants} whileHover={{ y: -2, transition: { duration: 0.2 } }}>
                            Contact
                        </motion.a>
                    )}
                    {personalInfo.github && (
                        <motion.a className="hero-button hero-button-secondary" href={personalInfo.github} target="_blank" rel="noopener noreferrer" variants={itemVariants} whileHover={{ y: -2, transition: { duration: 0.2 } }}>
                            GitHub
                        </motion.a>
                    )}
                </motion.div>

                <motion.div className="hero-stats" variants={containerVariants}>
                    {stats.map((stat) => (
                        <motion.article
                            key={stat.label}
                            className="stat-card"
                            variants={itemVariants}
                            whileHover={{ y: -3, transition: { duration: 0.2 } }}
                        >
                            <p className="stat-label">{stat.label}</p>
                            <p className="stat-value">{stat.value}</p>
                            {stat.detail && <p className="stat-detail">{stat.detail}</p>}
                        </motion.article>
                    ))}
                </motion.div>

                <motion.div className="hero-tags" aria-label="Focus areas" variants={containerVariants}>
                    {focusAreas.map((tag) => (
                        <motion.span key={tag} className="hero-tag" variants={itemVariants}>
                            {tag}
                        </motion.span>
                    ))}
                </motion.div>
            </motion.div>
        </motion.section>
    );
};

export default Header;
