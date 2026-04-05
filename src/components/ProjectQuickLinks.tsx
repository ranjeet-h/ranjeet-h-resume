import { motion } from 'motion/react';
import { containerVariants, itemVariants, sectionVariants } from './animation';

interface Project {
    name: string;
    url?: string;
    website?: string;
}

interface ProjectQuickLinksProps {
    projects: Project[];
}

const getProjectHref = (project: Project) => project.website || project.url;

const getProjectLabel = (href?: string) => {
    if (!href) {
        return 'Case study';
    }

    return href.includes('github.com') ? 'Code' : 'Live';
};

const ProjectQuickLinks = ({ projects }: ProjectQuickLinksProps) => {
    const featuredProjects = projects.slice(0, 6);

    return (
        <motion.section className="panel project-rail" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} aria-labelledby="repositories-title">
            <div className="panel-head">
                <p className="section-kicker">Repositories</p>
                <h2 id="repositories-title" className="section-title">
                    Fast access to the repositories I want people to see first
                </h2>
                <p className="section-copy">A quicker way to jump from the story to the code or a live build.</p>
            </div>

            <motion.div className="project-rail-grid" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }}>
                {featuredProjects.map((project, index) => {
                    const href = getProjectHref(project);
                    const label = getProjectLabel(href);
                    const content = (
                        <>
                            <div className="project-rail-header">
                                <span className="project-rail-index">{String(index + 1).padStart(2, '0')}</span>
                                <span className="project-rail-arrow" aria-hidden="true">
                                    ↗
                                </span>
                            </div>
                            <span className="project-rail-name">{project.name}</span>
                            <span className="project-rail-label">{label}</span>
                        </>
                    );

                    if (href) {
                        return (
                            <motion.a
                                key={project.name}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-rail-card"
                                variants={itemVariants}
                                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                            >
                                {content}
                            </motion.a>
                        );
                    }

                    return (
                        <motion.div key={project.name} className="project-rail-card project-rail-card-static" variants={itemVariants}>
                            {content}
                        </motion.div>
                    );
                })}
            </motion.div>
        </motion.section>
    );
};

export default ProjectQuickLinks;
