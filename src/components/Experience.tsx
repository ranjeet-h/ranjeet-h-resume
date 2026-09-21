import { motion } from 'motion/react';

interface Project {
    name: string;
    description: string;
}

interface Highlight {
    title: string;
    details: string[];
}

interface ExperienceEntry {
    company: string;
    position: string;
    duration: string;
    website?: string;
    workType?: string;
    description: string;
    achievements?: string[];
    highlights?: Highlight[];
    projects?: Project[];
}

interface ExperienceProps {
    experience: ExperienceEntry[];
}

const durationFormatter = new Intl.DateTimeFormat('en-US', {
    month: 'short',
    year: 'numeric',
});

const parsePeriodDate = (value: string) => {
    const match = value.match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if (!match) {
        return new Date(value);
    }

    const [, year, month, day] = match;
    return new Date(Number(year), Number(month) - 1, Number(day));
};

const formatPeriodPart = (value: string) => {
    if (!value || /present/i.test(value)) {
        return 'Present';
    }

    const parsedDate = parsePeriodDate(value);
    if (Number.isNaN(parsedDate.getTime())) {
        return value;
    }

    return durationFormatter.format(parsedDate);
};

const formatDuration = (duration: string) => {
    const [startPart, endPart] = duration.split(' - ').map((value) => value.trim());
    return `${formatPeriodPart(startPart)} — ${formatPeriodPart(endPart ?? '')}`;
};

const Experience = ({ experience }: ExperienceProps) => {
    return (
        <motion.section className="panel experience-panel" aria-labelledby="experience-title">
            <div className="panel-head">
                <p className="section-kicker">Experience</p>
                <h2 id="experience-title" className="section-title">
                    Professional experience
                </h2>
                <p className="section-copy">Roles and contributions across frontend and backend engineering.</p>
            </div>

            <div className="experience-listing">
                {experience.map((exp, expIndex) => {
                    const achievements = exp.achievements ?? [];
                    const highlights = exp.highlights ?? [];
                    const projects = exp.projects ?? [];

                    return (
                        <motion.article
                            key={`${exp.company}-${exp.position}`}
                            className="experience-item"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: expIndex * 0.08, duration: 0.45 }}
                            viewport={{ once: true, amount: 0.05 }}
                        >
                            <div className="experience-marker">{String(expIndex + 1).padStart(2, '0')}</div>

                            <div className="experience-card">
                                <div className="experience-top">
                                    <div className="experience-heading-group">
                                        <p className="experience-company">{exp.company}</p>
                                        <h3 className="experience-position">{exp.position}</h3>
                                    </div>

                                    <div className="experience-meta">
                                        <span className="meta-chip">{formatDuration(exp.duration)}</span>
                                        {exp.workType && <span className="meta-chip">{exp.workType}</span>}
                                        {exp.website && (
                                            <a className="meta-chip meta-chip-link" href={exp.website} target="_blank" rel="noopener noreferrer">
                                                Website
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <p className="experience-description">{exp.description}</p>

                                {achievements.length > 0 && (
                                    <div className="experience-subsection">
                                        <h4 className="subsection-title">Impact</h4>
                                        <ul className="achievement-list">
                                            {achievements.map((achievement, achIndex) => (
                                                <li key={`${achievement}-${achIndex}`} className="achievement-card">
                                                    <span className="achievement-index">{String(achIndex + 1).padStart(2, '0')}</span>
                                                    <p>{achievement}</p>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {highlights.length > 0 && (
                                    <div className="experience-subsection">
                                        <h4 className="subsection-title">Deep dives</h4>
                                        <div className="highlight-grid">
                                            {highlights.map((highlight, hlIndex) => (
                                                <article key={`${highlight.title}-${hlIndex}`} className="highlight-card">
                                                    <p className="highlight-title">{highlight.title}</p>
                                                    <ul className="highlight-detail-list">
                                                        {highlight.details.map((detail, detailIndex) => (
                                                            <li key={`${detail}-${detailIndex}`}>{detail}</li>
                                                        ))}
                                                    </ul>
                                                </article>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {projects.length > 0 && (
                                    <div className="experience-subsection">
                                        <h4 className="subsection-title">Associated projects</h4>
                                        <div className="mini-project-grid">
                                            {projects.map((project, projIndex) => (
                                                <article key={`${project.name}-${projIndex}`} className="mini-project-card">
                                                    <p className="mini-project-title">{project.name}</p>
                                                    <p className="mini-project-description">{project.description}</p>
                                                </article>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </motion.article>
                    );
                })}
            </div>
        </motion.section>
    );
};

export default Experience;
