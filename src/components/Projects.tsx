import { motion } from 'motion/react';

interface Project {
    name: string;
    url?: string;
    website?: string;
    publicationUrl?: string;
    visibility?: string;
    extraLinks?: ProjectLink[];
    description: string;
    details?: string;
    learning?: string;
    tech: string[];
    language?: string;
    stars?: number;
    updated?: string;
}

interface ProjectsProps {
    projects: Project[];
}

interface ProjectLink {
    label: string;
    href: string;
}

const repoUpdatedFormatter = new Intl.DateTimeFormat('en-US', {
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
});

const getProjectLinks = (project: Project): ProjectLink[] => {
    const links: ProjectLink[] = [];

    if (project.publicationUrl) {
        links.push({ label: 'Paper', href: project.publicationUrl });
    }

    if (project.website) {
        links.push({ label: 'Live', href: project.website });
    }

    if (project.url) {
        links.push({ label: project.website || project.publicationUrl ? 'Code' : project.url.includes('github.com') ? 'Code' : 'Open', href: project.url });
    }

    if (project.extraLinks) {
        links.push(...project.extraLinks);
    }

    return links;
};

const formatRepositoryUpdated = (value?: string) => {
    if (!value) {
        return null;
    }

    const parsedDate = new Date(value);
    if (Number.isNaN(parsedDate.getTime())) {
        return null;
    }

    return `Updated ${repoUpdatedFormatter.format(parsedDate)}`;
};

const Projects = ({ projects }: ProjectsProps) => {
    return (
        <motion.section className="panel projects-panel" aria-labelledby="projects-title">
            <div className="panel-head">
                <p className="section-kicker">Projects</p>
                <h2 id="projects-title" className="section-title">
                    All projects
                </h2>
                <p className="section-copy">Open-source applications and libraries, published research, and selected private work.</p>
            </div>

            <div className="project-grid">
                {projects.map((project, index) => {
                    const links = getProjectLinks(project);
                    const note = project.details ?? project.learning;
                    const projectType = project.publicationUrl
                        ? 'Published research paper'
                        : project.visibility === 'private'
                          ? 'Private case study'
                          : 'Open-source project';
                    const metadata = [
                        project.language,
                        typeof project.stars === 'number' && project.stars > 0 ? `★ ${project.stars}` : null,
                        formatRepositoryUpdated(project.updated),
                    ].filter((item): item is string => Boolean(item));

                    return (
                        <motion.article
                            key={project.name}
                            className="project-card"
                            initial={{ opacity: 0, y: 12, scale: 0.985 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ delay: (index % 2) * 0.05, duration: 0.36 }}
                            whileHover={{ y: -4, transition: { duration: 0.2 } }}
                        >
                            <div className="project-card-head">
                                <div className="project-card-meta-row">
                                    <span className="project-index">{String(index + 1).padStart(2, '0')}</span>
                                    <p className="project-type">{projectType}</p>
                                </div>
                                <h3 className="project-title">{project.name}</h3>
                            </div>

                            {metadata.length > 0 && (
                                <div className="project-tech-list">
                                    {metadata.map((item) => (
                                        <span key={`${project.name}-${item}`} className="meta-chip">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            )}

                            <p className="project-description">{project.description}</p>
                            {note && <p className="project-note">{note}</p>}

                            <div className="project-foot">
                                <div className="project-tech-list">
                                    {project.tech.map((tech) => (
                                        <span key={tech} className="project-tech-chip">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="project-links">
                                    {links.length > 0 ? (
                                        links.map((link) => (
                                            <a key={`${project.name}-${link.label}`} className="project-link" href={link.href} target="_blank" rel="noopener noreferrer">
                                                {link.label}
                                            </a>
                                        ))
                                    ) : (
                                        <span className="project-link project-link-static">Case study</span>
                                    )}
                                </div>
                            </div>
                        </motion.article>
                    );
                })}
            </div>
        </motion.section>
    );
};

export default Projects;
